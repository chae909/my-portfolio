import React from 'react';
import profileImg from '../assets/profile.jpg';


const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center bg-white pt-16 pb-12 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* Mobile only: circular profile image */}
          <div className="col-span-12 flex justify-center lg:hidden">
            <img
              src={profileImg}
              alt="채정윤 프로필"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-md border-2 border-[#c3c6d5]"
            />
          </div>

          {/* Text */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#1a1a2e]"
              style={{ fontFamily: "'Noto Serif', serif" }}
            >
              Full-Stack &amp;<br />
              <span className="text-[#3366cc] italic">AI Developer</span>
            </h1>

            <p
              className="text-sm sm:text-base lg:text-lg text-[#434653] max-w-sm sm:max-w-lg lg:max-w-xl leading-relaxed"
              style={{ fontFamily: "'Inter', 'Pretendard', sans-serif" }}
            >
              문제 해결과 도전을 즐기는 개발자 채정윤입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 lg:pt-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="bg-[#3366cc] text-white rounded-lg uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#2255bb] transition-colors duration-200 text-center"
              >
                프로젝트 보기
              </a>
              <a
                href="https://github.com/chae909"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#737784] text-[#737784] rounded-lg uppercase tracking-widest text-xs px-8 py-4 hover:border-[#3366cc] hover:text-[#3366cc] transition-colors duration-200 text-center"
              >
                GitHub 방문
              </a>
            </div>
          </div>

          {/* Desktop only: profile photo + code card */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-[#f5f3f4] border border-[#c3c6d5] rounded-lg overflow-hidden shadow-sm aspect-[4/5] flex flex-col">

              {/* Profile image */}
              <div className="flex-1 relative overflow-hidden">
                <img
                  src={profileImg}
                  alt="채정윤 프로필"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Code snippet */}
              <div className="bg-white border-t border-[#c3c6d5] px-5 py-4 font-mono text-xs leading-relaxed">
                <div>
                  <span className="text-[#8892a4]">import</span>
                  {' '}Developer{' '}
                  <span className="text-[#8892a4]">from</span>
                  {' '}
                  <span className="text-[#3366cc]">'chae-jungyun'</span>
                  <span className="text-[#434653]">;</span>
                </div>
                <div>
                  <span className="text-[#434653]">Developer.</span>
                  <span className="text-[#3366cc]">init</span>
                  <span className="text-[#434653]">({'{'} mode: </span>
                  <span className="text-[#3366cc]">'AI_DRIVEN'</span>
                  <span className="text-[#434653]"> {'}'});</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Hero;
