# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Build for production → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

No test suite is configured.

## Stack

- **React 19** with JSX (no TypeScript in use despite some `.tsx` artifacts)
- **Vite 7** for bundling and dev server
- **Tailwind CSS 3** for utility styling, extended with custom classes in `index.css`
- **PostCSS** with Autoprefixer
- **ESLint 9** flat config format

## Architecture

Single-page application — one long scrollable page composed of sequential section components assembled in `App.jsx`:

```
Header → Hero → About → Projects → Skills → Career → Contact → Footer
```

Each section is a self-contained component in `src/components/`. `ProjectCard` and `SkillCard` are sub-components used by `Projects` and `Skills` respectively. Social link icons live in `src/components/icons/`.

### Styling conventions

Custom utility classes are defined in `index.css` alongside Tailwind directives. Key classes: `.brand-bg`, `.brand-accent`, `.brand-text`, `.glass-card`. The color scheme is a deep slate-blue to sky-blue gradient. The site uses the **Pretendard** font loaded from CDN in `index.html`.

All content is in **Korean** (`lang="ko"` on `<html>`).

### Assets

Project images and the profile photo live in `src/assets/`. The favicon is `src/assets/my-notion-face-portrait.png`, referenced in `index.html`.

### Fonts

`index.html`에 로드된 폰트:
- **Pretendard** — 기본 한국어 폰트 (CDN)
- **Noto Serif** — 제목용 세리프 (Google Fonts)
- **Inter** — 영문/서브텍스트용 (Google Fonts)

새 폰트가 필요하면 `index.html`의 Google Fonts `<link>`에 추가한다.

## Known Constraints

### Fixed Header offset

`Header`는 `fixed top-0 h-16`(64px)이다. 모든 첫 번째 섹션(Hero 등)은 반드시 `pt-16`을 포함해야 콘텐츠가 헤더에 가려지지 않는다.

### Mobile-first responsive

섹션을 새로 작성하거나 수정할 때는 항상 모바일 반응형을 함께 적용한다.

- 타이틀: `text-4xl sm:text-5xl lg:text-6xl` 방식으로 단계적으로 스케일
- 서브텍스트: `text-base sm:text-lg lg:text-xl`
- 버튼 묶음: 모바일 `flex-col`, sm 이상 `flex-row`; 모바일에서 버튼은 `w-full sm:w-auto`
- 텍스트 정렬: 모바일 `text-center`, lg 이상 `text-left` (`items-center lg:items-start`)
- 데코레이션 카드/사이드바: 모바일 `hidden`, lg 이상 `block`
