import React from 'react';
import profileImg from '../assets/my-notion-face-portrait.png';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="glass-card p-8 md:p-12 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold brand-text mb-10 text-center animate-fade-in" style={{animationDelay: '0.05s'}}>About Me</h2>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                            <img src={profileImg} alt="채정윤 프로필 사진" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-base md:text-lg brand-text leading-relaxed mb-4 animate-fade-in" style={{animationDelay: '0.15s'}}>
                                안녕하세요! 기술을 통해 문제를 해결하는 것을 좋아하는 <strong>개발자 채정윤</strong>입니다. 약 2년간 창업 동아리, 해커톤, KOSA 부트캠프 등에서 개발 경험을 쌓았습니다.
                            </p>
                            <p className="text-base md:text-lg brand-text leading-relaxed mb-4 animate-fade-in" style={{animationDelay: '0.25s'}}>
                                빠른 기술 학습 속도와 응용력을 바탕으로 아이디어를 실제 서비스로 구현하는 것을 즐깁니다. 특히 AI 헬스케어 분야에 관심이 많으며, <strong>기획-개발-데이터 분석</strong> 전반에 걸친 경험을 통해 완성도 높은 서비스를 만드는 데 기여하고 싶습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;