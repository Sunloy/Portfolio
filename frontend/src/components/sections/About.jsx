import React from 'react';
import { FiMonitor, FiDatabase, FiSmartphone, FiCpu } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-24 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-4xl">
                {/* Template specific headers */}
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] block mb-2">
                    About Us
                </span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 tracking-[0.1em] uppercase transition-colors duration-300">
                    Who Am I?
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm transition-colors duration-300">
                    <strong>Hi I'm SUN.</strong> I am a professional bridging the physical and digital worlds. With a solid foundation in structural engineering and active site management, I bring a highly analytical, detail-oriented approach to problem-solving.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed text-sm transition-colors duration-300">
                    Currently, I am expanding my technical toolkit by studying modern full-stack development at TUX. My goal is to craft scalable, responsive applications using React and CSS layout systems like Flexbox and Grid. When I'm not coding or on-site, I enjoy diving into C++ microcontroller projects, studying Japanese, and putting on some The Weeknd while I work.
                </p>

                {/* Feature Cards matching the clean template look */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 border-b-2 border-blue-500 bg-white dark:bg-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
                        <FiMonitor className="text-blue-500 text-3xl mb-4" />
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Web Design</h3>
                    </div>
                    <div className="p-6 border-b-2 border-red-500 bg-white dark:bg-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
                        <FiDatabase className="text-red-500 text-3xl mb-4" />
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Web Dev</h3>
                    </div>
                    <div className="p-6 border-b-2 border-yellow-500 bg-white dark:bg-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
                        <FiSmartphone className="text-yellow-500 text-3xl mb-4" />
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Responsive</h3>
                    </div>
                    <div className="p-6 border-b-2 border-purple-500 bg-white dark:bg-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
                        <FiCpu className="text-purple-500 text-3xl mb-4" />
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">ESP32 & IoT</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;