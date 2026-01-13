import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

const BlogCard = ({ blog, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-light-navy rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 font-mono text-sm border border-lightest-navy"
        >
            {/* Code Editor Header */}
            <div className="bg-navy px-4 py-2 border-b border-lightest-navy flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate opacity-50">blog.js</span>
            </div>

            <div className="p-6">
                <div className="text-green mb-2">// {blog.date}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                    <span className="text-purple-400">const</span> {blog.title.replace(/\s+/g, '')} <span className="text-purple-400">=</span> <span className="text-white">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-white">{`{`}</span>
                </h3>

                <p className="text-slate pl-4 mb-3 border-l-2 border-slate/10">
                    {`/* ${blog.summary} */`}
                </p>

                <div className="flex gap-2 pl-4 mb-4">
                    {blog.tags.map(tag => (
                        <span key={tag} className="text-orange-300">"{tag}"</span>
                    ))}
                </div>

                <div className="text-white mb-4">{`}`}</div>

                <div className="flex justify-between items-center mt-4">
                    <Link to={`/blog/${blog.id}`} className="flex items-center text-green hover:underline">
                        Read Post <FiExternalLink className="ml-2" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default BlogCard;
