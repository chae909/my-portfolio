import React from 'react';

const ProjectCard = ({ imgUrl, category, title, description, tags, githubUrl, pptUrl, landingUrl, chatbotUrl, instagramUrl }) => {
    return (
        <div className="group flex flex-col border border-[#c3c6d5] rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-all">
            <div className="aspect-video overflow-hidden bg-[#efedee]">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover grayscale contrast-125 opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <p className="text-[10px] uppercase tracking-widest text-[#3366cc] font-bold mb-2">{category}</p>
                <h3 className="font-headline text-2xl font-bold text-[#1b1c1d] group-hover:text-[#3366cc] transition-colors mb-3">{title}</h3>
                <p className="text-[#434653] text-sm leading-relaxed flex-grow mb-5">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, i) => (
                        <span key={i} className="bg-[#efedee] text-[#434653] text-xs px-3 py-1 rounded-lg">{tag}</span>
                    ))}
                </div>
                <div className="border-t border-[#c3c6d5] pt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest text-[#1b1c1d] hover:text-[#3366cc] transition-colors font-bold">
                            GitHub →
                        </a>
                    )}
                    {pptUrl && (
                        <a href={pptUrl} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest text-[#1b1c1d] hover:text-[#3366cc] transition-colors font-bold">
                            발표자료 →
                        </a>
                    )}
                    {landingUrl && (
                        <a href={landingUrl} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest text-[#1b1c1d] hover:text-[#3366cc] transition-colors font-bold">
                            Live →
                        </a>
                    )}
                    {chatbotUrl && (
                        <a href={chatbotUrl} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest text-[#1b1c1d] hover:text-[#3366cc] transition-colors font-bold">
                            Chatbot →
                        </a>
                    )}
                    {instagramUrl && (
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest text-[#1b1c1d] hover:text-[#3366cc] transition-colors font-bold">
                            Instagram →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
