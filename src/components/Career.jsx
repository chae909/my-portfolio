import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
  </div>
);

const CareerItem = ({ title, sub, description }) => {
  return (
    <motion.div
      className="relative pl-8 mb-8 border-l-2 border-slate-700"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-slate-900 border-2 border-cyan-400 rounded-full"></div>
      <p className="text-sm text-slate-400 mb-1">{sub}</p>
      <h3 className="font-bold text-lg text-slate-100">{title}</h3>
      {description && <p className="text-slate-400 mt-2 text-sm">{description}</p>}
    </motion.div>
  );
};

const Career = () => {
  return (
    <section>
      <SectionTitle title="Career & Education" />
      <div className="max-w-2xl mx-auto">
        <CareerItem 
          title="SK AI Data Academy 1기 수료"
          sub="2024.06 - 2024.08"
          description="머신러닝, 딥러닝, XGBoost 기반 예측모델 실습 및 칼로리 예측 회귀 모델 고도화 프로젝트 수행."
        />
        <CareerItem 
          title="Medilux 창업 동아리 활동"
          sub="2023.09 - 2024.01"
          description="경도인지장애 챗봇 기획 및 병원 인터뷰 기반 사용자 분석, 방문진료 중개 서비스 해커톤 참여 및 수상."
        />
        <CareerItem 
          title="한국인공지능·소프트웨어산업협회 부트캠프"
          sub="202X.XX - 202X.XX (6개월)"
          description="생성형 AI와 프롬프트를 활용한 AI 응용 개발자 양성과정 수료 및 우수학습자상 수상."
        />
        <CareerItem 
          title="DF (데이터분석/AI 동아리)"
          sub="2025.09 - 2025.12"
          description="데이터 분석 및 인공지능 심화 스터디, 경진대회 참가 및 공모전 활동."
        />
        <CareerItem 
          title="개발 기술 블로그 운영"
          sub="2025.02 - 진행중"
          description="풀스택/AI/데이터 분석 학습 과정 및 프로젝트 회고 기록 (velog.io/@cjungy2)."
        />
        <CareerItem 
          title="동덕여자대학교 졸업 (예정)"
          sub="2020.03 - 2025.02"
          description="정보통계학과 / 응용화학과 복수전공"
        />
      </div>
    </section>
  );
};

export default Career;