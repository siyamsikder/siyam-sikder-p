import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-xl relative group overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={100} />
            </div>
            <div className="text-4xl text-green mb-6">
                <Icon />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate leading-relaxed">{service.description}</p>
        </motion.div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default ServiceCard;
