import React from 'react';

export default function About() {
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
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="got-font text-4xl md:text-5xl mb-4 fade-in text-slate-100 tracking-wide"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            ABOUT THE EVENT
          </h2>
          
          <div
            className="w-24 h-px bg-slate-500 mx-auto mb-8 fade-in"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          />

          <p
            className="text-xl text-slate-300 italic fade-in"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            Where Innovation Meets Ambition
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div
            className="fade-in text-center"
            style={{ animationDelay: '0.8s', opacity: 0 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Winter of Projects is a convergence of the brightest minds, where ideas are forged into reality. 
              Like the great houses preparing for winter, participants unite their skills and determination to 
              create something extraordinary.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 gap-8 fade-in"
            style={{ animationDelay: '1s', opacity: 0 }}
          >
            <div className="border-l-2 border-slate-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-200 tracking-wider">Technical Challenges</h3>
              <p className="text-slate-400 leading-relaxed">
                Face problems that test your skills across multiple domains, from development to innovation.
              </p>
            </div>

            <div className="border-l-2 border-slate-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-200 tracking-wider">Mentorship</h3>
              <p className="text-slate-400 leading-relaxed">
                Learn from experienced developers and industry professionals who guide your journey.
              </p>
            </div>

            <div className="border-l-2 border-slate-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-200 tracking-wider">Networking</h3>
              <p className="text-slate-400 leading-relaxed">
                Connect with like-minded individuals and build lasting bonds with your pack.
              </p>
            </div>

            <div className="border-l-2 border-slate-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-200 tracking-wider">Recognition</h3>
              <p className="text-slate-400 leading-relaxed">
                Showcase your work and earn rewards worthy of your efforts.
              </p>
            </div>
          </div>

          <div
            className="text-center pt-8 fade-in"
            style={{ animationDelay: '1.2s', opacity: 0 }}
          >
            <p className="text-slate-500 text-sm italic">
              "The lone wolf dies, but the pack survives"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}