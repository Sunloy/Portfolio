import React, { useState, useEffect } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { fetchData } from '../../api';

const Education = () => {
    const [educationData, setEducationData] = useState([]);
    // State to track which accordion is open. Defaulting to the first one.
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        const loadEducation = async () => {
            const data = await fetchData('/education');
            setEducationData(data);
        };
        loadEducation();
    }, []);

    return (
        <section id="education" className="py-24 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-4xl">
                {/* Template specific headers */}
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] block mb-2">
                    Education
                </span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-12 tracking-[0.1em] uppercase transition-colors duration-300">
                    Education
                </h2>

                {/* Accordion Container */}
                <div className="space-y-2">
                    {educationData.map((edu, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={edu.id || index} className="flex flex-col">
                                {/* Accordion Header Button */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className={`flex justify-between items-center w-full text-left p-4 md:p-5 border transition-all duration-300 rounded-t-sm ${isOpen
                                        ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                                        : 'bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <h3 className={`font-bold text-sm md:text-base ${isOpen ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>
                                        {edu.title}
                                    </h3>
                                    {/* Plus/Minus Icons */}
                                    <div className={`flex items-center justify-center w-6 h-6 rounded-full border ${isOpen ? 'border-white' : 'border-gray-300'}`}>
                                        {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} className="text-gray-500" />}
                                    </div>
                                </button>

                                {/* Accordion Content Box */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out border-x border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 border-transparent'
                                        }`}
                                >
                                    <div className="p-6 md:p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                {edu.paragraph1}
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                {edu.paragraph2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Education;