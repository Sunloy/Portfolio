import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';

const Work = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        const loadWork = async () => {
            const data = await fetchData('/work');
            setProjects(data);

            // Extract unique categories
            const uniqueCategories = ['All', ...new Set(data.map(item => item.category))];
            setCategories(uniqueCategories);
        };
        loadWork();
    }, []);

    // Filter projects based on the active tab
    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <section id="work" className="py-24 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-4xl">
                {/* Template specific headers */}
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] block mb-2">
                    My Work
                </span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-12 tracking-[0.1em] uppercase transition-colors duration-300">
                    Recent Work
                </h2>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 md:gap-4 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-1 text-sm transition-colors duration-300 rounded-sm ${activeTab === category
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-500 font-medium'
                                : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={project.image_url}
                                alt={`${project.category} Project`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Optional: Add a subtle overlay effect on hover if you want to display text later */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;