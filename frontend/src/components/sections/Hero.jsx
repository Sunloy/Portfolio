import React from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    return (
        // min-h-[calc(100vh-6rem)] accounts for the padding in your main layout
        <section id="home" className="min-h-[calc(60vh-1rem)] flex flex-col justify-center relative mt-10 mb-20">

            {/* Decorative Blur Effect behind the text */}
            <div className="absolute top-2 left-[-2%] w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col-reverse xl:flex-row items-center justify-between gap-12 lg:gap-20 ml-25">

                {/* Left Side: Text Content */}
                <div className="flex-1 max-w-2xl">
                    <span className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase mb-10 block">
                        Welcome to my portfolio
                    </span>

                    <h1 className="text-6xl lg:text-[80px] font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight transition-colors duration-300">
                        Hi! <br />
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">SUN</span>
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-colors duration-300">
                        I build robust digital experiences. Combining my background in civil engineering with modern full-stack development to create scalable, structured, and beautiful web applications.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a href="/resume.pdf" download="Sou_Rosun_Resume.pdf" className="flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-bold text-sm uppercase tracking-wider rounded shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                            Download My Resume <FiDownload size={18} />
                        </a>

                        {/* Smooth scrolls down to the services section */}
                        <a href="#services" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-bold text-sm uppercase tracking-wider hover:text-blue-500 dark:hover:text-blue-400 transition-colors group">
                            View My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Image graphic */}
            </div>
        </section>
    );
};

export default Hero;