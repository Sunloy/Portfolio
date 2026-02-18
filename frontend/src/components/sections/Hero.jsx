import React from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    return (
        // min-h-[calc(100vh-6rem)] accounts for the padding in your main layout
        <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center relative mb-20">

            {/* Decorative Blur Effect behind the text */}
            <div className="absolute top-0 left-[-10%] w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col-reverse xl:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Side: Text Content */}
                <div className="flex-1 max-w-2xl">
                    <span className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
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
                        <button className="flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-bold text-sm uppercase tracking-wider rounded shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                            Download CV <FiDownload size={18} />
                        </button>

                        {/* Smooth scrolls down to the services section */}
                        <a href="#services" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-bold text-sm uppercase tracking-wider hover:text-blue-500 dark:hover:text-blue-400 transition-colors group">
                            View My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Image graphic */}
                <div className="flex-1 w-full max-w-md lg:max-w-full">
                    <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                        <img
                            // Using a nice Unsplash image of a workspace as a placeholder
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Developer Workspace"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Subtle overlay gradient to make it look premium */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;