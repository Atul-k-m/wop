import React from 'react';

export default function Timeline() {
  const timelineEvents = [
    {
      phase: "PHASE I",
      title: "The召集",
      date: "TBA",
      description: "Registration opens. Gather your bannermen and form your houses.",
    },
    {
      phase: "PHASE II",
      title: "The Forging",
      date: "TBA",
      description: "Project development begins. Forge your ideas into reality.",
    },
    {
      phase: "PHASE III",
      title: "The Trial",
      date: "TBA",
      description: "Mid-event checkpoint. Prove your worth to the council.",
    },
    {
      phase: "PHASE IV",
      title: "The Convergence",
      date: "TBA",
      description: "Final showcase. Present your creation to the realm.",
    },
    {
      phase: "PHASE V",
      title: "The Crowning",
      date: "TBA",
      description: "Winners announced. Glory awaits the victorious.",
    },
  ];

  return (
    <div className="relative bg-linear-to-b from-slate-900 to-black text-white py-20 px-4">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .got-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.1em;
        }

        .winter-glow {
          text-shadow: 0 0 20px rgba(148, 186, 255, 0.4);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(148, 186, 255, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(148, 186, 255, 0.6);
          }
        }

        @keyframes snowFall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(20px) rotate(360deg);
            opacity: 0.3;
          }
        }

        .fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .glow-pulse {
          animation: glow 3s ease-in-out infinite;
        }

        .timeline-line {
          background: linear-gradient(to bottom, 
            rgba(148, 186, 255, 0.1) 0%, 
            rgba(148, 186, 255, 0.4) 50%, 
            rgba(148, 186, 255, 0.1) 100%);
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1em;
          animation: snowFall linear infinite;
          pointer-events: none;
          z-index: 1;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* Snowfall Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 8}s`,
              animationDelay: `${Math.random() * 8}s`,
              fontSize: `${Math.random() * 12 + 8}px`,
              opacity: Math.random() * 0.6 + 0.4,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="fade-in mb-6 flex justify-center"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-500 hover:scale-110 hover:rotate-180"
            >
              <path
                d="M50 15 L60 30 L75 35 L80 50 L75 65 L65 70 L60 85 L50 90 L40 85 L35 70 L25 65 L20 50 L25 35 L40 30 L50 15 Z"
                fill="rgba(148, 186, 255, 0.1)"
                stroke="rgba(148, 186, 255, 0.6)"
                strokeWidth="2"
              />
              <path
                d="M50 30 L45 40 L35 45 L40 55 L45 50 L50 45 L55 50 L60 55 L65 45 L55 40 L50 30 Z"
                fill="rgba(200, 220, 255, 0.3)"
                stroke="rgba(200, 220, 255, 0.8)"
                strokeWidth="1"
              />
            </svg>
          </div>

          <h2
            className="got-font text-4xl md:text-5xl mb-4 fade-in text-slate-100 winter-glow tracking-wide"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            THE JOURNEY
          </h2>
          
          <div
            className="w-24 h-px bg-linear-to-r from-transparent via-ice-400 to-transparent mx-auto mb-6 fade-in"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          />

          <p
            className="text-xl text-slate-300 italic fade-in winter-glow"
            style={{ animationDelay: '0.8s', opacity: 0 }}
          >
            A Chronicle of Events
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line" style={{ transform: 'translateX(-50%)' }}></div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-8 top-0 w-px h-full timeline-line"></div>

          <div className="space-y-12 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="fade-in relative"
                style={{ animationDelay: `${1 + index * 0.2}s`, opacity: 0 }}
              >
                {/* Desktop layout */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex-1 flex justify-end pr-8">
                    {index % 2 === 0 && (
                      <div className="border border-ice-400/30 bg-slate-900/50 backdrop-blur-sm px-6 py-6 hover:border-ice-400/50 hover:shadow-[0_0_20px_rgba(148,186,255,0.1)] transition-all duration-300 max-w-md w-full group">
                        <p className="text-sm text-ice-300 tracking-widest mb-2 winter-glow">{event.phase}</p>
                        <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide winter-glow">{event.title}</h3>
                        <p className="text-ice-200 mb-3 font-medium">{event.date}</p>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">{event.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 mx-4 shrink-0">
                    <div className="w-5 h-5 bg-ice-400 border-4 border-slate-900 rounded-full glow-pulse"></div>
                  </div>

                  <div className="flex-1 flex justify-start pl-8">
                    {index % 2 === 1 && (
                      <div className="border border-ice-400/30 bg-slate-900/50 backdrop-blur-sm px-6 py-6 hover:border-ice-400/50 hover:shadow-[0_0_20px_rgba(148,186,255,0.1)] transition-all duration-300 max-w-md w-full group">
                        <p className="text-sm text-ice-300 tracking-widest mb-2 winter-glow">{event.phase}</p>
                        <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide winter-glow">{event.title}</h3>
                        <p className="text-ice-200 mb-3 font-medium">{event.date}</p>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">{event.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start">
                  <div className="relative w-16 flex justify-center shrink-0">
                    <div className="w-4 h-4 bg-ice-400 border-4 border-slate-900 rounded-full glow-pulse mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="border border-ice-400/30 bg-slate-900/50 backdrop-blur-sm px-4 py-4 hover:border-ice-400/50 transition-all duration-300 group">
                      <p className="text-xs text-ice-300 tracking-widest mb-2 winter-glow">{event.phase}</p>
                      <h3 className="text-xl font-semibold text-white mb-2 tracking-wide winter-glow">{event.title}</h3>
                      <p className="text-sm text-ice-200 mb-3 font-medium">{event.date}</p>
                      <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div
          className="text-center mt-20 fade-in"
          style={{ animationDelay: `${1 + timelineEvents.length * 0.2}s`, opacity: 0 }}
        >
          <p className="text-ice-300 text-sm italic winter-glow">
            "All men must serve. Will you answer the call?"
          </p>
        </div>
      </div>
    </div>
  );
}