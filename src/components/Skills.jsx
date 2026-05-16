import React from 'react';

const badge = (label) => (
    <span key={label} className="bg-white text-[12px] px-2.5 py-1 rounded border border-[#c3c6d5] leading-none">
        {label}
    </span>
);

const Category = ({ title, items }) => (
    <div>
        <p className="text-[10px] uppercase tracking-widest text-[#3366cc] font-bold border-b border-[#c3c6d5] pb-1.5 mb-2">
            {title}
        </p>
        <div className="flex flex-wrap gap-1.5">
            {items.map(badge)}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-28">
            <div className="bg-[#f5f3f4] rounded-lg border border-[#c3c6d5] p-8 md:p-10">
                <h2 className="font-['Noto_Serif'] text-4xl font-bold mb-8">Tech Stack</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    <Category
                        title="🖥 Languages"
                        items={['Python', 'Java', 'JavaScript / TypeScript', 'SQL']}
                    />
                    <Category
                        title="⚙️ Backend"
                        items={['FastAPI', 'Spring Boot', 'Django REST Framework', 'JPA / MyBatis', 'REST API 설계', '비동기 처리 (asyncio)']}
                    />
                    <Category
                        title="🤖 AI / ML / LLM"
                        items={['LangChain', 'LangGraph', 'RAG Pipeline', 'Prompt Engineering', 'OpenAI / Gemini / Ollama', 'TensorFlow / Keras', 'XGBoost', 'Hugging Face', 'YOLO Pose Estimation']}
                    />
                    <Category
                        title="🗄 Database"
                        items={['PostgreSQL', 'MySQL', 'Vector DB']}
                    />
                    <Category
                        title="🎨 Frontend"
                        items={['React', 'TypeScript', 'Tailwind CSS']}
                    />
                    <Category
                        title="🛠 Tools"
                        items={['GitHub', 'Docker', 'Gradio / Streamlit', 'Figma', 'Notion']}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
