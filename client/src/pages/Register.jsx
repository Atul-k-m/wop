import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    usn: '',
    year: '',
    domain: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your oath has been sworn! Redirecting...');
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        setMessage(data.message || 'The oath was rejected');
      }
    } catch {
      setMessage('The ravens could not reach the maester');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-20">
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
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-black"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(148, 163, 184, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(148, 163, 184, 0.2) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl p-8 fade-in">
            {/* Direwolf Icon */}
            <div className="flex justify-center mb-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 L35 30 L20 35 L15 50 L20 65 L30 75 L35 85 L40 90 L50 95 L60 90 L65 85 L70 75 L80 65 L85 50 L80 35 L65 30 L50 10 Z M50 25 L45 35 L40 40 L35 45 L40 50 L45 45 L50 40 L55 45 L60 50 L65 45 L60 40 L55 35 L50 25 Z"
                  fill="rgba(148, 163, 184, 0.2)"
                  stroke="rgba(148, 163, 184, 0.6)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-slate-100 mb-2 text-center tracking-wide">
              Swear Your Oath
            </h2>
            <p className="text-slate-400 text-center mb-6 text-sm">Join the Night's Watch</p>
            
            <div className="w-16 h-px bg-slate-600 mx-auto mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 tracking-wide">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 tracking-wide">
                  USN
                </label>
                <input
                  type="text"
                  name="usn"
                  value={formData.usn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your USN"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 tracking-wide">
                  YEAR OF STUDY
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded text-slate-100 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="" className="bg-slate-800">Select Year</option>
                  <option value="1" className="bg-slate-800">1st Year</option>
                  <option value="2" className="bg-slate-800">2nd Year</option>
                  <option value="3" className="bg-slate-800">3rd Year</option>
                  <option value="4" className="bg-slate-800">4th Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 tracking-wide">
                  DOMAIN OF EXPERTISE
                </label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded text-slate-100 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="" className="bg-slate-800">Select Domain</option>
                  <option value="web-development" className="bg-slate-800">Web Development</option>
                  <option value="mobile-development" className="bg-slate-800">Mobile Development</option>
                  <option value="data-science" className="bg-slate-800">Data Science</option>
                  <option value="machine-learning" className="bg-slate-800">Machine Learning</option>
                  <option value="cybersecurity" className="bg-slate-800">Cybersecurity</option>
                  <option value="cloud-computing" className="bg-slate-800">Cloud Computing</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full px-6 py-3 border-2 border-slate-500 text-slate-200 font-semibold text-base tracking-widest overflow-hidden transition-all duration-300 hover:border-slate-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              >
                <span className="relative z-10">
                  {loading ? 'SWEARING OATH...' : 'SWEAR OATH'}
                </span>
                <div className="absolute inset-0 bg-slate-700/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded border text-center text-sm tracking-wide ${
                message.includes('sworn') 
                  ? 'bg-emerald-900/30 border-emerald-700/50 text-emerald-300' 
                  : 'bg-red-900/30 border-red-700/50 text-red-300'
              }`}>
                {message}
              </div>
            )}
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-8 fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <p className="text-slate-500 text-xs italic">
              "Night gathers, and now my watch begins"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}