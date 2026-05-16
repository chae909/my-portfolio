const LINKS = [
    { label: 'GitHub', href: 'https://github.com/chae909' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%B1%84-4b01a8317/' },
    { label: 'Blog', href: 'https://velog.io/@cjungy2/posts' },
];

const Footer = () => {
    return (
        <footer className="bg-white border-t border-[#c3c6d5] py-12">
            <div className="max-w-[1100px] mx-auto px-6 md:px-20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-[10px] uppercase tracking-widest text-[#737784]">
                    &copy; 2025 채정윤 — 문제 해결과 도전을 즐기는 개발자
                </p>
                <ul className="flex gap-6">
                    {LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] uppercase tracking-widest text-[#737784] hover:text-[#3366cc] transition-colors"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
