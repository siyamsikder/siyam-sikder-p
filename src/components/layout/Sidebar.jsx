import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload, FiPhone } from 'react-icons/fi';
import { socialLinks } from '../../data/socialLinks';
import Button from '../common/Button';

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-1/3 xl:w-1/4 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto p-4 lg:p-0 mb-8 lg:mb-0">
            <div className="glass rounded-xl p-8 text-center h-full flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-light-navy shadow-2xl mx-auto">
                        <img
                            src="/assets/profile.jpg"
                            alt="Siyam Sikder"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Siyam+Sikder&background=0a192f&color=64ffda' }}
                        />
                    </div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green rounded-full border-2 border-navy animate-pulse"></div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Siyam Sikder</h1>
                    <span className="inline-block px-3 py-1 rounded-full bg-light-navy text-green text-sm font-mono">
                        MERN Stack Developer
                    </span>
                </div>

                <div className="w-full space-y-4 text-left">
                    <div className="flex items-center space-x-3 text-slate">
                        <FiMail className="text-green text-xl" />
                        <span className="text-sm">siyam0sikder.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate">
                        <FiPhone className="text-green text-xl" />
                        <span className="text-sm">+8801343913493</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate">
                        <FiMapPin className="text-green text-xl" />
                        <span className="text-sm">Bangladesh</span>
                    </div>
                </div>

                <div className="flex space-x-4 justify-center py-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-light-navy text-slate hover:text-green hover:-translate-y-1 transition-all duration-300 shadow-lg"
                        >
                            <link.icon size={20} />
                        </a>
                    ))}
                </div>

                <a href="/assets/resume/Siyam_Sikder_Resume.pdf" download className="w-full">
                    <Button variant="primary" className="w-full">
                        <FiDownload className="mr-2" /> Download Resume
                    </Button>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
