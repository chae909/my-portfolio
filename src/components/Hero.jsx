import React from 'react';

const Hero = () => {
    return (
    <section id="hero" className="hero-section min-h-screen flex items-center relative overflow-hidden py-16 md:py-0 brand-bg">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Elegant rotated rectangles & slim bars (no circles) */}
                <div className="absolute -top-10 -left-20 w-96 h-12 bg-gradient-to-r from-indigo-600/20 to-emerald-400/12 rounded-lg transform rotate-12 blur-2xl opacity-20 animate-drift-rect" style={{animationDelay: '0s'}}></div>
                <div className="absolute top-24 right-8 w-80 h-14 bg-gradient-to-r from-slate-300/18 to-indigo-400/14 rounded-xl transform -rotate-6 blur-2xl opacity-18 animate-drift-rect" style={{animationDelay: '1.4s'}}></div>
                <div className="absolute bottom-28 left-12 w-72 h-10 bg-gradient-to-r from-emerald-300/14 to-slate-200/10 rounded-lg transform rotate-3 blur-2xl opacity-16 animate-drift-rect" style={{animationDelay: '2.2s'}}></div>

                {/* Slim vertical bars */}
                <div className="absolute top-16 left-1/3 w-2 h-56 bg-gradient-to-b from-indigo-400/12 to-emerald-300/8 rounded-md opacity-14 transform rotate-8 blur-sm animate-drift-vertical" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-8 right-1/4 w-1.5 h-44 bg-gradient-to-b from-slate-300/10 to-indigo-300/8 rounded-sm opacity-12 transform -rotate-6 blur-sm animate-drift-vertical" style={{animationDelay: '2.8s'}}></div>

                {/* Thin slanted slabs */}
                <div className="absolute top-36 left-1/4 w-96 h-6 bg-gradient-to-r from-indigo-500/14 to-emerald-300/10 rounded-full transform -rotate-12 blur-lg opacity-14 animate-drift-rect" style={{animationDelay: '3.6s'}}></div>
                <div className="absolute top-8 right-1/3 w-64 h-6 bg-gradient-to-r from-slate-300/10 to-indigo-400/10 rounded-full transform rotate-18 blur-lg opacity-10 animate-drift-rect" style={{animationDelay: '4.2s'}}></div>

                {/* Subtle grid lines for texture */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent,transparent),linear-gradient(transparent,transparent)] pointer-events-none" style={{backgroundSize: '48px 48px'}}></div>
            </div>
            
            {/* Content - wrapped in a glassmorphism card for better readability */}
            <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center w-full relative z-10">
                <div className="w-full max-w-4xl glass-card rounded-2xl p-6 md:p-12 shadow-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold brand-text leading-tight tracking-tight mb-4 break-keep animate-fade-in" style={{textShadow: '0 6px 20px rgba(2,6,23,0.35)'}}>
                        문제 해결과 도전을 즐기는<br className="hidden xs:inline"/> 개발자 채정윤입니다
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg brand-text mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed tracking-normal animate-fade-in" style={{animationDelay: '0.25s'}}>
                        개인보다 팀을 생각합니다.<br />
                        추진력있게 목표를 향해 나아갑니다.<br />
                        성실함과 실천하는 자세를 중시합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
                        <a href="#projects" className="inline-block px-6 py-3 rounded-xl font-semibold transition-all duration-300 brand-btn brand-accent-hover text-base sm:text-lg">프로젝트 보기</a>
                        <a href="https://github.com/chae909" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl font-semibold transition-all duration-300 brand-btn-outline text-base sm:text-lg">GitHub 방문</a>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    33% { transform: translateY(-12px) translateX(6px) rotate(3deg); }
                    66% { transform: translateY(6px) translateX(-3px) rotate(-2deg); }
                }
                
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
                    50% { transform: translateY(-18px) translateX(9px) scale(1.05); }
                }
                
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-10px) rotate(60deg); }
                    50% { transform: translateY(-18px) rotate(120deg); }
                    75% { transform: translateY(-10px) rotate(180deg); }
                }
                
                @keyframes drift-horizontal {
                    0% { transform: translateX(-120px) translateY(0px) rotate(0deg); opacity: 0; }
                    50% { transform: translateX(0px) translateY(-6px) rotate(3deg); opacity: 0.24; }
                    100% { transform: translateX(120px) translateY(0px) rotate(-3deg); opacity: 0; }
                }
                
                @keyframes drift-vertical {
                    0% { transform: translateY(-60px) translateX(0px) rotate(-2deg); opacity: 0; }
                    50% { transform: translateY(0px) translateX(6px) rotate(1deg); opacity: 0.22; }
                    100% { transform: translateY(60px) translateX(0px) rotate(2deg); opacity: 0; }
                }

                @keyframes drift-rect {
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    25% { transform: translateY(-8px) translateX(6px) rotate(2deg); }
                    50% { transform: translateY(4px) translateX(-6px) rotate(-1deg); }
                    75% { transform: translateY(-4px) translateX(4px) rotate(1deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                }
                
                @keyframes morph-rotate {
                    0% { transform: rotate(0deg) scale(1); border-radius: 0%; }
                    25% { transform: rotate(90deg) scale(1.2); border-radius: 25%; }
                    50% { transform: rotate(180deg) scale(0.8); border-radius: 50%; }
                    75% { transform: rotate(270deg) scale(1.1); border-radius: 25%; }
                    100% { transform: rotate(360deg) scale(1); border-radius: 0%; }
                }
                
                @keyframes pulse-rotate {
                    0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.25; }
                    50% { transform: rotate(180deg) scale(1.5); opacity: 0.1; }
                }
                
                @keyframes scale-rotate {
                    0%, 100% { transform: rotate(0deg) scale(0.5); }
                    33% { transform: rotate(120deg) scale(1.2); }
                    66% { transform: rotate(240deg) scale(0.8); }
                }
                
                @keyframes wave-horizontal {
                    0% { transform: translateX(-100%) scaleX(0); }
                    50% { transform: translateX(0%) scaleX(1); }
                    100% { transform: translateX(100%) scaleX(0); }
                }
                
                @keyframes slide-right {
                    0% { transform: translateX(-100%); opacity: 0; }
                    20% { opacity: 0.2; }
                    80% { opacity: 0.2; }
                    100% { transform: translateX(100%); opacity: 0; }
                }
                
                @keyframes float-triangle {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-25px) rotate(120deg); }
                    66% { transform: translateY(15px) rotate(240deg); }
                }
                
                @keyframes spin-triangle {
                    0% { transform: rotate(0deg) translateY(0px); }
                    100% { transform: rotate(360deg) translateY(-20px); }
                }
                
                @keyframes blob-slow {
                    0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
                    33% { transform: translateX(-30px) translateY(-20px) scale(1.1); }
                    66% { transform: translateX(20px) translateY(30px) scale(0.9); }
                }
                
                @keyframes blob-medium {
                    0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
                    50% { transform: translateX(40px) translateY(-30px) rotate(180deg); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(.22,.9,.26,1) forwards;
                    opacity: 0;
                }

                /* Respect user's reduced motion preference */
                @media (prefers-reduced-motion: reduce) {
                    .animate-fade-in,
                    .animate-float-slow,
                    .animate-float-medium,
                    .animate-float-fast,
                    .animate-drift-horizontal,
                    .animate-drift-vertical,
                    .animate-morph-rotate,
                    .animate-pulse-rotate,
                    .animate-scale-rotate,
                    .animate-wave-horizontal,
                    .animate-slide-right,
                    .animate-float-triangle,
                    .animate-spin-triangle,
                    .animate-blob-slow,
                    .animate-blob-medium {
                        animation: none !important;
                        transition: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
                
                .animate-float-slow { animation: float-slow 14s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
                .animate-drift-horizontal { animation: drift-horizontal 24s linear infinite; }
                .animate-drift-vertical { animation: drift-vertical 20s linear infinite; }
                .animate-morph-rotate { animation: morph-rotate 30s ease-in-out infinite; }
                .animate-pulse-rotate { animation: pulse-rotate 14s ease-in-out infinite; }
                .animate-scale-rotate { animation: scale-rotate 20s ease-in-out infinite; }
                .animate-wave-horizontal { animation: wave-horizontal 12s ease-in-out infinite; }
                .animate-slide-right { animation: slide-right 14s linear infinite; }
                .animate-float-triangle { animation: float-triangle 18s ease-in-out infinite; }
                .animate-spin-triangle { animation: spin-triangle 20s linear infinite; }
                .animate-blob-slow { animation: blob-slow 40s ease-in-out infinite; }
                .animate-blob-medium { animation: blob-medium 32s ease-in-out infinite; }
                .animate-drift-rect { animation: drift-rect 16s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default Hero;