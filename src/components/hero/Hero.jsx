import { motion } from 'framer-motion';
import Button from '../common/Button';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center py-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h4 className="text-green font-mono text-lg mb-4">Hi, my name is</h4>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
                Siyam Sikder.
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-slate mb-6"
            >
                I build things for the web.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="max-w-xl text-lg text-slate mb-10 leading-relaxed"
            >
                I am a passionate <span className="text-green">MERN Stack Developer</span> with strong frontend expertise and backend knowledge.
                I enjoy building modern web applications, solving real-world problems through code,
                and continuously learning new technologies.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4"
            >
                <NavLink to="/contact">
                    <Button variant="primary">Hire Me</Button>
                </NavLink>
                <NavLink to="/projects">
                    <Button variant="outline">View Projects</Button>
                </NavLink>
            </motion.div>
        </section>
    );
};

export default Hero;
