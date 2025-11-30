import React from 'react';

// SVG 아이콘 컴포넌트들
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

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold brand-text mb-4 animate-fade-in" style={{animationDelay: '0.05s'}}>Contact Me</h2>
                    <div className="flex justify-center space-x-6 mb-6 animate-fade-in" style={{animationDelay: '0.15s'}}>
                        <a href="https://github.com/chae909" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity duration-300" aria-label="GitHub">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%B1%84-4b01a8317/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity duration-300" aria-label="LinkedIn">
                            <LinkedinIcon />
                        </a>
                        <a href="https://velog.io/@cjungy2/posts" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity duration-300" aria-label="Blog">
                            <BlogIcon />
                        </a>
                    </div>
                    <a href="mailto:cowjddbs8256@gmail.com" className="inline-block brand-btn px-10 py-4 rounded-xl font-bold text-lg transition-transform duration-300 hover:-translate-y-1">메일로 연락하기</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;