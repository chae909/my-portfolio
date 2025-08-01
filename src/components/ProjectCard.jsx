import React from 'react';

const ProjectCard = ({ imgUrl, title, description, tags, githubUrl, pptUrl, landingUrl, chatbotUrl, instagramUrl }) => {
    // 카드 전체를 a 태그로 감싸 pptUrl로 이동. pptUrl 없으면 기존 동작 유지
    const Wrapper = pptUrl ? 'a' : 'div';
    const wrapperProps = pptUrl
        ? {
            href: pptUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col cursor-pointer"
        }
        : { className: "bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col" };

    // 버튼/링크 노출 조건: 경도인지장애 대상 AI 챗봇 프로젝트일 때만
    const isHemaProject = title === "경도인지장애 대상 AI 챗봇";

    return (
        <Wrapper {...wrapperProps}>
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
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline" onClick={e => pptUrl && e.stopPropagation()}>GitHub</a>
                    {isHemaProject && (
                        <>
                            {chatbotUrl && <a href={chatbotUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-yellow-500 hover:underline">Chatbot</a>}
                            {instagramUrl && <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-400 hover:underline">Instagram</a>}
                        </>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default ProjectCard;