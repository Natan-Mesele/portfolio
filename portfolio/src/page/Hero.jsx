import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-screen max-w-7xl mx-auto pt-16 md:pt-0">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full h-full items-center">
        {/* Left Section: About Text */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16 text-left">
          {/* Logo */}
          <div className="mb-8 flex gap-2">
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-light text-white tracking-wide leading-tight mb-4 font-inter flex items-center">
                <span className="mr-2 mb-6 mt-6 bg-gray-700 px-2 py-1 rounded-md inline-block animate-waving-hand">
                  ✌️
                </span>
                <span className="bg-gray-700 px-2 py-1 rounded-md">Hi, I'm <span>Natan Mesele</span>.</span>
              </h1>
              <p className="text-2xl lg:text-5xl font-light text-white tracking-wide leading-tight mb-6 font-inter">
                Junior Developer focused on scalable, innovative applications.
              </p>
              <span className="text-base text-white opacity-70 hover:opacity-90 transition-opacity duration-300 font-inter">
                I’m a Junior Software Developer with over a year of experience, recognized for my practical approach and ability to work efficiently in team environments to deliver projects on time.
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Animated Grid */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex justify-center items-center">
          <div className="grid-container hero-grid">
            <div className="hero-grid-inner">
              {/* Tick line as background in the grid */}
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

          .hero-grid {
            perspective: 600px;
            width: 100%;
            max-width: 300px;
            height: 300px;
            margin: 0 auto;
            z-index: 10;
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
            border: 1px solid #00f7b5; /* Neon green */
            box-sizing: border-box;
          }

          .hero-grid-inner::after {
            transform: rotateY(90deg);
            border: 1px solid #ff69b4; /* Neon pink for depth */
          }

          .tick-line {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 100%;
            background-color: #ff69b4; /* Neon pink */
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

          @media (max-width: 768px) {
            .grid-container {
              max-width: 200px;
              height: 200px;
            }
          }

          @media (max-width: 480px) {
            .grid-container {
              max-width: 150px;
              height: 150px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
