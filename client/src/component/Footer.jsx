import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://twitter.com',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Problem Statements', path: '/problems' },
    { name: 'Student Innovation', path: '/student-innovation' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white border-t border-ice-400/20">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .got-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.1em;
        }

        .winter-glow {
          text-shadow: 0 0 20px rgba(148, 186, 255, 0.4);
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

        .snowflake {
          position: absolute;
          top: -10px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 6px;
          animation: snowFall 8s linear infinite;
          pointer-events: none;
          z-index: -1;
        }

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

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-500 hover:scale-110 hover:rotate-12"
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
              <div className="flex flex-col">
                <span className="got-font text-lg text-slate-100 winter-glow tracking-wider">
                  WINTER OF PROJECTS
                </span>
                <span className="text-xs text-ice-300 font-medium tracking-wider mt-1">
                  BY IEEE
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A convergence of innovation and ambition. Join us in forging the future, one project at a time.
            </p>
            {/* IEEE Logo/Branding */}
            <div className="flex items-center space-x-2 pt-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">IEEE</span>
              </div>
              <span className="text-slate-300 text-sm font-medium">IEEE Student Branch</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-200 font-semibold tracking-wider mb-4 text-sm">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-slate-200 transition-all duration-300 text-sm group flex items-center"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 text-xs">
                      ❄
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-200 font-semibold tracking-wider mb-4 text-sm">
              CONTACT
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start space-x-2 group">
                <svg className="w-5 h-5 mt-0.5 shrink-0 group-hover:text-ice-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-slate-200 transition-colors duration-300">winterofprojects@ieee.org</span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg className="w-5 h-5 mt-0.5 shrink-0 group-hover:text-ice-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-slate-200 transition-colors duration-300">+91 1234567890</span>
              </li>
              <li className="flex items-start space-x-2 group">
                <svg className="w-5 h-5 mt-0.5 shrink-0 group-hover:text-ice-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-slate-200 transition-colors duration-300">IEEE Student Branch, Your College</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-slate-200 font-semibold tracking-wider mb-4 text-sm">
              FOLLOW US
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-slate-300 text-xs tracking-wider mb-2">
                NEWSLETTER
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ice-400/50 focus:border-ice-400/50 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium tracking-wider rounded transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-ice-400/30">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-ice-400/20 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Winter of Projects. IEEE Student Branch. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs italic text-center md:text-right winter-glow">
            "The lone wolf dies, but the pack survives"
          </p>
        </div>
      </div>
    </footer>
  );
}