import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-sm glass-card">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" className="flex items-center space-x-2 text-xl font-bold brand-text nav-link">
                        <span>채정윤</span>
                    </a>
                    <nav className="hidden md:flex space-x-8 text-lg font-semibold">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#skills" className="nav-link">Skills</a>
                    </nav>
                    <a href="#contact" className="hidden md:block px-6 py-3 rounded-xl font-bold transition-colors duration-300 brand-btn">연락하기</a>
                </div>
            </div>
        </header>
    );
};

export default Header;