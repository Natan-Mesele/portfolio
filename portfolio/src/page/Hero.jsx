// Hero.js
import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-screen max-w-6xl mx-auto pt-16 md:pt-0">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full h-full items-center">
        {/* Left Section: About Text */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16 text-left">
          {/* Logo */}
          <div className="mb-8 flex gap-2 max-w-3xl">
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-light text-white tracking-wide leading-tight mb-4 font-inter">
                <span className="mr-2 mb-6">✌️</span>Hi, I'm <span className="">Natan Mesele</span>.
              </h1>
              <p className="text-2xl lg:text-4xl font-light text-white tracking-wide leading-tight mb-6 font-inter">
                I'm a Junior Software Developer passionate about building scalable and innovative applications.
              </p>
              <span className="text-base text-white opacity-70 hover:opacity-90 transition-opacity duration-300 font-inter">
                Currently working on full-stack development with modern technologies.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 flex justify-center items-center">
          <div className="grid-container hero-grid">
            <div className="hero-grid-inner">
              {/* Tick line as background in the grid */}
              <div className="tick-line"></div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Font import */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

          .hero-grid {
            perspective: 600px;
            width: 100%;
            max-width: 300px;
            height: 300px;
            margin: 0 auto;
            z-index: 10; /* Add this line */
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

          /* Tick line style */
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
            0% {
              height: 0;
              bottom: 0;
            }
            50% {
              height: 100%;
              bottom: 0;
            }
            100% {
              height: 0;
              bottom: 0;
            }
          }

          @keyframes rotateGrid {
            from {
              transform: rotateX(0deg) rotateY(0deg);
            }
            to {
              transform: rotateX(360deg) rotateY(360deg);
            }
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

          /* Apply advanced font family */
          * {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
