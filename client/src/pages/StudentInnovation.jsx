import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentInnovation() {
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

        .winter-glow {
          text-shadow: 0 0 20px rgba(148, 163, 184, 0.4);
        }
      `}</style>

      {/* Snowfall Effect */}
      {[...Array(15)].map((_, i) => (
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

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <div className="mb-6 flex justify-center">
              <svg
                width="70"
                height="70"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="glow-pulse"
              >
                <path
                  d="M50 10 L35 30 L20 35 L15 50 L20 65 L30 75 L35 85 L40 90 L50 95 L60 90 L65 85 L70 75 L80 65 L85 50 L80 35 L65 30 L50 10 Z M50 25 L45 35 L40 40 L35 45 L40 50 L45 45 L50 40 L55 45 L60 50 L65 45 L60 40 L55 35 L50 25 Z"
                  fill="rgba(148, 163, 184, 0.2)"
                  stroke="rgba(148, 163, 184, 0.6)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            
            <h1 className="got-font text-5xl md:text-7xl mb-4 text-slate-100 tracking-wide winter-glow">
              STUDENT INNOVATION
            </h1>
            <div className="w-32 h-px bg-slate-500/50 mx-auto mb-6 glow-pulse"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              2nd & 3rd year students with exceptional projects can apply for IEEE support
            </p>
          </div>

          {/* IEEE Support Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900/30 border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 fade-in backdrop-blur-sm p-8">
              <div className="text-center mb-4">
                <div className="text-5xl mb-4">🎓</div>
                <h2 className="text-2xl font-bold text-slate-200 tracking-wide">MENTORSHIP</h2>
              </div>
              <p className="text-slate-400 text-center">
                Expert guidance from industry professionals and IEEE members
              </p>
            </div>

            <div className="bg-slate-900/30 border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 fade-in backdrop-blur-sm p-8">
              <div className="text-center mb-4">
                <div className="text-5xl mb-4">💰</div>
                <h2 className="text-2xl font-bold text-slate-200 tracking-wide">FUNDING</h2>
              </div>
              <p className="text-slate-400 text-center">
                Financial support to turn your innovative ideas into reality
              </p>
            </div>

            <div className="bg-slate-900/30 border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 fade-in backdrop-blur-sm p-8">
              <div className="text-center mb-4">
                <div className="text-5xl mb-4">🔧</div>
                <h2 className="text-2xl font-bold text-slate-200 tracking-wide">RESOURCES</h2>
              </div>
              <p className="text-slate-400 text-center">
                Access to labs, equipment, and technical infrastructure
              </p>
            </div>
          </div>

          {/* How IEEE Support Helps */}
          <div className="bg-slate-900/50 border-2 border-slate-800 p-8 mb-12 backdrop-blur-sm fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center text-slate-100 tracking-wide winter-glow">Breaking Barriers to Innovation</h2>
            <p className="text-slate-300 text-center mb-8 text-lg">
              We believe financial constraints should never limit brilliant minds. IEEE support ensures every deserving student gets the opportunity to innovate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-slate-700/70 border-2 border-slate-600 flex items-center justify-center font-bold text-xl">💡</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2 tracking-wide">For Students Without Funding</h3>
                  <p className="text-slate-400">
                    Don't let budget constraints hold you back! IEEE provides financial grants to cover project expenses including components, prototyping materials, software licenses, and testing equipment. Your innovative idea deserves to be built, regardless of your financial background.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-slate-700/70 border-2 border-slate-600 flex items-center justify-center font-bold text-xl">🛠️</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2 tracking-wide">Access to Premium Resources</h3>
                  <p className="text-slate-400">
                    No lab access at home? No problem! Get free access to IEEE's state-of-the-art laboratories, 3D printers, oscilloscopes, microcontrollers, development boards, and specialized testing equipment. Work in professional-grade facilities that would otherwise be out of reach.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-slate-700/70 border-2 border-slate-600 flex items-center justify-center font-bold text-xl">👥</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2 tracking-wide">Expert Mentorship & Guidance</h3>
                  <p className="text-slate-400">
                    Stuck on technical challenges? Our experienced IEEE mentors provide one-on-one guidance, help troubleshoot problems, review your designs, and connect you with industry experts. Get the support that makes the difference between a struggling project and a successful innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-slate-700/70 border-2 border-slate-600 flex items-center justify-center font-bold text-xl">📚</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2 tracking-wide">Learning Resources & Training</h3>
                  <p className="text-slate-400">
                    Access IEEE's extensive library of research papers, technical journals, online courses, and workshops—all at no cost. Learn from the best in the field and stay updated with cutting-edge technologies without worrying about expensive subscriptions or course fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-slate-700/70 border-2 border-slate-600 flex items-center justify-center font-bold text-xl">🌐</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2 tracking-wide">Networking & Recognition</h3>
                  <p className="text-slate-400">
                    Showcase your project at IEEE conferences and competitions. Connect with industry leaders, potential investors, and fellow innovators. Gain recognition that opens doors to internships, job opportunities, and further research possibilities—all while building your professional network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-slate-900/30 border-2 border-slate-800 p-8 mb-12 backdrop-blur-sm fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center text-slate-100 tracking-wide winter-glow">Who Can Apply?</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 text-xl">✓</span>
                <p>2nd and 3rd year undergraduate students from any engineering discipline</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 text-xl">✓</span>
                <p>Students with innovative project ideas that address real-world problems</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 text-xl">✓</span>
                <p>Projects demonstrating technical excellence and social impact potential</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 text-xl">✓</span>
                <p>Students who lack financial resources or access to technical infrastructure</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-400 text-xl">✓</span>
                <p>Commitment to complete the project and present findings</p>
              </div>
            </div>
          </div>

          {/* Student Testimonials */}
          <div className="bg-slate-900/30 border-2 border-slate-800 p-8 mb-12 backdrop-blur-sm fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 tracking-wide winter-glow">Student Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">👤</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">Priya Sharma</h3>
                    <p className="text-sm text-slate-400">3rd Year, Electronics Engineering</p>
                  </div>
                </div>
                <p className="text-slate-300 italic mb-3">
                  "IEEE support was a game-changer for my IoT-based smart agriculture project. The funding helped me purchase sensors and microcontrollers I couldn't afford, and the mentorship guided me through complex challenges. My project is now being implemented in local farms!"
                </p>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>

              <div className="bg-slate-800/40 border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">👤</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">Rahul Desai</h3>
                    <p className="text-sm text-slate-400">2nd Year, Computer Science</p>
                  </div>
                </div>
                <p className="text-slate-300 italic mb-3">
                  "Coming from a rural background, I never thought I could build an AI-powered healthcare diagnostics tool. IEEE provided everything—funds, lab access, and expert guidance. Today, my project won the regional innovation award!"
                </p>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>

              <div className="bg-slate-800/40 border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">👤</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">Ananya Patel</h3>
                    <p className="text-sm text-slate-400">3rd Year, Mechanical Engineering</p>
                  </div>
                </div>
                <p className="text-slate-300 italic mb-3">
                  "The 3D printing facilities and technical workshops through IEEE helped me prototype my sustainable energy device. The networking opportunities connected me with industry professionals who are now helping me patent my innovation!"
                </p>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>

              <div className="bg-slate-800/40 border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">👤</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">Arjun Kumar</h3>
                    <p className="text-sm text-slate-400">2nd Year, Civil Engineering</p>
                  </div>
                </div>
                <p className="text-slate-300 italic mb-3">
                  "Without IEEE support, my low-cost water purification system would have remained just an idea. The mentorship taught me how to think like an engineer, and the resources turned my concept into a working prototype that's now being tested in communities!"
                </p>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center fade-in">
            <h2 className="text-3xl font-bold mb-6 text-slate-100 tracking-wide winter-glow">Ready to Innovate?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join us in creating solutions that make a difference. Register now to participate in the student innovation challenge.
            </p>
            <Link to="/register">
              <button className="group relative px-8 py-4 border-2 border-slate-400 text-slate-200 font-semibold text-lg tracking-wider overflow-hidden transition-all duration-300 hover:border-slate-100 hover:text-white">
                <span className="relative z-10">REGISTER NOW</span>
                <div className="absolute inset-0 bg-slate-700/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </Link>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-12 fade-in">
            <p className="text-slate-500 text-sm italic winter-glow">
              "Innovation distinguishes between a follower and a leader"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


