import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import { useScrollSpy } from '../hooks/useScrollSpy';
import Work from '../components/sections/Work';

const Portfolio = () => {
    const sectionIds = ['home', 'about', 'services', 'skills', 'education', 'work', 'experience', 'contact'];
    const activeSection = useScrollSpy(sectionIds);

    return (
        <div className="flex h-screen bg-white dark:bg-gray-950 font-sans overflow-hidden transition-colors duration-300">

            <Sidebar activeSection={activeSection || 'home'} />

            {/* Removed the p-12 class from this main tag so Hero can touch the edges */}
            <main className="flex-1 h-full overflow-y-auto bg-white dark:bg-gray-950 relative scroll-smooth transition-colors duration-300">

                {/* Hero sits outside the padded container to take up 100% width/height */}
                <Hero />

                {/* The rest of the sections get wrapped in padding so they don't touch the screen edges */}
                <div className="px-8 md:px-16 lg:px-24">
                    <About />
                    <Services />
                    <Skills />
                    <Education />
                    <Experience />
                    <Work />
                    <Contact />

                </div>

            </main>

        </div>
    );
};

export default Portfolio;