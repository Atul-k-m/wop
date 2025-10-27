import React from 'react';
import bg from './bg.png';
import titleImg from './title.png';
import { Link } from 'react-router-dom';

export default function WinterOfProjects() {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden bg-fixed bg-center bg-cover pt-16"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
      }}
    >
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

        @keyframes snowfall {
          0% { 
            transform: translateY(-10vh) translateX(0) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) translateX(20px) rotate(360deg); 
            opacity: 0.7; 
          }
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: white;
          font-size: 1.5em;
          animation: snowfall linear infinite;
          pointer-events: none;
          z-index: 100;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          user-select: none;
        }
      `}</style>

      {/* Snowfall Effect - Improved visibility */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 12 + 10}px`,
            opacity: Math.random() * 0.3 + 0.7,
          }}
        >
          ❄
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80 z-0"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center">
        {/* Direwolf Icon */}
        <div
          className="fade-in mb-6"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 L35 30 L20 35 L15 50 L20 65 L30 75 L35 85 L40 90 L50 95 L60 90 L65 85 L70 75 L80 65 L85 50 L80 35 L65 30 L50 10 Z M50 25 L45 35 L40 40 L35 45 L40 50 L45 45 L50 40 L55 45 L60 50 L65 45 L60 40 L55 35 L50 25 Z"
              fill="rgba(148, 163, 184, 0.3)"
              stroke="rgba(148, 163, 184, 0.8)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Title Image - Made bigger */}
        <div
          className="fade-in mb-6 flex justify-center"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <img
            src={titleImg}
            alt="Winter of Projects"
            className="max-w-[350px] sm:max-w-[450px] md:max-w-[550px] w-full object-contain"
            style={{
              maxHeight: '140px',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="text-2xl sm:text-3xl md:text-3xl text-slate-300 mb-3 fade-in italic px-4"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          Winter is Coming
        </p>

        <div
          className="w-24 h-px bg-slate-500 mb-8 fade-in"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        />

        {/* Event Info */}
        <div
          className="text-center mb-8 space-y-2 fade-in text-slate-200 px-4"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          <p className="text-lg sm:text-xl md:text-xl">The Great Convergence</p>
          <p className="text-base sm:text-lg md:text-lg text-slate-400">
            Date & Venue TBA
          </p>
        </div>

        {/* Buttons - Stacked vertically on mobile */}
        <div
          className="flex flex-col gap-4 fade-in w-full max-w-sm mx-auto mb-10"
          style={{ animationDelay: '1.2s', opacity: 0 }}
        >
          <Link to="/register" className="w-full">
            <button className="group relative w-full px-8 py-4 border-2 border-slate-400 text-slate-200 font-semibold text-lg tracking-wider overflow-hidden transition-all duration-300 hover:border-slate-100 hover:text-white">
              <span className="relative z-10">REGISTER NOW</span>
              <div className="absolute inset-0 bg-slate-700/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </Link>

          <button className="group relative w-full px-8 py-4 border-2 border-slate-400 text-slate-200 font-semibold text-lg tracking-wider overflow-hidden transition-all duration-300 hover:border-slate-100 hover:text-white">
            <span className="relative z-10">BROCHURE</span>
            <div className="absolute inset-0 bg-slate-700/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Quote - With proper spacing */}
        <div
          className="text-center fade-in mt-auto mb-8 px-4"
          style={{ animationDelay: '1.4s', opacity: 0 }}
        >
          <p className="text-slate-500 text-sm md:text-sm italic">
            "The lone wolf dies, but the pack survives"
          </p>
        </div>
      </div>
    </div>
  );
}