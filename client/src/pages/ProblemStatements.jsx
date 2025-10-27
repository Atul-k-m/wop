import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProblemStatements() {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [selectedSociety, setSelectedSociety] = useState('ALL');

  // IEEE Societies with their problem statements
  const societies = [
    {
      code: 'AESS',
      name: 'Aerospace and Electronic Systems Society',
      color: 'border-blue-600 text-blue-400',
      logo: '/logos/aess.png',
      problems: [
        {
          id: 'AESS-1',
          title: 'Autonomous Drone Swarm for Disaster Response',
          difficulty: 'Hard',
          description: 'Develop a coordinated drone swarm system for search and rescue in harsh winter conditions.',
          objectives: [
            'Implement swarm intelligence algorithms for coordinated flight',
            'Integrate thermal imaging for victim detection in snow',
            'Create autonomous navigation in GPS-denied environments',
            'Develop real-time data sharing between drones',
          ],
          technologies: ['Python', 'ROS', 'Computer Vision', 'Swarm AI'],
        },
        {
          id: 'AESS-2',
          title: 'Satellite-Based Arctic Monitoring System',
          difficulty: 'Medium',
          description: 'Build a satellite ground station for monitoring climate change in polar regions.',
          objectives: [
            'Automate satellite tracking and data reception',
            'Process satellite imagery for ice coverage analysis',
            'Implement ML for climate pattern prediction',
            'Create real-time visualization dashboard',
          ],
          technologies: ['Python', 'SDR', 'ML', 'Data Analytics'],
        },
        {
          id: 'AESS-3',
          title: 'Winter Weather Radar Processing',
          difficulty: 'Hard',
          description: 'Develop advanced radar signal processing for snowstorm prediction and tracking.',
          objectives: [
            'Implement Doppler radar signal processing',
            'Create snowfall intensity estimation algorithms',
            'Develop storm tracking and prediction models',
            'Build early warning system interface',
          ],
          technologies: ['MATLAB', 'Signal Processing', 'ML', 'Python'],
        },
      ],
    },
    {
      code: 'SPS',
      name: 'Signal Processing Society',
      color: 'border-purple-600 text-purple-400',
      logo: '/logos/sps.png',
      problems: [
        {
          id: 'SPS-1',
          title: 'Avalanche Detection Audio System',
          difficulty: 'Hard',
          description: 'Create an audio signal processing system to detect and predict avalanches.',
          objectives: [
            'Implement acoustic signature recognition for snow movements',
            'Develop noise filtering for harsh mountain environments',
            'Create real-time alert system based on audio patterns',
            'Build distributed sensor network for wide coverage',
          ],
          technologies: ['Python', 'Audio Processing', 'ML', 'IoT'],
        },
        {
          id: 'SPS-2',
          title: 'Medical Imaging for Cold Injuries',
          difficulty: 'Medium',
          description: 'Develop image processing tools for diagnosing frostbite and hypothermia.',
          objectives: [
            'Implement thermal image analysis algorithms',
            'Create tissue damage assessment using ML',
            'Develop progression tracking system',
            'Build mobile diagnostic interface',
          ],
          technologies: ['Python', 'OpenCV', 'TensorFlow', 'Medical Imaging'],
        },
        {
          id: 'SPS-3',
          title: 'Ice Structure Vibration Analysis',
          difficulty: 'Medium',
          description: 'Analyze vibration signals to assess ice bridge and structure integrity.',
          objectives: [
            'Implement FFT-based vibration analysis',
            'Develop crack detection algorithms',
            'Create safety threshold prediction models',
            'Build monitoring and alert dashboard',
          ],
          technologies: ['MATLAB', 'Signal Processing', 'Sensors', 'ML'],
        },
      ],
    },
    {
      code: 'CAS',
      name: 'Circuits and Systems Society',
      color: 'border-green-600 text-green-400',
      logo: '/logos/cas.png',
      problems: [
        {
          id: 'CAS-1',
          title: 'Ultra-Low-Power Wearable Heater Circuit',
          difficulty: 'Hard',
          description: 'Design energy-efficient heating circuits for wearables in extreme cold.',
          objectives: [
            'Design adaptive heating control circuits',
            'Optimize for minimal power consumption',
            'Implement temperature feedback system',
            'Create battery management circuit',
          ],
          technologies: ['Circuit Design', 'SPICE', 'Embedded Systems'],
        },
        {
          id: 'CAS-2',
          title: 'Snow Sensor Interface Circuit',
          difficulty: 'Medium',
          description: 'Develop robust sensor interface circuits for harsh winter conditions.',
          objectives: [
            'Design temperature-compensated circuits',
            'Implement noise-resistant signal conditioning',
            'Create weatherproof sensor interfaces',
            'Optimize for wide temperature range operation',
          ],
          technologies: ['Analog Design', 'PCB Design', 'Embedded C'],
        },
        {
          id: 'CAS-3',
          title: 'FPGA-Based Ice Thickness Measurement',
          difficulty: 'Hard',
          description: 'Implement real-time ice thickness measurement using FPGA.',
          objectives: [
            'Design ultrasonic signal processing on FPGA',
            'Implement real-time data acquisition',
            'Create calibration algorithms',
            'Optimize for low latency processing',
          ],
          technologies: ['VHDL/Verilog', 'FPGA', 'Signal Processing'],
        },
      ],
    },
    {
      code: 'APS',
      name: 'Antennas and Propagation Society',
      color: 'border-cyan-600 text-cyan-400',
      logo: '/logos/aps.png',
      problems: [
        {
          id: 'APS-1',
          title: 'Snow-Penetrating Communication Antenna',
          difficulty: 'Hard',
          description: 'Design antennas for reliable communication through snow and ice.',
          objectives: [
            'Model EM wave propagation in snow',
            'Design multi-band antenna for penetration',
            'Optimize for minimal attenuation',
            'Simulate and validate performance',
          ],
          technologies: ['HFSS', 'CST', 'EM Theory', 'MATLAB'],
        },
        {
          id: 'APS-2',
          title: 'Avalanche Beacon Localization System',
          difficulty: 'Medium',
          description: 'Develop precise localization system for avalanche victims.',
          objectives: [
            'Design directional antenna array',
            'Implement RSSI-based positioning',
            'Create interference mitigation techniques',
            'Build portable receiver system',
          ],
          technologies: ['RF Design', 'Signal Processing', 'Embedded Systems'],
        },
        {
          id: 'APS-3',
          title: 'Weather-Adaptive 5G Antenna',
          difficulty: 'Medium',
          description: 'Create adaptive antenna system for 5G in severe weather.',
          objectives: [
            'Design reconfigurable antenna elements',
            'Implement weather condition sensing',
            'Optimize beamforming for snow/rain',
            'Develop automatic tuning algorithms',
          ],
          technologies: ['RF Design', 'MATLAB', '5G Standards', 'ML'],
        },
      ],
    },
    {
      code: 'MTTS',
      name: 'Microwave Theory and Techniques Society',
      color: 'border-orange-600 text-orange-400',
      logo: '/logos/mtts.jpg',
      problems: [
        {
          id: 'MTTS-1',
          title: 'Ground-Penetrating Radar for Crevasse Detection',
          difficulty: 'Hard',
          description: 'Develop GPR system to detect hidden crevasses in glaciers.',
          objectives: [
            'Design microwave transmitter/receiver',
            'Implement subsurface imaging algorithms',
            'Create real-time hazard mapping',
            'Optimize for mobile deployment',
          ],
          technologies: ['Microwave Engineering', 'Signal Processing', 'ML'],
        },
        {
          id: 'MTTS-2',
          title: 'Microwave De-Icing System',
          difficulty: 'Medium',
          description: 'Build efficient microwave-based de-icing for critical infrastructure.',
          objectives: [
            'Design focused microwave applicator',
            'Optimize power delivery efficiency',
            'Implement safety and control systems',
            'Test on various ice formations',
          ],
          technologies: ['Microwave Theory', 'Power Electronics', 'Control'],
        },
        {
          id: 'MTTS-3',
          title: 'Snow Depth Measurement Using Microwaves',
          difficulty: 'Medium',
          description: 'Create non-contact snow depth measurement system.',
          objectives: [
            'Design FMCW radar system',
            'Implement signal processing for depth calculation',
            'Calibrate for different snow types',
            'Build IoT-enabled monitoring network',
          ],
          technologies: ['FMCW Radar', 'Python', 'IoT', 'Signal Processing'],
        },
      ],
    },
    {
      code: 'COMSOC',
      name: 'Communications Society',
      color: 'border-indigo-600 text-indigo-400',
      logo: '/logos/comsoc.png',
      problems: [
        {
          id: 'COMSOC-1',
          title: 'Emergency Mesh Network for Winter Storms',
          difficulty: 'Hard',
          description: 'Build resilient mesh network for communication during power outages.',
          objectives: [
            'Implement self-healing mesh protocols',
            'Design energy-efficient routing',
            'Create priority-based message handling',
            'Integrate with emergency services',
          ],
          technologies: ['Networking', 'Python', 'LoRa', 'Embedded Systems'],
        },
        {
          id: 'COMSOC-2',
          title: 'Underwater Communication for Ice Research',
          difficulty: 'Hard',
          description: 'Develop underwater acoustic communication under ice sheets.',
          objectives: [
            'Design acoustic modem for ice environments',
            'Implement error correction for high noise',
            'Create ice-penetrating protocols',
            'Build data collection network',
          ],
          technologies: ['Underwater Acoustics', 'DSP', 'Networking'],
        },
        {
          id: 'COMSOC-3',
          title: 'Satellite IoT for Remote Monitoring',
          difficulty: 'Medium',
          description: 'Create satellite-based IoT system for remote winter monitoring.',
          objectives: [
            'Implement low-power satellite communication',
            'Design efficient data protocols',
            'Create sensor integration framework',
            'Build cloud-based analytics platform',
          ],
          technologies: ['Satellite Comm', 'IoT', 'Cloud', 'Python'],
        },
      ],
    },
    {
      code: 'CIS',
      name: 'Computational Intelligence Society',
      color: 'border-pink-600 text-pink-400',
      logo: '/logos/cis.jpg',
      problems: [
        {
          id: 'CIS-1',
          title: 'AI-Based Snowstorm Prediction',
          difficulty: 'Hard',
          description: 'Develop advanced ML models for accurate snowstorm forecasting.',
          objectives: [
            'Implement ensemble learning models',
            'Integrate multiple data sources (satellite, ground)',
            'Create interpretable prediction outputs',
            'Build real-time forecasting system',
          ],
          technologies: ['Python', 'TensorFlow', 'Data Science', 'ML'],
        },
        {
          id: 'CIS-2',
          title: 'Fuzzy Logic Heating Control',
          difficulty: 'Medium',
          description: 'Design intelligent heating system using fuzzy logic.',
          objectives: [
            'Create fuzzy inference system for comfort',
            'Optimize energy consumption',
            'Implement adaptive learning',
            'Integrate with smart home systems',
          ],
          technologies: ['Fuzzy Logic', 'Python', 'IoT', 'Control Systems'],
        },
        {
          id: 'CIS-3',
          title: 'Genetic Algorithm for Route Optimization',
          difficulty: 'Medium',
          description: 'Optimize snow removal vehicle routes using genetic algorithms.',
          objectives: [
            'Implement multi-objective GA',
            'Integrate real-time traffic and weather',
            'Minimize fuel and time consumption',
            'Create dynamic re-routing system',
          ],
          technologies: ['Python', 'Optimization', 'GIS', 'ML'],
        },
      ],
    },
    {
      code: 'CS',
      name: 'Computer Society',
      color: 'border-red-600 text-red-400',
      logo: '/logos/cs.png',
      problems: [
        {
          id: 'CS-1',
          title: 'Distributed Winter Emergency Response Platform',
          difficulty: 'Hard',
          description: 'Build distributed system for coordinating emergency services.',
          objectives: [
            'Implement microservices architecture',
            'Design fault-tolerant distributed database',
            'Create real-time coordination protocols',
            'Ensure high availability during crises',
          ],
          technologies: ['Distributed Systems', 'Docker', 'Kubernetes', 'Go'],
        },
        {
          id: 'CS-2',
          title: 'Blockchain for Winter Supply Chain',
          difficulty: 'Medium',
          description: 'Create transparent supply chain for winter emergency supplies.',
          objectives: [
            'Implement smart contracts for automation',
            'Design supply tracking system',
            'Create verification mechanisms',
            'Build analytics dashboard',
          ],
          technologies: ['Blockchain', 'Solidity', 'Web3', 'React'],
        },
        {
          id: 'CS-3',
          title: 'Edge Computing for Remote Sensors',
          difficulty: 'Hard',
          description: 'Implement edge computing for processing remote sensor data.',
          objectives: [
            'Design edge processing architecture',
            'Implement local AI inference',
            'Create data synchronization protocols',
            'Optimize for low-power operation',
          ],
          technologies: ['Edge Computing', 'Python', 'TensorFlow Lite', 'IoT'],
        },
      ],
    },
    {
      code: 'EMBS',
      name: 'Engineering in Medicine and Biology Society',
      color: 'border-teal-600 text-teal-400',
      logo: '/logos/embs.png',
      problems: [
        {
          id: 'EMBS-1',
          title: 'Hypothermia Detection Wearable',
          difficulty: 'Hard',
          description: 'Develop wearable device for early hypothermia detection.',
          objectives: [
            'Implement multi-sensor vital sign monitoring',
            'Create ML-based risk assessment',
            'Design emergency alert system',
            'Ensure low-power, cold-resistant operation',
          ],
          technologies: ['Embedded Systems', 'ML', 'BioMedical Sensors'],
        },
        {
          id: 'EMBS-2',
          title: 'Remote Health Monitoring in Arctic',
          difficulty: 'Medium',
          description: 'Build telemedicine platform for remote arctic communities.',
          objectives: [
            'Implement low-bandwidth video consultation',
            'Create offline diagnostic tools',
            'Design cold-weather medical device interfaces',
            'Ensure HIPAA compliance',
          ],
          technologies: ['React', 'WebRTC', 'Python', 'Medical IT'],
        },
        {
          id: 'EMBS-3',
          title: 'Frostbite Assessment AI',
          difficulty: 'Hard',
          description: 'Develop AI system for frostbite severity assessment.',
          objectives: [
            'Implement thermal and visual image analysis',
            'Create tissue damage classification model',
            'Design treatment recommendation system',
            'Build mobile diagnostic app',
          ],
          technologies: ['Deep Learning', 'Computer Vision', 'Flutter', 'AI'],
        },
      ],
    },
    {
      code: 'ITS',
      name: 'Intelligent Transportation Systems Society',
      color: 'border-yellow-600 text-yellow-400',
      logo: '/logos/its.png',
      problems: [
        {
          id: 'ITS-1',
          title: 'Smart Winter Road Management',
          difficulty: 'Hard',
          description: 'Create AI-powered system for winter road maintenance optimization.',
          objectives: [
            'Implement road condition monitoring using sensors',
            'Predict ice formation and accidents',
            'Optimize snow plow routing in real-time',
            'Create public safety alert system',
          ],
          technologies: ['Computer Vision', 'ML', 'IoT', 'GIS'],
        },
        {
          id: 'ITS-2',
          title: 'Autonomous Snow Removal Vehicle',
          difficulty: 'Hard',
          description: 'Develop autonomous navigation for snow removal vehicles.',
          objectives: [
            'Implement SLAM in snow-covered environments',
            'Create obstacle detection in low visibility',
            'Design path planning for efficient coverage',
            'Integrate with traffic management systems',
          ],
          technologies: ['ROS', 'LiDAR', 'Computer Vision', 'Python'],
        },
        {
          id: 'ITS-3',
          title: 'V2X Communication for Winter Safety',
          difficulty: 'Medium',
          description: 'Build vehicle-to-everything communication for winter hazards.',
          objectives: [
            'Implement V2X protocols for ice warnings',
            'Create cooperative collision avoidance',
            'Design emergency vehicle prioritization',
            'Test with simulation and real vehicles',
          ],
          technologies: ['V2X', 'Networking', 'Embedded Systems', 'C++'],
        },
      ],
    },
    {
      code: 'PHOTON',
      name: 'Photonics Society',
      color: 'border-lime-600 text-lime-400',
      logo: '/logos/photon.jpeg',
      problems: [
        {
          id: 'PHOTON-1',
          title: 'LiDAR for Snowfall Measurement',
          difficulty: 'Hard',
          description: 'Develop LiDAR system for real-time snowfall rate measurement.',
          objectives: [
            'Design optical system for snow detection',
            'Implement particle size and velocity analysis',
            'Create 3D snow accumulation mapping',
            'Build automated monitoring station',
          ],
          technologies: ['LiDAR', 'Signal Processing', 'Python', 'Optics'],
        },
        {
          id: 'PHOTON-2',
          title: 'Fiber Optic Sensing for Avalanche Detection',
          difficulty: 'Medium',
          description: 'Create distributed fiber optic sensor network for avalanche prediction.',
          objectives: [
            'Implement distributed acoustic sensing',
            'Detect snow movement patterns',
            'Create early warning algorithms',
            'Deploy in mountain environments',
          ],
          technologies: ['Fiber Optics', 'Signal Processing', 'Sensors'],
        },
        {
          id: 'PHOTON-3',
          title: 'Optical Communication Through Snow',
          difficulty: 'Hard',
          description: 'Design free-space optical communication resilient to snowfall.',
          objectives: [
            'Model optical attenuation in snow',
            'Implement adaptive modulation',
            'Create beam steering and tracking',
            'Test in real weather conditions',
          ],
          technologies: ['Optical Comm', 'Photonics', 'Signal Processing'],
        },
      ],
    },
    {
      code: 'PES',
      name: 'Power & Energy Society',
      color: 'border-emerald-600 text-emerald-400',
      logo: '/logos/pes.png',
      problems: [
        {
          id: 'PES-1',
          title: 'Winter Storm Power Grid Resilience',
          difficulty: 'Hard',
          description: 'Develop smart grid system resilient to winter storms.',
          objectives: [
            'Implement predictive load management',
            'Create ice accumulation monitoring',
            'Design automatic fault isolation',
            'Integrate distributed energy resources',
          ],
          technologies: ['Power Systems', 'ML', 'IoT', 'Python'],
        },
        {
          id: 'PES-2',
          title: 'Solar Panel Snow Removal System',
          difficulty: 'Medium',
          description: 'Design automated snow removal for solar installations.',
          objectives: [
            'Create smart heating element control',
            'Optimize for minimal energy consumption',
            'Implement snow load sensing',
            'Maximize energy production in winter',
          ],
          technologies: ['Power Electronics', 'Control Systems', 'IoT'],
        },
        {
          id: 'PES-3',
          title: 'Microgrid for Remote Arctic Community',
          difficulty: 'Hard',
          description: 'Build resilient microgrid for isolated arctic settlement.',
          objectives: [
            'Design hybrid renewable energy system',
            'Implement energy storage optimization',
            'Create demand response management',
            'Ensure cold-weather reliability',
          ],
          technologies: ['Microgrids', 'Renewable Energy', 'Control', 'ML'],
        },
      ],
    },
    {
      code: 'RAS',
      name: 'Robotics and Automation Society',
      color: 'border-violet-600 text-violet-400',
      logo: '/logos/Ras.png',
      problems: [
        {
          id: 'RAS-1',
          title: 'Search and Rescue Robot for Avalanches',
          difficulty: 'Hard',
          description: 'Develop autonomous robot for locating avalanche victims.',
          objectives: [
            'Implement navigation in unstable snow',
            'Create multi-sensor victim detection',
            'Design cold-resistant robotic platform',
            'Integrate with rescue team coordination',
          ],
          technologies: ['ROS', 'Computer Vision', 'Robotics', 'ML'],
        },
        {
          id: 'RAS-2',
          title: 'Robotic Ice Core Sampling',
          difficulty: 'Hard',
          description: 'Build automated system for ice core extraction and analysis.',
          objectives: [
            'Design precision drilling mechanism',
            'Implement depth and position control',
            'Create automated sample handling',
            'Integrate environmental sensors',
          ],
          technologies: ['Robotics', 'Control Systems', 'Embedded', 'ML'],
        },
        {
          id: 'RAS-3',
          title: 'Swarm Robots for Snow Survey',
          difficulty: 'Medium',
          description: 'Deploy robot swarm for large-area snow depth surveying.',
          objectives: [
            'Implement swarm coordination algorithms',
            'Create collaborative mapping',
            'Design energy-efficient operation',
            'Build data aggregation system',
          ],
          technologies: ['Swarm Robotics', 'ROS', 'Python', 'Sensors'],
        },
      ],
    },
  ];

  const filteredSocieties = selectedSociety === 'ALL' 
    ? societies 
    : societies.filter(s => s.code === selectedSociety);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .got-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.1em;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 2000px;
            opacity: 1;
          }
        }

        .slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }

        @keyframes glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .glow-pulse {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0); opacity: 0.7; }
          100% { transform: translateY(100vh) translateX(10px); opacity: 0.3; }
        }

        .snowflake {
          position: fixed;
          top: -10vh;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1em;
          animation: snowfall linear infinite;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* Snowfall Effect */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 8 + 8}px`,
          }}
        >
          ❄
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-6 flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="glow-pulse"
            >
              <path
                d="M50 10 L70 30 L90 30 L90 50 L70 70 L50 90 L30 70 L10 50 L10 30 L30 30 Z"
                stroke="rgba(148, 163, 184, 0.8)"
                strokeWidth="2.5"
                fill="rgba(148, 163, 184, 0.1)"
              />
              <circle cx="50" cy="50" r="12" fill="rgba(148, 163, 184, 0.6)" />
            </svg>
          </div>

          <h1 className="got-font text-5xl md:text-7xl mb-6 text-slate-100 tracking-wide">
            PROBLEM STATEMENTS
          </h1>
          
          <div className="w-32 h-px bg-slate-400 mx-auto mb-8" />

          <p className="text-2xl md:text-3xl text-slate-300 italic mb-4 got-font">
            IEEE Societies Challenges
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto">
             Choose your domain and forge your solution.
          </p>
        </div>

        {/* Society Filter */}
        <div className="mb-12 fade-in">
          <h3 className="text-slate-300 text-center mb-6 tracking-wider text-lg">Filter by Society</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <button
              onClick={() => setSelectedSociety('ALL')}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm tracking-wider font-medium border-2 transition-all duration-300 ${
                selectedSociety === 'ALL'
                  ? 'border-slate-400 bg-slate-800 text-slate-100'
                  : 'border-slate-700 text-slate-400 hover:border-slate-500'
              }`}
            >
              ALL
            </button>
            {societies.map((society) => (
              <button
                key={society.code}
                onClick={() => setSelectedSociety(society.code)}
                className={`px-3 md:px-4 py-2 text-xs md:text-sm tracking-wider font-medium border-2 transition-all duration-300 ${
                  selectedSociety === society.code
                    ? `${society.color} bg-slate-900`
                    : 'border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                {society.code}
              </button>
            ))}
          </div>
        </div>

        {/* Societies and Problems */}
        <div className="space-y-12">
          {filteredSocieties.map((society, societyIndex) => (
            <div
              key={society.code}
              className="fade-in"
              style={{ animationDelay: `${societyIndex * 0.1}s`, opacity: 0 }}
            >
              {/* Society Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-2">
                  <img 
                    src={society.logo} 
                    alt={`${society.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-lg p-2 border-2 border-slate-700 hover:border-slate-500 transition-all duration-300"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-slate-500 tracking-wider font-semibold mb-1">
                      {society.code}
                    </span>
                    <h2 className="text-xl md:text-3xl font-bold text-slate-200 tracking-wide">
                      {society.name}
                    </h2>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800 mt-4" />
              </div>

              {/* Problems for this Society */}
              <div className="space-y-4 ml-0 md:ml-8">
                {society.problems.map((problem, problemIndex) => (
                  <div
                    key={problem.id}
                    className="bg-slate-900/50 border-2 border-slate-800 hover:border-slate-700 transition-colors duration-300"
                  >
                    {/* Problem Header */}
                    <div
                      className="p-4 md:p-6 cursor-pointer"
                      onClick={() =>
                        setExpandedProblem(expandedProblem === problem.id ? null : problem.id)
                      }
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 md:gap-4 mb-3">
                            <span className={`px-2 md:px-3 py-1 border-2 ${society.color} font-bold text-xs md:text-sm shrink-0`}>
                              {problemIndex + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg md:text-2xl font-bold text-slate-100 mb-2 tracking-wide wrap-break-word">
                                {problem.title}
                              </h3>
                              <p className="text-slate-400 text-sm md:text-base">
                                {problem.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <svg
                          className={`w-5 h-5 md:w-6 md:h-6 text-slate-400 transition-transform duration-300 shrink-0 ${
                            expandedProblem === problem.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedProblem === problem.id && (
                      <div className="border-t border-slate-800 p-4 md:p-6 slide-down">
                        {/* Objectives */}
                        <div>
                          <h4 className="text-slate-200 font-semibold text-base md:text-lg mb-4 tracking-wide">
                            Objectives
                          </h4>
                          <ul className="space-y-3">
                            {problem.objectives.map((objective, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <svg
                                  className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-slate-300 text-sm">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900/50 border-2 border-slate-800 p-6 md:p-8 text-center fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 tracking-wide got-font">
            Ready to Begin Your Quest?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Select your preferred problem statement and register your team. 
            Winter is coming - will you answer the call?
          </p>
          <button className="px-6 md:px-8 py-3 border-2 border-slate-500 text-slate-200 font-semibold text-sm md:text-base tracking-widest hover:border-slate-300 hover:bg-slate-800 transition-all duration-300">
            REGISTER NOW
          </button>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12 fade-in">
          <p className="text-slate-500 text-xs md:text-sm italic">
            "When winter comes, the lone coder freezes, but the team survives"
          </p>
        </div>
      </div>
    </div>
  );
}
