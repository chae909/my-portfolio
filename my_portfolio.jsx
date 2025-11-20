import React from 'react';

// SVG 아이콘 컴포넌트들
const GithubIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LinkedinIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const BlogIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
        <path d="M2.872 2.184l-.6-1.387c1.394-.644 2.788-1.288 4.182-1.932l.6 1.387c-1.394.644-2.788 1.288-4.182 1.932m17.928 2.316l.4-1.48-4.182-1.134-.4 1.48 4.182 1.134m-1.1 3.5l.8-1.24-3.382-2.184-.8 1.24 3.382 2.184m-1.3 3.5l1.2-.84-2.582-3.684-1.2.84 2.582 3.684m-1.3 3.5l1.4-.42-1.782-4.184-1.4.42 1.782 4.184m-1.1 3.5l1.6.02.982-4.684-1.6-.02-.982 4.684m-1.1 3.5l1.6.44-0-5.184-1.6-.44 0 5.184m-1.3 3.16l1.4.86.8-5.12-1.4-.86-.8 5.12m-1.3 2.32l1.2 1.28 1.6-4.9-1.2-1.28-1.6 4.9m-1.3 1.040l.8 1.6 2.4-4.48-.8-1.6-2.4 4.48m-4.828-18.5c-5.406 2.484-8.423 8.32-6.401 13.961 2.022 5.641 7.72 8.641 13.126 6.157 5.406-2.484 8.423-8.32 6.401-13.961-2.022-5.641-7.72-8.641-13.126-6.157" />
    </svg>
);


// Header.jsx
const Header = () => {
    return (
        <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" className="text-2xl font-bold text-gray-900">채정윤</a>
                    <nav className="hidden md:flex space-x-8 text-lg font-semibold">
                        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                    </nav>
                    <a href="#contact" className="hidden md:block btn btn-primary">연락하기</a>
                </div>
            </div>
        </header>
    );
};

// Hero.jsx
const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-white">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7.5xl lg:text-7xl font-black text-gray-900 leading-tight mb-4">
                    AI로 사람들의 삶에<br />가치를 더하는 개발자 채정윤
                </h1>
                <p className="text-xl md:text-1.5xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    기획부터 데이터 분석, 개발까지 아우르는 경험을 통해 실질적인 변화를 만듭니다.
                </p>
                <div className="space-x-4">
                    <a href="#projects" className="btn btn-primary text-lg">프로젝트 보기</a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg">GitHub 방문</a>
                </div>
            </div>
        </section>
    );
};

