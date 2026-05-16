import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="flex justify-between items-start mb-14">
                    <h2 className="font-serif text-4xl font-bold text-[#1a1d2e] whitespace-nowrap">About Me</h2>
                    <div className="hidden md:block flex-grow border-b border-[#c3c6d5] mx-8 self-center" />
                    <span className="text-sm uppercase tracking-tighter text-[#3366cc] whitespace-nowrap self-center">01 / Introduction</span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">

                    {/* Left: Bio text (8 cols) */}
                    <div className="lg:col-span-8">
                        <p className="font-body text-sm text-[#434653] leading-loose">
                            개인보다 팀의 성장을 먼저 생각하며, <br /> 목표를 끝까지 실행으로 연결하는 개발자 채정윤입니다.<br /><br />
                            빠르게 배우고 직접 구현해내는 실행력을 바탕으로, 약 3년간 창업동아리·해커톤·부트캠프에서 실제 서비스 개발 경험을 쌓았습니다.<br />
                            단순히 기능 구현에 그치지 않고, 로직과 문제의 원인을 깊이 분석하며 사용자 관점에서 해결하는 과정을 중요하게 생각합니다.<br />
                            특히 AI 서비스 개발에 관심이 많아 AI 챗봇, 데이터 분석, 머신러닝 모델 학습 및 서비스 구현까지 다양한 프로젝트를 경험했습니다.
                            기획부터 개발, 데이터 기반 개선까지 전 과정을 주도적으로 수행하며 새로운 기술을 빠르게 흡수했고, 맡은 일은 끝까지 책임감 있게 완성하는 개발자로 성장하고 있습니다.
                        </p>
                    </div>

                    {/* Right: Accent cards (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="border-l-4 border-[#3366cc] pl-6 py-2">
                            <p className="text-base font-semibold text-[#1a1d2e] mb-1">Fast Execution</p>
                            <p className="text-sm text-[#434653] leading-relaxed">아이디어를 실제 서비스로 구현하는 것을 즐깁니다.</p>
                        </div>
                        <div className="border-l-4 border-[#3366cc] pl-6 py-2">
                            <p className="text-base font-semibold text-[#1a1d2e] mb-1">AI Integration</p>
                            <p className="text-sm text-[#434653] leading-relaxed">AI, 데이터 분석 전반 경험 보유.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom: Badges row */}
                <div className="border-t border-[#c3c6d5] pt-8 flex flex-wrap gap-3">
                    <span className="bg-[#efedee] text-[#434653] rounded-xl px-5 py-3 text-sm font-medium">SQLD (2024.09.20)</span>
                    <span className="bg-[#efedee] text-[#434653] rounded-xl px-5 py-3 text-sm font-medium">ADSP (2025.09.05)</span>
                    <span className="bg-[#efedee] text-[#434653] rounded-xl px-5 py-3 text-sm font-medium">TOEIC 920 (2023.08.20)</span>
                    <span className="bg-[#dce6f7] text-[#3366cc] font-semibold rounded-xl px-5 py-3 text-sm">🏆 2025 수도권ICT AWS Hackathon 최우수상</span>
                </div>

            </div>
        </section>
    );
};

export default About;
