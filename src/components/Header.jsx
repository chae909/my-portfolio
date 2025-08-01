import React from 'react';

const Header = () => {
    return (
        <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
                        <span>채정윤</span>
                    </a>
                    <nav className="hidden md:flex space-x-8 text-lg font-semibold">
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
                    </nav>
                    <a href="#contact" className="hidden md:block px-6 py-3 rounded-xl font-bold transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700">연락하기</a>
                </div>
            </div>
        </header>
    );
};

export default Header;