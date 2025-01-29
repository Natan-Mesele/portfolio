import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './page/Hero';
import ProjectList from './page/ProjectList';
import NavBar from './page/NavBar';
import Footer from './page/Footer';
import Expertise from './page/Expertise';
import ContactUs from './page/ContactUs';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsStopped(false);
      
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsStopped(true), 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], .interactive'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <div className="cursor-none">
      {/* Custom Cursor */}
      <div
        className={`fixed w-12 h-12 border-2 border-white rounded-full pointer-events-none z-[9999]
        transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out
        ${isHovering ? 'scale-150 bg-blue-500/30 border-blue-400' : 'scale-100'}
        ${isClicking ? 'scale-75 bg-red-500/30 border-red-400' : ''}
        mix-blend-difference`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        {/* White dot in center when mouse stops */}
        {isStopped && (
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200" />
        )}
      </div>

      {/* Page Content */}
      <NavBar />
      <Hero />
      <ProjectList />
      <Expertise />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
