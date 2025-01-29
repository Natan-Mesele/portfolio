import React from 'react';

function NavBar() {
    return (
        <div className="flex justify-between items-center p-6 text-white md:px-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <a href="#"><img src="img/loo.png" alt="Logo" className="h-12 w-auto" /></a>
            </div>
            {/* Navigation Links */}
            <div className="flex gap-6">
                <a
                    href="#projects"
                    className="text-lg font-light hover:text-gray-400 transition-colors duration-300"
                >
                    Projects
                </a>
                <a
                    href="#expertise"
                    className="text-lg font-light hover:text-gray-400 transition-colors duration-300"
                >
                    Expertise
                </a>
            </div>
        </div>
    );
}

export default NavBar;
