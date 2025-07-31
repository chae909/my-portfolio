import React from 'react';

// SVG 아이콘 컴포넌트들
// 이 컴포넌트들은 Github, Linkedin, 블로그 아이콘을 SVG로 표시합니다.
const GithubIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#181717"/>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fill="#fff"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#fff"/>
    </svg>
);

const BlogIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g>
        <circle cx="20" cy="20" r="20" fill="#20C997"/>
        <path d="M12.5 12.5V27.5C12.5 28.0523 12.9477 28.5 13.5 28.5C14.0523 28.5 14.5 28.0523 14.5 27.5V12.5C14.5 11.9477 14.0523 11.5 13.5 11.5C12.9477 11.5 12.5 11.9477 12.5 12.5ZM18.5 16.5V27.5C18.5 28.0523 18.9477 28.5 19.5 28.5C20.0523 28.5 20.5 28.0523 20.5 27.5V16.5C20.5 15.9477 20.0523 15.5 19.5 15.5C18.9477 15.5 18.5 15.9477 18.5 16.5ZM24.5 19.5V27.5C24.5 28.0523 24.9477 28.5 25.5 28.5C26.0523 28.5 26.5 28.0523 26.5 27.5V19.5C26.5 18.9477 26.0523 18.5 25.5 18.5C24.9477 18.5 24.5 18.9477 24.5 19.5Z" fill="white"/>
      </g>
    </svg>
);


// Header.jsx: 페이지 상단의 네비게이션 바
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

// Hero.jsx: 웹사이트의 가장 첫 화면
const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-white py-16 md:py-0">
            <div className="container mx-auto px-4 text-center flex flex-col justify-center w-full">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-4 break-keep">
                    문제 해결과 도전을 즐기는<br className="hidden xs:inline"/> 개발자 채정윤입니다
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-1xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                    개인보다 팀을 생각합니다.<br />
                    추진력있게 목표를 향해 나아갑니다.<br />
                    성실함과 실천하는 자세를 중시합니다.
                </p>
                <div className="space-x-4">
                    <a href="#projects" className="inline-block px-8 py-4 rounded-xl font-bold transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700 text-lg">프로젝트 보기</a>
                    <a href="https://github.com/chae909" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-xl font-bold transition-colors duration-300 bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg">GitHub 방문</a>
                </div>
            </div>
        </section>
    );
};

// About.jsx: '나'를 소개하는 섹션
import profile from "./assets/profile.jpg";

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">About Me</h2>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                        <img src={profile} alt="채정윤 프로필 사진" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            안녕하세요! 기술을 통해 문제를 해결하는 것을 좋아하는 <strong>개발자 채정윤</strong>입니다. 약 2년간 창업 동아리, 해커톤, KOSA 부트캠프 등에서 개발 경험을 쌓았습니다.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            빠른 기술 학습 속도와 응용력을 바탕으로 아이디어를 실제 서비스로 구현하는 것을 즐깁니다. 특히 AI 헬스케어 분야에 관심이 많으며, <strong>기획-개발-데이터 분석</strong> 전반에 걸친 경험을 통해 완성도 높은 서비스를 만드는 데 기여하고 싶습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ProjectCard.jsx: 각 프로젝트를 보여주는 카드 컴포넌트
const ProjectCard = ({ imgUrl, title, description, tags, githubUrl }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col">
            <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">GitHub</a>
                </div>
            </div>
        </div>
    );
};

// Projects.jsx: 프로젝트들을 모아 보여주는 섹션
import aiPostureImg from "./assets/synergym.png";
import chatbotImg from "./assets/hema.png";
import medicalPlatformImg from "./assets/hack3.jpg";
import kaggleImg from "./assets/kaggle.png";

