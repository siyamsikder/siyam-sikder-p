import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy focus:ring-green";

    const variants = {
        primary: "border-transparent text-navy bg-green hover:bg-green/80 shadow-lg shadow-green/20",
        outline: "border-green text-green bg-transparent hover:bg-green/10",
        ghost: "border-transparent text-slate hover:text-green hover:bg-navy/50"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'outline', 'ghost']),
    className: PropTypes.string,
};

export default Button;
