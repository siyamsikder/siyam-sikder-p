import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = false }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-green font-mono text-lg mb-2"
            >
                {subtitle}
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white relative inline-block"
            >
                {title}
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green rounded-full opacity-70"></span>
            </motion.h2>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    center: PropTypes.bool,
};

export default SectionTitle;