const Projects = () => {
    const projectData = [
        {
            imgUrl: aiPostureImg,
            title: "자세 교정 AI 서비스 개발",
            description: "이미지 기반 자세 분석으로 증상을 인식하고, 사용자에게 맞는 스트레칭 루틴과 유튜브 영상을 추천하는 AI agent 서비스를 개발했습니다. Spring Boot를 이용한 백엔드 개발, 랭그래프 설계 등 주요 기능 구현을 담당했습니다. ",
            tags: ["YOLO", "AI agent", "LLM", "YouTube API", "React", "Spring Boot", "FastAPI", "Ollama", "Postgre", ],
            githubUrl: "https://github.com/TeamSynergym" 
        },
        {
            imgUrl: chatbotImg,
            title: "경도인지장애 대상 AI 챗봇",
            description: "Medilux 창업 동아리 프로젝트로, 경도 인지 장애 완화를 위한 인지 재활 챗봇을 제작했습니다. Django를 활용하여 인지능력 테스트와 데일리 태스크 로직 백엔드 개발을 담당했습니다. ",
            tags: ["AI 헬스케어", "경도인지장애", "챗봇", "Django"],
            githubUrl: "https://github.com/Team-Hema"
        },
        {
            imgUrl: medicalPlatformImg,
            title: "방문진료 중개 플랫폼",
            description: "해커톤에 참가하여 병원 예약 및 위치 기반의 환자와 의사 중개 시스템을 설계하고 프로토타입을 개발했습니다. 모델 학습을 위한 데이터 전처리와 FastAPI 연결을 담당했습니다.",
            tags: ["해커톤", "최적 알고리즘", "colab", "시스템 설계"],
            githubUrl: "https://github.com/MediluxXTaveHACK-TEAM3" 
        },
        {
            imgUrl: kaggleImg,
            title: "Kaggle 칼로리 예측 모델",
            description: "Kaggle Playground Prediction Competition에 참여하여 건강 데이터 기반 칼로리 예측 모델의 성능을 고도화했습니다. RMSLE 기준으로 모델을 튜닝하며 성능을 개선한 경험이 있습니다.",
            tags: ["Kaggle", "XGBoost", "데이터 분석", "모델 튜닝"],
            githubUrl: "https://www.kaggle.com/code/cjungy2/calorie-expenditure-prediction-model-development"
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

// SkillCard.jsx: 각 기술 스택을 보여주는 카드 컴포넌트
const SkillCard = ({ title, children }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
            <div className="space-y-3">{children}</div>
        </div>
    );
};


// Skills.jsx: 보유 기술을 나열하는 섹션

// 간단한 아이콘 컴포넌트들
const BackendIcon = () => (
    <span className="inline-block text-blue-600 mr-2" title="Backend">🖥️</span>
);
const FrontendIcon = () => (
    <span className="inline-block text-pink-500 mr-2" title="Frontend">🎨</span>
);
const AIMLIcon = () => (
    <span className="inline-block text-green-600 mr-2" title="AI & ML">🤖</span>
);
const DataInfraIcon = () => (
    <span className="inline-block text-yellow-500 mr-2" title="Data & Infra">🗄️</span>
);

const SkillList = ({ items }) => (
    <ul className="space-y-3">
        {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                <span className="mt-1 text-blue-400">•</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center tracking-tight">Skills</h2>
                <div className="max-w-4xl mx-auto space-y-10">
                    {/* Languages */}
                    <div>
                        <h5 className="text-1xl font-bold mb-4">Languages</h5>
                        <div className="flex flex-wrap gap-2">
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Java" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
                        </div>
                    </div>
                    {/* Frameworks / Libraries / DB */}
                    <div>
                        <h5 className="text-1xl font-bold mb-4">⚙️ Frameworks / Libraries / DB</h5>
                        <div className="flex flex-wrap gap-2">
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white" alt="Spring" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/JPA-59666C?style=flat&logo=java&logoColor=white" alt="JPA" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/MyBatis-000000?style=flat&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDM1MiAzNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjM1MiIgaGVpZ2h0PSIzNTIiIGZpbGw9ImJsYWNrIi8+PHRleHQgeD0iNzUiIHk9IjIwMCIgZm9udC1zaXplPSIxMjBweCIgZmlsbD0id2hpdGUiPk1ZPC90ZXh0Pjwvc3ZnPg==" alt="MyBatis" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Oracle-F80000?style=flat&logo=oracle&logoColor=white" alt="Oracle" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/uv-222222?style=flat&logo=python&logoColor=white" alt="uv" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/LangChain-000000?style=flat&logo=langchain&logoColor=white" alt="LangChain" />
                        </div>
                    </div>
                    {/* Tools */}
                    <div>
                        <h5 className="text-1xl font-bold mb-4">🛠 Tools</h5>
                        <div className="flex flex-wrap gap-2">
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VSCode" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/IntelliJ-000000?style=flat&logo=intellijidea&logoColor=white" alt="IntelliJ" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Eclipse-2C2255?style=flat&logo=eclipseide&logoColor=white" alt="Eclipse" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Colab-F9AB00?style=flat&logo=googlecolab&logoColor=white" alt="Colab" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" alt="Figma" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
                            <img style={{height:'25px'}} src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white" alt="Notion" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Contact.jsx: 연락을 유도하는 섹션
const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-gray-200 text-black">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Me</h2>
                <br/>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/chae909" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors duration-300">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%B1%84-4b01a8317/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors duration-300">
                        <LinkedinIcon />
                    </a>
                    <a href="https://velog.io/@cjungy2/posts" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors duration-300">
                        <BlogIcon />
                    </a>
                </div>
                <a href="mailto:cowjddbs8256@gmail.com" className="inline-block bg-white text-blue-600 text-xl font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    메일로 연락하기
                </a>
            </div>
        </section>
    );
};

// Footer.jsx: 페이지 하단의 푸터
const Footer = () => {
    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
                
                <p>&copy; {new Date().getFullYear()} 채정윤. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


// App.jsx: 모든 컴포넌트를 조립하는 메인 애플리케이션
export default function App() {
    return (
        // Pretendard 폰트를 전체 페이지에 적용하기 위해 body에 스타일을 적용합니다.
        // 이 설정은 `index.html`과 `tailwind.config.js`에서 주로 관리됩니다.
        <div className="bg-white text-gray-800 font-sans">
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
