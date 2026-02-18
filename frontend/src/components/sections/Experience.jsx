import React, { useEffect, useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { fetchData } from '../../api';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const loadExperience = async () => {
            const data = await fetchData('/experience');
            setExperiences(data);
        };
        loadExperience();
    }, []);

    return (
        <section id="experience" className="py-24 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-4xl">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] block mb-2">
                    My Journey
                </span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-12 tracking-[0.1em] uppercase transition-colors duration-300">
                    Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={exp.id || index} className="flex gap-6 group">
                            {/* Icon + vertical line */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-blue-50 dark:bg-gray-800 border-2 border-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                                    <FiBriefcase className="text-blue-500 group-hover:text-white transition-colors duration-300" size={16} />
                                </div>
                                {index < experiences.length - 1 && (
                                    <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-2"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="pb-8">
                                <div className="flex flex-wrap items-center gap-3 mb-1">
                                    <h3 className="text-sm font-bold text-gray-800 dark:text-white transition-colors duration-300">{exp.role}</h3>
                                    <span className="text-xs text-blue-500 font-semibold bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                                        {exp.company}
                                    </span>
                                </div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">{exp.period}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;