import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-0">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating and moving circles */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-float-medium" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-25 animate-float-fast" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-float-slow" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-32 left-1/2 w-28 h-28 bg-cyan-200 rounded-full opacity-15 animate-drift-horizontal" style={{animationDelay: '3s'}}></div>
                <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-yellow-200 rounded-full opacity-30 animate-drift-vertical" style={{animationDelay: '1.5s'}}></div>
                
                {/* Rotating and morphing squares */}
                <div className="absolute top-60 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 animate-morph-rotate transform rotate-12" style={{animationDelay: '0s'}}></div>
                <div className="absolute bottom-60 right-1/4 w-8 h-8 bg-gradient-to-r from-pink-300 to-blue-300 opacity-25 animate-pulse-rotate" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-80 right-1/2 w-10 h-10 bg-gradient-to-r from-green-300 to-cyan-300 opacity-20 animate-scale-rotate" style={{animationDelay: '2.5s'}}></div>
                
                {/* Moving and pulsing lines */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-20 animate-wave-horizontal"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-15 animate-wave-horizontal" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-10 animate-slide-right" style={{animationDelay: '4s'}}></div>
                
                {/* Floating triangles */}
                <div className="absolute top-24 right-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-blue-300 opacity-25 animate-float-triangle" style={{animationDelay: '1.8s'}}></div>
                <div className="absolute bottom-24 left-1/3 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-purple-300 opacity-20 animate-spin-triangle" style={{animationDelay: '3.2s'}}></div>
                
                {/* Gradient blobs */}
                <div className="absolute top-16 left-3/4 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-xl animate-blob-slow"></div>
                <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200/25 to-cyan-200/15 rounded-full blur-xl animate-blob-medium" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 text-center flex flex-col justify-center w-full relative z-10">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-4 break-keep animate-fade-in">
                    문제 해결과 도전을 즐기는<br className="hidden xs:inline"/> 개발자 채정윤입니다
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-1xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
                    개인보다 팀을 생각합니다.<br />
                    추진력있게 목표를 향해 나아갑니다.<br />
                    성실함과 실천하는 자세를 중시합니다.
                </p>
                <div className="space-x-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                    <a href="#projects" className="inline-block px-8 py-4 rounded-xl font-bold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-lg text-lg">프로젝트 보기</a>
                    <a href="https://github.com/chae909" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-xl font-bold transition-all duration-300 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105 hover:shadow-lg text-lg">GitHub 방문</a>
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
                    33% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
                    66% { transform: translateY(10px) translateX(-5px) rotate(-3deg); }
                }
                
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
                    50% { transform: translateY(-30px) translateX(15px) scale(1.1); }
                }
                
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-15px) rotate(90deg); }
                    50% { transform: translateY(-30px) rotate(180deg); }
                    75% { transform: translateY(-15px) rotate(270deg); }
                }
                
                @keyframes drift-horizontal {
                    0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
                    50% { transform: translateX(0px) translateY(-10px); opacity: 0.3; }
                    100% { transform: translateX(100px) translateY(0px); opacity: 0; }
                }
                
                @keyframes drift-vertical {
                    0% { transform: translateY(-50px) translateX(0px); opacity: 0; }
                    50% { transform: translateY(0px) translateX(10px); opacity: 0.4; }
                    100% { transform: translateY(50px) translateX(0px); opacity: 0; }
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
                    animation: fade-in 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
                .animate-drift-horizontal { animation: drift-horizontal 12s linear infinite; }
                .animate-drift-vertical { animation: drift-vertical 10s linear infinite; }
                .animate-morph-rotate { animation: morph-rotate 15s ease-in-out infinite; }
                .animate-pulse-rotate { animation: pulse-rotate 8s ease-in-out infinite; }
                .animate-scale-rotate { animation: scale-rotate 10s ease-in-out infinite; }
                .animate-wave-horizontal { animation: wave-horizontal 6s ease-in-out infinite; }
                .animate-slide-right { animation: slide-right 8s linear infinite; }
                .animate-float-triangle { animation: float-triangle 7s ease-in-out infinite; }
                .animate-spin-triangle { animation: spin-triangle 9s linear infinite; }
                .animate-blob-slow { animation: blob-slow 20s ease-in-out infinite; }
                .animate-blob-medium { animation: blob-medium 16s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default Hero;