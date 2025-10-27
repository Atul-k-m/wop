import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'TIMELINE', path: '/timeline' },
    { name: 'PROBLEM STATEMENTS', path: '/problems' },
    { name: 'STUDENT INNOVATION', path: '/student-innovation' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'REGISTER NOW', path: '/register' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-ice-400/20">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .got-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.1em;
        }

        .winter-glow {
          text-shadow: 0 0 20px rgba(148, 186, 255, 0.4);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes snowFall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes underlineSlide {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        .underline-animate {
          animation: underlineSlide 0.3s ease-out forwards;
        }

        .snowflake {
          position: absolute;
          top: -10px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 6px;
          animation: snowFall 8s linear infinite;
          pointer-events: none;
          z-index: -1;
        }

        /* Show snow only on mobile */
        @media (min-width: 1024px) {
          .snowflake {
            display: none;
          }
        }
      `}</style>

      {/* Subtle Snowfall - Mobile Only */}
      <div className="lg:hidden absolute top-0 left-0 w-full h-4 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
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
            <span className="got-font text-xl text-slate-100 winter-glow tracking-wider transition-all duration-300 group-hover:scale-105">
              WINTER OF PROJECTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wider font-medium transition-all duration-300 relative py-2 group ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {/* White underline for desktop */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                    isActive(link.path) ? 'w-full underline-animate' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-200 hover:text-ice-200 focus:outline-none transition-all duration-300 p-1 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-ice-400/20 pt-3 slide-down">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm tracking-wider font-medium transition-all duration-300 py-3 px-4 rounded-lg flex items-center group ${
                    isActive(link.path)
                      ? 'text-ice-200 bg-slate-800/50 winter-glow border border-ice-400/20'
                      : 'text-slate-300 hover:text-ice-100 hover:bg-slate-800/30'
                  }`}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                    ❄
                  </span>
                  {link.name}
                  <span
                    className={`ml-auto h-0.5 bg-gradient-to-r from-ice-300 to-ice-100 transition-all duration-300 ${
                      isActive(link.path) ? 'w-8' : 'w-0 group-hover:w-8'
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}