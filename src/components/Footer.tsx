import React from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import BlogIcon from './icons/BlogIcon';

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

export default Footer;
