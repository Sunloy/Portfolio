import img from "../../assets/sun.jpg";
import { FiMoon, FiSun, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme'; // <-- Import the hook

const Sidebar = ({ activeSection }) => {
    // Initialize the theme hook
    const { theme, toggleTheme } = useTheme();

    const getNavClass = (id) => {
        const baseClass = "text-sm tracking-wide transition-colors py-1 px-4 rounded ";
        const isActive = activeSection === id;

        // Added dark mode classes for both active and inactive states
        return baseClass + (isActive
            ? "text-blue-500 bg-blue-50 font-medium dark:bg-gray-800 dark:text-blue-400"
            : "text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white");
    };

    return (
        // Added dark mode background and border colors
        <aside className="w-[300px] bg-[#f2f3f7] dark:bg-gray-900 flex flex-col justify-between overflow-y-auto hidden md:flex h-full py-10 border-r border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div>
                <div className="flex justify-center">
                    {/* Added a subtle ring for dark mode to help the image pop */}
                    <img src={img} alt="Profile" className="w-52 h-52 rounded-full object-cover dark:ring-4 dark:ring-gray-800" />
                </div>

                <div className="text-center mt-6 mb-10">
                    {/* Added dark mode text color */}
                    <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">SOU ROSUN </h1>
                    <p className="text-blue-500 text-[10px] tracking-[2px] font-semibold uppercase mb-1">
                        Web Dev / Civil Engineer
                    </p>
                    {/* Added dark mode text color */}
                    <p className="text-gray-400 dark:text-gray-500 text-[10px] tracking-[2px] font-semibold uppercase transition-colors duration-300">
                        In Phnom Penh
                    </p>
                </div>

                <nav className="flex flex-col text-center space-y-4 px-8">
                    <a href="#home" className={getNavClass('home')}>Home</a>
                    <a href="#about" className={getNavClass('about')}>About</a>
                    <a href="#services" className={getNavClass('services')}>Services</a>
                    <a href="#skills" className={getNavClass('skills')}>Skills</a>
                    <a href="#education" className={getNavClass('education')}>Education</a>
                    <a href="#experience" className={getNavClass('experience')}>Experience</a>
                    <a href="#work" className={getNavClass('work')}>Work</a>
                    <a href="#contact" className={getNavClass('contact')}>Contact</a>
                </nav>
            </div>

            <div className="px-6 flex flex-col items-center mt-8">
                {/* Wired up the toggle function and dynamic icon/text */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-xs font-semibold border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-full px-5 py-2 mb-8 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                    {theme === 'dark' ? <><FiSun size={14} /> Light</> : <><FiMoon size={14} /> Dark</>}
                </button>

                <div className="flex flex-col items-center gap-4 mt-2">

                    <div className="flex gap-4 text-gray-400 dark:text-gray-500">
                        <a href="https://web.facebook.com/ro.sun.716" target="_blank" rel="noopener noreferrer">
                            <FiFacebook size={14} className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FiTwitter size={14} className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/rosunnnnnnnn/" target="_blank" rel="noopener noreferrer">
                            <FiInstagram size={14} className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin size={14} className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
            <footer className="px-6 flex flex-col items-center mt-8">
                <p className="text-xs mb-2 text-gray-500 dark:text-gray-500 transition-colors duration-300">© 2026 SOU ROSUN. All rights reserved.</p>
            </footer>
        </aside>
    );
};

export default Sidebar;