import portfolioData from '../../data/portfolio_data.json';

const Skills = () => {
    const skillData = portfolioData.skills;

    return (
        <section id="skills" className="py-24 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-4xl">
                {/* Template specific headers */}
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] block mb-2">
                    My Specialty
                </span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 tracking-[0.1em] uppercase transition-colors duration-300">
                    My Skills
                </h2>

                {/* Paragraph text matching the image layout */}
                <p className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed text-sm transition-colors duration-300">
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                </p>

                {/* The 2-column Grid for Progress Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {skillData.map((skill) => (
                        <div key={skill.id || skill.name}>
                            <div className="flex justify-between text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                                <span>{skill.name}</span>
                                <span className="text-blue-500">{skill.level_percent}</span>
                            </div>
                            {/* Progress Bar Track */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 relative mt-1 transition-colors duration-300">
                                {/* Progress Bar Fill */}
                                <div
                                    className={`${skill.color || 'bg-blue-500'} h-1.5 rounded-full absolute top-0 left-0 transition-all duration-1000 flex justify-end items-center`}
                                    style={{ width: skill.level_percent }}
                                >
                                    {/* The small circle at the end of the progress bar */}
                                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full absolute -right-1.5"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;