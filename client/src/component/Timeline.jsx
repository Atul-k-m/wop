import React from 'react';

export default function Timeline() {
  const timelineEvents = [
    {
      phase: "PHASE I",
      title: "The召召",
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
    <div className="relative bg-black text-white py-20 px-4">
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
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .glow-pulse {
          animation: glow 3s ease-in-out infinite;
        }

        .timeline-line {
          background: linear-gradient(to bottom, 
            rgba(148, 163, 184, 0.2) 0%, 
            rgba(148, 163, 184, 0.6) 50%, 
            rgba(148, 163, 184, 0.2) 100%);
        }
      `}</style>

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
            >
              <circle cx="50" cy="50" r="35" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="2" fill="rgba(148, 163, 184, 0.1)" />
              <path d="M50 20 L50 80 M30 50 L70 50" stroke="rgba(148, 163, 184, 0.8)" strokeWidth="2" />
            </svg>
          </div>

          <h2
            className="got-font text-4xl md:text-5xl mb-4 fade-in text-slate-100 tracking-wide"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            THE JOURNEY
          </h2>
          
          <div
            className="w-24 h-px bg-slate-500 mx-auto mb-6 fade-in"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          />

          <p
            className="text-xl text-slate-300 italic fade-in"
            style={{ animationDelay: '0.8s', opacity: 0 }}
          >
            A Chronicle of Events
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-line"></div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-8 top-0 w-0.5 h-full timeline-line"></div>

          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="fade-in relative"
                style={{ animationDelay: `${1 + index * 0.2}s`, opacity: 0 }}
              >
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                  {/* Left side (odd items) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-right pr-12">
                        <div className="inline-block border-2 border-slate-600 bg-black px-6 py-4 hover:border-slate-400 transition-colors duration-300">
                          <p className="text-sm text-slate-500 tracking-widest mb-2">{event.phase}</p>
                          <h3 className="text-2xl font-semibold text-slate-100 mb-2 tracking-wide">{event.title}</h3>
                          <p className="text-slate-400 mb-3">{event.date}</p>
                          <p className="text-slate-300 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                      <div className="relative flex justify-start pl-12">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-400 border-4 border-black rounded-full glow-pulse"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative flex justify-end pr-12">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-slate-400 border-4 border-black rounded-full glow-pulse"></div>
                      </div>
                      <div className="text-left pl-12">
                        <div className="inline-block border-2 border-slate-600 bg-black px-6 py-4 hover:border-slate-400 transition-colors duration-300">
                          <p className="text-sm text-slate-500 tracking-widest mb-2">{event.phase}</p>
                          <h3 className="text-2xl font-semibold text-slate-100 mb-2 tracking-wide">{event.title}</h3>
                          <p className="text-slate-400 mb-3">{event.date}</p>
                          <p className="text-slate-300 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-slate-400 border-4 border-black rounded-full glow-pulse"></div>
                  </div>
                  <div className="flex-grow pl-8">
                    <div className="border-2 border-slate-600 bg-black px-4 py-4 hover:border-slate-400 transition-colors duration-300">
                      <p className="text-xs text-slate-500 tracking-widest mb-2">{event.phase}</p>
                      <h3 className="text-xl font-semibold text-slate-100 mb-2 tracking-wide">{event.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{event.date}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{event.description}</p>
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
          <p className="text-slate-500 text-sm italic">
            "All men must serve. Will you answer the call?"
          </p>
        </div>
      </div>
    </div>
  );
}