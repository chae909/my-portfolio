import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const LINKS = [
    { label: 'GitHub', href: 'https://github.com/chae909' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%B1%84-4b01a8317/' },
    { label: 'Blog', href: 'https://velog.io/@cjungy2/posts' },
];

const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
        } catch (error) {
            setStatus('error');
            setErrorMsg('전송에 실패했어요. 잠시 후 다시 시도해주세요.');
        }
    };

    return (
        <section id="contact" className="px-6 md:px-20 py-20 max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* 왼쪽 — 텍스트 영역 */}
                <div>
                    <h2 className="font-['Noto_Serif'] text-4xl md:text-5xl font-bold leading-[1.15]
                                   text-[#1b1c1d] mb-6">
                        Let's build the<br />
                        <span className="text-[#3366cc] italic">next frontier</span><br />
                        together.
                    </h2>
                    <p className="text-[#434653] text-sm leading-relaxed mb-10">
                        현재 AI·풀스택·ML 분야의 인턴 및 주니어 포지션, 그리고 스타트업 협업 및 프리랜서 프로젝트 기회에 관심을 가지고 있습니다.
                    </p>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4
                                        border border-[#c3c6d5] rounded-lg px-5 py-4
                                        bg-white">
                            <span className="text-[#3366cc] text-xl">✉</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest
                                              text-[#737784] font-semibold mb-0.5">EMAIL</p>
                                <p className="text-[#1b1c1d] text-sm font-medium">
                                    cowjddbs8256@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4
                                        border border-[#c3c6d5] rounded-lg px-5 py-4
                                        bg-white">
                            <span className="text-[#3366cc] text-xl">📍</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest
                                              text-[#737784] font-semibold mb-0.5">LOCATION</p>
                                <p className="text-[#1b1c1d] text-sm font-medium">
                                    Seoul, South Korea
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        {LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm uppercase tracking-widest font-semibold
                                           text-[#737784] hover:text-[#3366cc] transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* 오른쪽 — 폼 카드 */}
                <div className="bg-white border border-[#c3c6d5] rounded-lg p-8 shadow-sm">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center
                                        py-16 text-center">
                            <div className="text-5xl mb-6">✅</div>
                            <p className="text-[#1b1c1d] text-xl font-['Noto_Serif']
                                          font-bold italic mb-3">
                                메시지가 전송됐어요!
                            </p>
                            <p className="text-[#737784] text-sm tracking-wide">
                                빠른 시일 내에 답장 드릴게요.
                            </p>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.2em]
                                                  font-semibold text-[#737784] mb-2">
                                    이름
                                </label>
                                <input
                                    name="from_name"
                                    type="text"
                                    required
                                    className="w-full bg-[#f5f3f4] border border-[#c3c6d5]
                                               rounded-lg px-4 py-3 text-[#1b1c1d] text-sm
                                               placeholder:text-[#c3c6d5]
                                               focus:outline-none focus:border-[#3366cc]
                                               focus:bg-white transition-all"
                                    placeholder="홍길동"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.2em]
                                                  font-semibold text-[#737784] mb-2">
                                    이메일
                                </label>
                                <input
                                    name="from_email"
                                    type="email"
                                    required
                                    className="w-full bg-[#f5f3f4] border border-[#c3c6d5]
                                               rounded-lg px-4 py-3 text-[#1b1c1d] text-sm
                                               placeholder:text-[#c3c6d5]
                                               focus:outline-none focus:border-[#3366cc]
                                               focus:bg-white transition-all"
                                    placeholder="hello@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.2em]
                                                  font-semibold text-[#737784] mb-2">
                                    내용
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-[#f5f3f4] border border-[#c3c6d5]
                                               rounded-lg px-4 py-3 text-[#1b1c1d] text-sm
                                               placeholder:text-[#c3c6d5]
                                               focus:outline-none focus:border-[#3366cc]
                                               focus:bg-white transition-all resize-none"
                                    placeholder="안녕하세요, 협업 제안이 있어서 연락드립니다..."
                                />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-xs tracking-wide -mb-2">
                                    {errorMsg}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={
                                    status === 'sending'
                                        ? 'w-full bg-[#3366cc] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-lg opacity-60 cursor-not-allowed transition-all'
                                        : 'w-full bg-[#3366cc] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:brightness-110 transition-all'
                                }
                            >
                                {status === 'sending' ? 'SENDING...' : 'SEND INQUIRY'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
