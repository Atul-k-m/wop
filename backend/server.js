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

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
// For MongoDB Atlas (cloud): 'mongodb+srv://username:password@cluster.mongodb.net/registration_db'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Registration Schema
const registrationSchema = new mongoose.Schema({
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
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

const Registration = mongoose.model('Registration', registrationSchema);

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, usn, year, domain } = req.body;

    // Validation
    if (!name || !usn || !year || !domain) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check if USN already exists
    const existingUser = await Registration.findOne({ usn: usn.toUpperCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'USN already registered'
      });
    }

    // Create new registration
    const newRegistration = new Registration({
      name,
      usn: usn.toUpperCase(),
      year,
      domain
    });

    await newRegistration.save();

    console.log('New registration:', newRegistration);

    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: newRegistration
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all registrations
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ registeredAt: -1 });
    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching registrations'
    });
  }
});

// Get registration by USN
app.get('/api/registration/:usn', async (req, res) => {
  try {
    const registration = await Registration.findOne({ 
      usn: req.params.usn.toUpperCase() 
    });
    
    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.json({
      success: true,
      data: registration
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching registration'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});