// About.jsx
const About = () => {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="section-title">About Me</h2>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                        <img src="https://placehold.co/240x240/E2E8F0/4A5568?text=Profile" alt="채정윤 프로필 사진" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            안녕하세요! AI 기술을 통해 사람들의 삶에 실질적인 도움을 주는 것에 큰 관심을 가진 <strong>AI 서비스 개발자 채정윤</strong>입니다. 약 2년간 창업 동아리, 해커톤, 기업 연계 프로젝트 등에서 실무 중심의 개발 경험을 쌓았습니다.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            빠른 기술 학습 속도와 응용력을 바탕으로 아이디어를 실제 서비스로 구현하는 것을 즐깁니다. 특히 AI 헬스케어 분야에서 사용자 페르소나와 UX를 깊이 고민하며 <strong>기획-개발-데이터 분석</strong> 전반에 걸친 경험을 통해 완성도 높은 제품을 만드는 데 기여하고 싶습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ProjectCard.jsx
const ProjectCard = ({ imgUrl, title, description, tags, githubUrl }) => {
    return (
        <div className="card">
            <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="card-content">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">GitHub</a>
                </div>
            </div>
        </div>
    );
};

// Projects.jsx
const Projects = () => {
    const projectData = [
        {
            imgUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=AI+Posture+Correction",
            title: "자세 교정 AI 서비스 개발",
            description: "이미지 기반 자세 분석으로 증상을 인식하고, 사용자에게 맞는 스트레칭 루틴을 추천하는 챗봇을 개발했습니다. 사용자 페르소나 기반의 섬세한 대화 흐름을 설계했습니다.",
            tags: ["PoseNet", "LangChain", "LLM", "YouTube API", "React"],
            githubUrl: "#"
        },
        {
            imgUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=AI+Chatbot",
            title: "경도인지장애 대상 AI 챗봇",
            description: "Medilux 창업 동아리 프로젝트로, 실제 병원과 연계하여 환자 및 보호자 인터뷰를 진행했습니다. 이를 바탕으로 페르소나를 분석하고 맞춤형 대화 시나리오를 설계했습니다.",
            tags: ["AI 헬스케어", "페르소나 분석", "시나리오 설계", "FastAPI"],
            githubUrl: "#"
        },
        {
            imgUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Medical+Platform",
            title: "방문진료 중개 플랫폼",
            description: "해커톤에 참가하여 병원 예약 및 위치 기반의 환자와 의사 중개 시스템을 설계하고 프로토타입을 개발했습니다. UI/UX 설계와 백엔드 API 개발을 담당했습니다.",
            tags: ["해커톤", "Java", "Spring Boot", "시스템 설계"],
            githubUrl: "#"
        },
        {
            imgUrl: "https://placehold.co/600x400/EF4444/FFFFFF?text=Kaggle+Competition",
            title: "Kaggle 칼로리 예측 모델",
            description: "Kaggle Playground Prediction Competition에 참여하여 건강 데이터 기반 칼로리 예측 모델의 성능을 고도화했습니다. RMSLE 기준으로 모델을 튜닝하며 성능을 개선한 경험이 있습니다.",
            tags: ["Kaggle", "XGBoost", "데이터 분석", "모델 튜닝"],
            githubUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 md:py-32 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// SkillCard.jsx
const SkillCard = ({ title, children }) => {
    return (
        <div className="skill-card">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <div className="space-y-2">{children}</div>
        </div>
    );
};


// Skills.jsx
const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Skills</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SkillCard title="Backend">
                        <p><strong>Java:</strong> Spring Boot, JPA, MyBatis를 활용한 운동 루틴/이력 관리 시스템 구축</p>
                        <p><strong>Python:</strong> FastAPI, Flask를 이용한 AI 챗봇 백엔드 및 API 서버 구축</p>
                    </SkillCard>
                    <SkillCard title="Frontend">
                        <p><strong>React:</strong> Tailwind CSS, shadcn/ui를 조합하여 챗봇 및 운동 추천 웹페이지 개발</p>
                        <p><strong>HTML/CSS/JS:</strong> 필터, 장바구니, 계약 폼 등 UI 중심 기능 구현</p>
                    </SkillCard>
                    <SkillCard title="AI & ML">
                        <p><strong>TensorFlow/Keras:</strong> PoseNet을 활용한 자세 인식 AI 모델 구현 및 분류 모델 학습</p>
                        <p><strong>XGBoost:</strong> 건강 데이터 기반 칼로리 예측 회귀 모델 구축</p>
                        <p><strong>NLP:</strong> Hugging Face Transformers와 LangChain을 이용한 RAG 기반 법률/세무 챗봇 개발</p>
                    </SkillCard>
                    <SkillCard title="Data & Infra">
                        <p><strong>Databases:</strong> MySQL, SQLite를 활용한 정규화된 스키마 설계 및 쿼리 작성</p>
                        <p><strong>APIs & DevOps:</strong> Cloudinary, YouTube API 연동 경험, Docker를 이용한 기본적인 컨테이너 관리</p>
                    </SkillCard>
                </div>
            </div>
        </section>
    );
};


// Contact.jsx
const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">새로운 기회를 찾고 있습니다</h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    저의 경험과 기술이 귀사의 성장에 어떻게 기여할 수 있을지 이야기 나누고 싶습니다.
                </p>
                <a href="mailto:your-email@example.com" className="inline-block bg-white text-blue-600 text-xl font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    메일로 연락하기
                </a>
            </div>
        </section>
    );
};

// Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <GithubIcon />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <LinkedinIcon />
                    </a>
                    <a href="https://your-blog.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <BlogIcon />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} 채정윤. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


// App.jsx
// 모든 컴포넌트를 조립하는 메인 애플리케이션 컴포넌트입니다.
export default function App() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Tailwind CSS와 커스텀 폰트를 사용하기 위한 스타일 시트입니다.
              실제 프로젝트에서는 index.html에 이 내용을 포함시켜야 합니다.
            */}
            <style jsx global>{`
                body {
                    font-family: 'Pretendard', 'Inter', sans-serif;
                    scroll-behavior: smooth;
                }
                .section-title {
                    @apply text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center;
                }
                .card {
                    @apply bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col;
                }
                .card-content {
                    @apply p-6 flex flex-col flex-grow;
                }
                .tag {
                    @apply inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full;
                }
                .btn {
                    @apply px-6 py-3 rounded-xl font-bold transition-colors duration-300;
                }
                .btn-primary {
                    @apply bg-blue-600 text-white hover:bg-blue-700;
                }
                .btn-secondary {
                    @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
                }
                .icon-link {
                    @apply text-gray-500 hover:text-blue-600 transition-colors duration-300;
                }
                .skill-card {
                    @apply bg-white p-6 rounded-xl shadow-md;
                }
            `}</style>

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
