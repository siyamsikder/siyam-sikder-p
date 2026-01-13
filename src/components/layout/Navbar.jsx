import { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { AuthContext } from '../../provider/AuthProvider';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' }, // Anchor link logic might be needed
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold font-mono text-green">
                        &lt;Siyam /&gt;
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-300 font-mono ${isActive && link.path !== '/#services' ? 'text-green' : 'text-slate hover:text-green'}`
                                }
                            >
                                <span className="text-green mr-1">.</span>{link.name}
                            </NavLink>
                        ))}

                        {user ? (
                            <Button onClick={handleLogOut} variant="outline" className="px-4 py-2 text-sm flex items-center">
                                <FiLogOut className="mr-2" /> Logout
                            </Button>
                        ) : (
                            <NavLink to="/login">
                                <Button variant="outline" className="px-4 py-2 text-sm">Login</Button>
                            </NavLink>
                        )}

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-green focus:outline-none"
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-0 right-0 bg-navy h-screen w-3/4 ml-auto shadow-2xl z-50 md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Close logic handled by state, but maybe click outside? staying simple */}
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="text-xl font-mono text-slate hover:text-green"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <a href="/resume/siyam-resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">Resume</Button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
