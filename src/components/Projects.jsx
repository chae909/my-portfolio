import React from 'react';
import ProjectCard from './ProjectCard';
import synergymImg from '../assets/synergym.png';
import hemaImg from '../assets/hema.png';
import hack3Img from '../assets/hack3.jpg';
import kaggleImg from '../assets/kaggle.png';

const Projects = () => {
    const projectData = [
        {
            imgUrl: synergymImg,
            title: "자세 교정 AI 서비스 개발",
            description: "이미지 기반 자세 분석으로 증상을 인식하고, 사용자에게 맞는 스트레칭 루틴과 유튜브 영상을 추천하는 AI agent 서비스를 개발했습니다. Spring Boot를 이용한 백엔드 개발, 랭그래프 설계 등 주요 기능 구현을 담당했습니다. ",
            tags: ["YOLO", "AI agent", "LLM", "YouTube API", "React", "Spring Boot", "FastAPI", "Ollama", "Postgre"],
            githubUrl: "https://github.com/TeamSynergym",
            pptUrl: "https://www.canva.com/design/DAGutloH450/rbcwFgROity-C_IIUfJZUg/view?utm_content=DAGutloH450&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2d4a790fef"
        },
        {
            imgUrl: hemaImg,
            title: "경도인지장애 대상 AI 챗봇",
            description: "Medilux 창업 동아리 프로젝트로, 경도 인지 장애 완화를 위한 인지 재활 챗봇을 제작했습니다. Django를 활용하여 인지능력 테스트와 데일리 태스크 로직 백엔드 개발을 담당했습니다. ",
            tags: ["AI 헬스케어", "경도인지장애", "챗봇", "Django"],
            githubUrl: "https://github.com/Team-Hema",
            pptUrl: "https://www.canva.com/design/DAGut5H6Nko/Vua0eNa_BB6R3eEgfe_55Q/view?utm_content=DAGut5H6Nko&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2818734e85",
            landingUrl: "https://hema.eldertime.kr",
            chatbotUrl: "http://pf.kakao.com/_xbgfun",
            instagramUrl: "https://www.instagram.com/eldertime.hema?igsh=MWdxaDE5ZmV3a2x1cg=="
        },
        {
            imgUrl: hack3Img,
            title: "방문진료 중개 플랫폼",
            description: "해커톤에 참가하여 병원 예약 및 위치 기반의 환자와 의사 중개 시스템을 설계하고 프로토타입을 개발했습니다. 모델 학습을 위한 데이터 전처리와 FastAPI 연결을 담당했습니다.",
            tags: ["해커톤", "최적 알고리즘", "colab", "시스템 설계"],
            githubUrl: "https://github.com/MediluxXTaveHACK-TEAM3",
            pptUrl: "https://www.canva.com/design/DAGuts5YO0Q/v9Xetj5zJxAF39gqgHX65A/view?utm_content=DAGuts5YO0Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e5b407b3c"
        },
        {
            imgUrl: kaggleImg,
            title: "Kaggle 칼로리 예측 모델",
            description: "Kaggle Playground Prediction Competition에 참여하여 건강 데이터 기반 칼로리 예측 모델의 성능을 고도화했습니다. RMSLE 기준으로 모델을 튜닝하며 성능을 개선한 경험이 있습니다.",
            tags: ["Kaggle", "XGBoost", "데이터 분석", "모델 튜닝"],
            githubUrl: "https://www.kaggle.com/code/cjungy2/calorie-expenditure-prediction-model-development",
        }
    ];

    return (
        <section id="projects" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;