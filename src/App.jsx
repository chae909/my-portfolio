import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen font-sans bg-[#faf9fa]">
            <Header />
            <main className="max-w-[1100px] mx-auto px-6 md:px-20">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Career />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}