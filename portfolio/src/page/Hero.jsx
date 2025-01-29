import React from 'react';

function Hero() {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] max-w-7xl mx-auto pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center">
        {/* Left Section: About Text */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 py-8 md:py-16 lg:py-24">
          <div className="mb-6 md:mb-8 lg:mb-12 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight md:leading-snug mb-4 md:mb-6">
              <span className="inline-block mr-3 animate-waving-hand">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl">
                  ✌️
                </span>
              </span>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                Natan Mesele
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-200 tracking-normal leading-relaxed mb-4 md:mb-6">
              <span>I’m a </span>
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent font-medium">
                Junior Developer
              </span>{' '}
              crafting scalable & innovative solutions
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300/90 hover:text-gray-100 transition-all duration-300">
              Junior Software Developer with{' '}
              <span className="bg-gradient-to-r from-blue-400/80 to-purple-400/80 px-2 py-1 rounded-lg">
                over a year of experience
              </span>{' '}
              <span>, recognized for my practical approach and ability to work efficiently in team environments to deliver projects on time.
                in team-driven projects</span>
            </p>
          </div>
        </div>

        {/* Right Section: Animated Grid */}
        <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 flex justify-center items-center">
          <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] aspect-square">
            <div className="hero-grid-inner">
              <div className="tick-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(15deg); }
          }
          
          .animate-waving-hand {
            display: inline-block;
            animation: wave 1.5s infinite ease-in-out;
          }

          .hero-grid-inner { 
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            animation: rotateGrid 10s infinite linear;
          }

          .hero-grid-inner::before,
          .hero-grid-inner::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid #00f7b5;
            box-sizing: border-box;
          }

          .hero-grid-inner::after {
            transform: rotateY(90deg);
            border: 1px solid #ff69b4;
          }

          .tick-line {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 100%;
            background-color: #ff69b4;
            transform-origin: bottom;
            animation: moveTick 2s infinite ease-in-out;
            transform: translateX(-50%) translateY(-50%);
          }

          @keyframes moveTick {
            0% { height: 0; bottom: 0; }
            50% { height: 100%; bottom: 0; }
            100% { height: 0; bottom: 0; }
          }

          @keyframes rotateGrid {
            from { transform: rotateX(0deg) rotateY(0deg); }
            to { transform: rotateX(360deg) rotateY(360deg); }
          }

          @media (max-width: 640px) {
            .hero-grid-inner {
              animation: rotateGrid 15s infinite linear;
            }
            
            .tick-line {
              animation-duration: 3s;
            }
          }

          @media (max-width: 768px) {
            .hero-grid-inner::before,
            .hero-grid-inner::after {
              border-width: 1px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Hero;