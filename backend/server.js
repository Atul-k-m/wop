const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const PORT = 5000;
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Team Registration Schema
const teamRegistrationSchema = new mongoose.Schema({
  // Team Details
  teamName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  
  // Leader Details
  leader: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    usn: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
    },
    year: {
      type: String,
      required: true,
      enum: ['1', '2', '3', '4']
    },
   
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    }
  },
  
  // Team Members (2-4 total including leader, so 1-3 additional members)
  members: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    usn: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },
    year: {
      type: String,
      required: true,
      enum: ['1', '2', '3', '4']
    },
   
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    }
  }],
  
  // Project Details
  project: {
    type: {
      type: String,
      required: true,
      enum: ['problem-statement', 'open-innovation']
    },
    psId: {
      type: String,
      trim: true,
      uppercase: true
    },
    idea: {
      type: String,
      trim: true,
      maxlength: 150
    },
    pptLink: {
      type: String,
      required: true,
      trim: true
    }
  },
  
  registeredAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for members USN queries (leader.usn and teamName already indexed via unique: true)
teamRegistrationSchema.index({ 'members.usn': 1 });

const TeamRegistration = mongoose.model('TeamRegistration', teamRegistrationSchema);

// Register Team endpoint

  app.post('/api/register', async (req, res) => {
  const requestId = Date.now();
  console.log(`\n📝 [${requestId}] New registration request received`);
  
  // ADD THIS DEBUGGING CODE
  console.log('REQUEST BODY:', JSON.stringify(req.body, null, 2));
  console.log('Validation check:');
  console.log('  teamName:', !!req.body.teamName, req.body.teamName);
  console.log('  leaderName:', !!req.body.leaderName, req.body.leaderName);
  console.log('  leaderUSN:', !!req.body.leaderUSN, req.body.leaderUSN);
  console.log('  leaderYear:', !!req.body.leaderYear, req.body.leaderYear);
  console.log('  leaderEmail:', !!req.body.leaderEmail, req.body.leaderEmail);
  console.log('  leaderPhone:', !!req.body.leaderPhone, req.body.leaderPhone);
  
  try {
    const { teamName, leaderName, leaderUSN, leaderYear, leaderEmail, leaderPhone, members, projectType, psId, idea, pptLink } = req.body;

    console.log(`[${requestId}] Team Name: ${teamName}`);
    console.log(`[${requestId}] Leader: ${leaderName} (${leaderUSN})`);
    console.log(`[${requestId}] Members Count: ${members?.length || 0}`);
    console.log(`[${requestId}] Project Type: ${projectType}`);

    // Validation - Basic fields
    if (!teamName || !leaderName || !leaderUSN || !leaderYear || !leaderEmail || !leaderPhone) {
      console.log(`❌ [${requestId}] Validation failed: Missing leader or team details`);
      return res.status(400).json({
        success: false,
        message: 'All leader and team details are required'
      });
    }

    // Validation - Members array
    if (!members || !Array.isArray(members) || members.length < 1 || members.length > 3) {
      console.log(`❌ [${requestId}] Validation failed: Invalid members count (${members?.length || 0})`);
      return res.status(400).json({
        success: false,
        message: 'Team must have 2-4 members total (1-3 additional members plus leader)'
      });
    }

    // Validation - Project details
    if (!projectType || !pptLink) {
      console.log(`❌ [${requestId}] Validation failed: Missing project type or PPT link`);
      return res.status(400).json({
        success: false,
        message: 'Project type and PPT link are required'
      });
    }

    if (projectType === 'problem-statement' && !psId) {
      console.log(`❌ [${requestId}] Validation failed: Missing PS ID for problem statement`);
      return res.status(400).json({
        success: false,
        message: 'Problem Statement ID is required'
      });
    }

    if (projectType === 'open-innovation' && !idea) {
      console.log(`❌ [${requestId}] Validation failed: Missing idea for open innovation`);
      return res.status(400).json({
        success: false,
        message: 'Project idea is required for open innovation'
      });
    }

    // Validate all members have required fields
    console.log(`[${requestId}] Validating member details...`);
    for (let i = 0; i < members.length; i++) {
      const member = members[i];
      if (!member.name || !member.usn || !member.year || !member.email) {
        console.log(`❌ [${requestId}] Validation failed: Member ${i + 1} has missing details`);
        console.log(`[${requestId}] Member ${i + 1}:`, member);
        return res.status(400).json({
          success: false,
          message: `All details required for member ${i + 1}`
        });
      }
      
      // Validate member email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(member.email)) {
        console.log(`❌ [${requestId}] Validation failed: Member ${i + 1} has invalid email: ${member.email}`);
        return res.status(400).json({
          success: false,
          message: `Invalid email format for member ${i + 1}: ${member.email}`
        });
      }
    }
    
    // Validate leader email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(leaderEmail)) {
      console.log(`❌ [${requestId}] Validation failed: Invalid leader email: ${leaderEmail}`);
      return res.status(400).json({
        success: false,
        message: `Invalid leader email format: ${leaderEmail}`
      });
    }
    
    // Validate leader phone format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(leaderPhone)) {
      console.log(`❌ [${requestId}] Validation failed: Invalid leader phone: ${leaderPhone}`);
      return res.status(400).json({
        success: false,
        message: `Leader phone must be exactly 10 digits: ${leaderPhone}`
      });
    }
    
    // Validate PPT link format
    try {
      new URL(pptLink);
    } catch (e) {
      console.log(`❌ [${requestId}] Validation failed: Invalid PPT link: ${pptLink}`);
      return res.status(400).json({
        success: false,
        message: `Invalid PPT link format. Must be a valid URL: ${pptLink}`
      });
    }

    // Check if team name already exists
    console.log(`[${requestId}] Checking for duplicate team name...`);
    const existingTeam = await TeamRegistration.findOne({ 
      teamName: { $regex: new RegExp(`^${teamName}$`, 'i') }
    });
    if (existingTeam) {
      console.log(`❌ [${requestId}] Team name "${teamName}" already exists (ID: ${existingTeam._id})`);
      return res.status(400).json({
        success: false,
        message: 'Team name already registered'
      });
    }

    // Check if leader USN already exists
    console.log(`[${requestId}] Checking for duplicate leader USN...`);
    const existingLeaderUSN = await TeamRegistration.findOne({ 
      $or: [
        { 'leader.usn': leaderUSN.toUpperCase() },
        { 'members.usn': leaderUSN.toUpperCase() }
      ]
    });
    if (existingLeaderUSN) {
      console.log(`❌ [${requestId}] Leader USN "${leaderUSN}" already registered in team "${existingLeaderUSN.teamName}"`);
      return res.status(400).json({
        success: false,
        message: 'Leader USN already registered in another team'
      });
    }

    // Check if any member USN already exists
    console.log(`[${requestId}] Checking for duplicate member USNs...`);
    const allMemberUSNs = members.map(m => m.usn.toUpperCase());
    const existingMemberUSN = await TeamRegistration.findOne({ 
      $or: [
        { 'leader.usn': { $in: allMemberUSNs } },
        { 'members.usn': { $in: allMemberUSNs } }
      ]
    });
    if (existingMemberUSN) {
      console.log(`❌ [${requestId}] One or more member USNs already registered in team "${existingMemberUSN.teamName}"`);
      return res.status(400).json({
        success: false,
        message: 'One or more member USNs are already registered'
      });
    }

    // Check for duplicate USNs within the team
    console.log(`[${requestId}] Checking for duplicate USNs within team...`);
    const allUSNs = [leaderUSN.toUpperCase(), ...allMemberUSNs];
    const uniqueUSNs = new Set(allUSNs);
    if (uniqueUSNs.size !== allUSNs.length) {
      console.log(`❌ [${requestId}] Duplicate USNs found within the team: ${allUSNs.join(', ')}`);
      return res.status(400).json({
        success: false,
        message: 'Duplicate USNs found within the team'
      });
    }

    // Create new team registration
    console.log(`[${requestId}] Creating new team registration...`);
    const newTeam = new TeamRegistration({
      teamName,
      leader: {
        name: leaderName,
        usn: leaderUSN.toUpperCase(),
        year: leaderYear,
        email: leaderEmail.toLowerCase(),
        phone: leaderPhone
      },
      members: members.map(member => ({
        name: member.name,
        usn: member.usn.toUpperCase(),
        year: member.year,
        email: member.email.toLowerCase()
      })),
      project: {
        type: projectType,
        psId: projectType === 'problem-statement' ? psId.toUpperCase() : undefined,
        idea: projectType === 'open-innovation' ? idea : undefined,
        pptLink
      }
    });

    await newTeam.save();

    console.log(`✅ [${requestId}] Team registered successfully!`);
    console.log(`[${requestId}] Team ID: ${newTeam._id}`);
    console.log(`[${requestId}] Team Name: ${newTeam.teamName}`);
    console.log(`[${requestId}] Total Members: ${newTeam.members.length + 1}`);

    return res.status(201).json({
      success: true,
      message: 'Team registration successful',
      data: {
        teamName: newTeam.teamName,
        teamId: newTeam._id,
        memberCount: newTeam.members.length + 1
      }
    });

  } catch (error) {
    console.error(`❌ [${requestId}] Registration error:`, error.message);
    console.error(`[${requestId}] Error stack:`, error.stack);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(e => e.message);
      console.error(`[${requestId}] Validation errors:`, validationErrors);
      return res.status(400).json({
        success: false,
        message: 'Validation error: ' + validationErrors.join(', ')
      });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      console.error(`[${requestId}] Duplicate key error:`, error.keyValue);
      return res.status(400).json({
        success: false,
        message: 'A record with this information already exists'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all team registrations
app.get('/api/registrations', async (req, res) => {
  console.log('\n📋 Fetching all registrations...');
  try {
    const teams = await TeamRegistration.find().sort({ registeredAt: -1 });
    console.log(`✅ Found ${teams.length} team(s)`);
    res.json({
      success: true,
      count: teams.length,
      data: teams
    });
  } catch (error) {
    console.error('❌ Error fetching registrations:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Error fetching registrations'
    });
  }
});

// Get team by team name
app.get('/api/team/:teamName', async (req, res) => {
  const { teamName } = req.params;
  console.log(`\n🔍 Searching for team: ${teamName}`);
  
  try {
    const team = await TeamRegistration.findOne({ 
      teamName: { $regex: new RegExp(`^${teamName}$`, 'i') }
    });
    
    if (!team) {
      console.log(`❌ Team "${teamName}" not found`);
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }

    console.log(`✅ Team found: ${team.teamName} (ID: ${team._id})`);
    res.json({
      success: true,
      data: team
    });
  } catch (error) {
    console.error(`❌ Error fetching team "${teamName}":`, error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Error fetching team'
    });
  }
});

// Get team by USN (leader or member)
app.get('/api/registration/:usn', async (req, res) => {
  const usn = req.params.usn.toUpperCase();
  console.log(`\n🔍 Searching for registration with USN: ${usn}`);
  
  try {
    const team = await TeamRegistration.findOne({ 
      $or: [
        { 'leader.usn': usn },
        { 'members.usn': usn }
      ]
    });
    
    if (!team) {
      console.log(`❌ No registration found for USN: ${usn}`);
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    console.log(`✅ Registration found: Team "${team.teamName}" (ID: ${team._id})`);
    res.json({
      success: true,
      data: team
    });
  } catch (error) {
    console.error(`❌ Error fetching registration for USN "${usn}":`, error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Error fetching registration'
    });
  }
});

// Get statistics
app.get('/api/stats', async (req, res) => {
  console.log('\n📊 Fetching statistics...');
  
  try {
    const totalTeams = await TeamRegistration.countDocuments();
    const problemStatements = await TeamRegistration.countDocuments({ 'project.type': 'problem-statement' });
    const openInnovations = await TeamRegistration.countDocuments({ 'project.type': 'open-innovation' });
    
    console.log(`✅ Statistics:`);
    console.log(`   Total Teams: ${totalTeams}`);
    console.log(`   Problem Statements: ${problemStatements}`);
    console.log(`   Open Innovations: ${openInnovations}`);

    res.json({
      success: true,
      data: {
        totalTeams,
        problemStatements,
        openInnovations,
      }
    });
  } catch (error) {
    console.error('❌ Error fetching statistics:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics'
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('\n❌ Unhandled error:', err.message);
  console.error('Error stack:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('='.repeat(50) + '\n');
});