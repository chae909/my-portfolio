import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#c3c6d5]">
            <div className="max-w-[1100px] mx-auto px-6 md:px-20">
                <div className="flex items-center justify-between h-16">
                    <a href="#hero" className="text-xl font-bold text-[#1b1c1d]">
                        채정윤
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#about" className="uppercase tracking-widest text-sm text-[#434653] hover:text-[#3366cc] transition-colors">About</a>
                        <a href="#projects" className="uppercase tracking-widest text-sm text-[#434653] hover:text-[#3366cc] transition-colors">Projects</a>
                        <a href="#skills" className="uppercase tracking-widest text-sm text-[#434653] hover:text-[#3366cc] transition-colors">Skills</a>
                    </nav>
                    <a href="#contact" className="hidden md:block bg-[#3366cc] text-white rounded-lg uppercase tracking-widest text-xs px-5 py-2 hover:bg-[#2255bb] transition-colors">연락하기</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
