import React, { useState, useEffect, useMemo } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [isLoading, setIsLoading] = useState(true);

  const imageData = useMemo(() => [
    { src: '/wop1 images/group.jpeg', category: 'Team', caption: 'Team Group Photo' },
    { src: '/wop1 images/IMG-20251019-WA0000.jpg', category: 'Workshop', caption: 'Workshop Session' },
    { src: '/wop1 images/IMG-20251019-WA0002.jpg', category: 'Workshop', caption: 'Coding Workshop' },
    { src: '/wop1 images/IMG-20251019-WA0003.jpg', category: 'Presentation', caption: 'Project Presentation' },
    { src: '/wop1 images/IMG-20251019-WA0004.jpg', category: 'Team', caption: 'Collaboration Time' },
    { src: '/wop1 images/IMG-20251019-WA0012.jpg', category: 'Workshop', caption: 'Technical Session' },
    { src: '/wop1 images/IMG-20251019-WA0025.jpg', category: 'Presentation', caption: 'Demo Day' },
    { src: '/wop1 images/IMG-20251019-WA0026.jpg', category: 'Team', caption: 'Team Gathering' },
    { src: '/wop1 images/IMG-20251019-WA0027.jpg', category: 'Workshop', caption: 'Learning Session' },
    { src: '/wop1 images/IMG-20251019-WA0028.jpg', category: 'Highlights', caption: 'Event Highlights' },
    { src: '/wop1 images/IMG-20251019-WA0029.jpg', category: 'Highlights', caption: 'Memorable Moments' },
    { src: '/wop1 images/IMG-20251019-WA0030.jpg', category: 'Team', caption: 'Team Celebration' },
    { src: '/wop1 images/IMG-20251019-WA0035.jpg', category: 'Presentation', caption: 'Final Presentation' },
    { src: '/wop1 images/IMG-20251019-WA0036.jpg', category: 'Highlights', caption: 'Winter Celebration' },
    { src: '/wop1 images/IMG-20251019-WA0037.jpg', category: 'Workshop', caption: 'Hands-on Training' },
    { src: '/wop1 images/IMG-20251019-WA0038.jpg', category: 'Team', caption: 'Networking Session' },
    { src: '/wop1 images/IMG-20251019-WA0048.jpg', category: 'Highlights', caption: 'Award Ceremony' },
    { src: '/wop1 images/IMG-20251019-WA0049.jpg', category: 'Team', caption: 'Closing Ceremony' },
  ], []);

  const images = imageData.map(img => img.src);
  const categories = ['All', ...new Set(imageData.map(img => img.category))];

  const filteredImages = activeFilter === 'All' 
    ? imageData 
    : imageData.filter(img => img.category === activeFilter);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        const newIndex = (currentImageIndex - 1 + imageData.length) % imageData.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(imageData[newIndex].src);
      } else if (e.key === 'ArrowRight') {
        const newIndex = (currentImageIndex + 1) % imageData.length;
        setCurrentImageIndex(newIndex);
        setSelectedImage(imageData[newIndex].src);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, imageData]);

  // Auto-rotate featured image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) translateX(20px) rotate(360deg); opacity: 0.3; }
        }

        .snowflake {
          position: fixed;
          top: -10vh;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1em;
          animation: snowfall linear infinite;
          pointer-events: none;
          z-index: 1;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .slide-left {
          animation: slideLeft 0.6s ease-out forwards;
        }

        .slide-right {
          animation: slideRight 0.6s ease-out forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(148, 163, 184, 0.3);
          filter: brightness(1.1);
        }

        @keyframes frost {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .frost-pulse {
          animation: frost 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer {
          background: linear-gradient(90deg, 
            rgba(148, 163, 184, 0.05) 0%, 
            rgba(148, 163, 184, 0.15) 50%, 
            rgba(148, 163, 184, 0.05) 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .image-grid-enter {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(148, 163, 184, 0.3); }
          50% { border-color: rgba(148, 163, 184, 0.6); }
        }

        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }

        .winter-overlay {
          background: 
            radial-gradient(circle at 20% 50%, rgba(147, 197, 253, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(191, 219, 254, 0.1) 0%, transparent 50%);
        }

        .frost-effect {
          backdrop-filter: blur(8px);
          background: linear-gradient(135deg, 
            rgba(148, 163, 184, 0.1) 0%, 
            rgba(203, 213, 225, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ice-shine {
          position: relative;
          overflow: hidden;
        }

        .ice-shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          transform: rotate(45deg);
          animation: ice-shimmer 3s infinite;
        }

        @keyframes ice-shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .winter-glow {
          text-shadow: 
            0 0 20px rgba(191, 219, 254, 0.5),
            0 0 40px rgba(147, 197, 253, 0.3),
            0 0 60px rgba(96, 165, 250, 0.2);
        }

        .icicle {
          position: absolute;
          width: 2px;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(191, 219, 254, 0.6) 50%, 
            transparent 100%);
          animation: icicle-drip 4s ease-in-out infinite;
        }

        @keyframes icicle-drip {
          0%, 100% { height: 20px; opacity: 0.7; }
          50% { height: 30px; opacity: 1; }
        }
      `}</style>

      {/* Enhanced Snowfall Effect */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 8}s`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${Math.random() * 15 + 8}px`,
            opacity: Math.random() * 0.6 + 0.4,
          }}
        >
          ❄
        </div>
      ))}

      {/* Winter Background Overlay */}
      <div className="fixed inset-0 winter-overlay pointer-events-none z-0" />

      {/* Icicles at the top */}
      <div className="fixed top-0 left-0 right-0 h-12 pointer-events-none z-1" style={{ zIndex: 2 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="icicle"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

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
              className="frost-pulse"
            >
              <path
                d="M50 10 L35 30 L20 35 L15 50 L20 65 L30 75 L35 85 L40 90 L50 95 L60 90 L65 85 L70 75 L80 65 L85 50 L80 35 L65 30 L50 10 Z"
                stroke="rgba(148, 163, 184, 0.8)"
                strokeWidth="2"
                fill="rgba(148, 163, 184, 0.1)"
              />
              <circle cx="50" cy="50" r="15" fill="rgba(148, 163, 184, 0.3)" />
            </svg>
          </div>

          <h1 className="got-font text-5xl md:text-7xl mb-6 text-slate-100 tracking-wide winter-glow">
            WINTER OF PROJECTS
          </h1>
          
          <div className="w-32 h-px bg-slate-400 mx-auto mb-8 glow-pulse" style={{ boxShadow: '0 0 10px rgba(191, 219, 254, 0.5)' }} />

          <p className="text-2xl md:text-3xl text-slate-300 italic mb-4 got-font">
            2024 Chronicles
          </p>
        </div>

        {/* Featured Rotating Carousel */}
        <div className="mb-16 fade-in">
          <div className="relative max-w-6xl mx-auto ice-shine">
            <div className="relative aspect-video md:aspect-21/9 overflow-hidden border-4 border-slate-700 bg-slate-900 shadow-2xl frost-effect" style={{ boxShadow: '0 0 30px rgba(147, 197, 253, 0.2), 0 25px 50px rgba(0, 0, 0, 0.5)' }}>
              <img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Winter of Projects ${currentImageIndex + 1}`}
                className="w-full h-full object-cover slide-right"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              {/* Frost overlay on image */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-100/5 via-transparent to-blue-200/5 pointer-events-none" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-600 hover:border-blue-400 p-3 md:p-4 transition-all duration-300 backdrop-blur-sm frost-effect"
              style={{ boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)' }}
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-600 hover:border-blue-400 p-3 md:p-4 transition-all duration-300 backdrop-blur-sm frost-effect"
              style={{ boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)' }}
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.slice(0, 10).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === idx ? 'bg-slate-200 w-8' : 'bg-slate-500 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-blue-400/30 px-4 py-2 frost-effect" style={{ boxShadow: '0 0 15px rgba(147, 197, 253, 0.2)' }}>
              <span className="text-slate-200 text-sm tracking-wider">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-12">
          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 fade-in">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 border-2 transition-all duration-300 font-semibold tracking-wider frost-effect ${
                    activeFilter === category
                      ? 'bg-blue-900/50 border-blue-400 text-white shadow-lg'
                      : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-blue-400/50 hover:text-slate-200'
                  }`}
                  style={activeFilter === category ? { boxShadow: '0 0 20px rgba(96, 165, 250, 0.4)' } : {}}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 border-2 border-slate-700 p-1 bg-slate-900/50 frost-effect">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-blue-900/50 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Grid View"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 transition-all duration-300 ${
                  viewMode === 'masonry' ? 'bg-blue-900/50 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Masonry View"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v5H3V3zm10 0h8v8h-8V3zM3 10h8v11H3V10zm10 5h8v6h-8v-6z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-slate-700 border-t-slate-400 rounded-full animate-spin"></div>
                <p className="text-slate-400 text-lg">Loading gallery...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Image Count */}
              <div className="text-center mb-6">
                <p className="text-slate-400">
                  Showing <span className="text-slate-200 font-semibold">{filteredImages.length}</span> {filteredImages.length === 1 ? 'image' : 'images'}
                </p>
              </div>

              {/* Gallery Grid */}
              <div className={`grid gap-3 md:gap-4 ${
                viewMode === 'grid' 
                  ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              }`}>
                {filteredImages.map((imageObj, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden bg-slate-900 border-2 border-slate-800 hover:border-blue-400 cursor-pointer hover-lift fade-in group ice-shine ${
                      viewMode === 'masonry' && index % 3 === 0 ? 'row-span-2' : 'aspect-square'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.03}s`, 
                      opacity: 0,
                      boxShadow: '0 0 0 rgba(147, 197, 253, 0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(147, 197, 253, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 rgba(147, 197, 253, 0)';
                    }}
                    onClick={() => {
                      setSelectedImage(imageObj.src);
                      setCurrentImageIndex(imageData.findIndex(img => img.src === imageObj.src));
                    }}
                  >
                    <img
                      src={imageObj.src}
                      alt={imageObj.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {/* Winter frost overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-100/10 via-transparent to-blue-200/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    
                    {/* Caption on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold truncate">{imageObj.caption}</p>
                      <p className="text-slate-300 text-xs">{imageObj.category}</p>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2 py-1 border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 frost-effect">
                      <span className="text-slate-200 text-xs tracking-wide">{imageObj.category}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results Message */}
              {filteredImages.length === 0 && (
                <div className="text-center py-20">
                  <svg className="w-20 h-20 mx-auto mb-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-slate-400 text-lg">No images found in this category</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Enhanced Modal for enlarged view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 scale-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Snowfall in modal */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`modal-snow-${i}`}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 8}s`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 12 + 10}px`,
              }}
            >
              ❄
            </div>
          ))}

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors bg-slate-900/80 p-3 border-2 border-slate-700 hover:border-blue-400 z-10 group frost-effect"
            style={{ boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)' }}
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Download Button */}
          <a
            href={selectedImage}
            download
            className="absolute top-4 right-20 text-slate-400 hover:text-slate-200 transition-colors bg-slate-900/80 p-3 border-2 border-slate-700 hover:border-blue-400 z-10 frost-effect"
            style={{ boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)' }}
            onClick={(e) => e.stopPropagation()}
            aria-label="Download image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = (currentImageIndex - 1 + imageData.length) % imageData.length;
              setCurrentImageIndex(newIndex);
              setSelectedImage(imageData[newIndex].src);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-all bg-slate-900/80 p-4 border-2 border-slate-700 hover:border-blue-400 hover:scale-110 z-10 frost-effect"
            style={{ boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)' }}
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = (currentImageIndex + 1) % imageData.length;
              setCurrentImageIndex(newIndex);
              setSelectedImage(imageData[newIndex].src);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-all bg-slate-900/80 p-4 border-2 border-slate-700 hover:border-blue-400 hover:scale-110 z-10 frost-effect"
            style={{ boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)' }}
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="max-w-7xl max-h-[90vh] w-full relative ice-shine">
            <img
              src={selectedImage}
              alt={imageData[currentImageIndex]?.caption || "Winter of Projects"}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              style={{ filter: 'drop-shadow(0 0 30px rgba(147, 197, 253, 0.3))' }}
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm border-t-2 border-blue-400/30 p-4 frost-effect" style={{ boxShadow: '0 -5px 30px rgba(147, 197, 253, 0.2)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {imageData[currentImageIndex]?.caption}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {imageData[currentImageIndex]?.category}
                    </span>
                    <span>•</span>
                    <span>{currentImageIndex + 1} of {imageData.length}</span>
                  </div>
                </div>
                
                {/* Keyboard Shortcuts Hint */}
                <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
                  <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded">←</kbd>
                  <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded">→</kbd>
                  <span>to navigate</span>
                  <span>•</span>
                  <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 rounded">ESC</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
