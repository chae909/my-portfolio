import React from 'react';

const entries = [
    {
        period: '2026 — Present',
        periodColor: 'text-[#3366cc]',
        title: '동덕여자대학교 정보통계학과 / 응용화학과 재학 중',
        body: '2027.08 졸업 예정 · 실시간 데이터 기반 개인화 AI 여행 플래닝 플랫폼 개발 중',
    },
    {
        period: '2023 — 2025',
        periodColor: 'text-[#737784]',
        title: 'AI & 풀스택 개발자',
        body: 'AWS Hackathon 최우수상 수상, KOSA 부트캠프, 창업 동아리 AI 헬스케어 서비스 개발',
    },
    {
        period: '2026.01 — 2026.03',
        periodColor: 'text-[#737784]',
        title: 'WPP Media 인턴 — M2Digital',
        body: '미디어 플래닝, 광고 데이터 분석 담당 (2개월)',
    },
    {
        period: 'Certifications',
        periodColor: 'text-[#737784]',
        title: 'SQLD · ADSP · TOEIC 920',
        body: '데이터베이스 설계 및 데이터 분석 전문성 공인 자격 취득',
    },
];

const Career = () => {
    return (
        <section id="career" className="py-24 md:py-32">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-4">
                    <h2 className="font-['Noto_Serif'] text-4xl font-bold italic">Chronicle</h2>
                </div>
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
                    {entries.map((entry, i) => (
                        <React.Fragment key={entry.title}>
                            <div>
                                <p className={`text-sm font-bold mb-1 ${entry.periodColor}`}>{entry.period}</p>
                                <p className="text-base font-bold mb-1">{entry.title}</p>
                                <p className="text-sm text-[#737784]">{entry.body}</p>
                            </div>
                            {i < entries.length - 1 && (
                                <div className="h-px bg-[#c3c6d5]/30" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;
