import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden group">
                <div className="absolute inset-0 bg-navy/80 group-hover:bg-navy/0 transition-colors duration-300 z-10"></div>
                {/* Fallback image logic is tricky in pure img, but using bg color or alt is fine */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = `https://placehold.co/600x400/112240/64ffda?text=${project.title}` }}
                />
                <div className="absolute top-4 right-4 z-20 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy rounded-full text-green hover:bg-green hover:text-navy transition-colors">
                        <FiGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy rounded-full text-green hover:bg-green hover:text-navy transition-colors">
                        <FiExternalLink size={20} />
                    </a>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="text-green text-3xl">
                        <FiFolder />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green transition-colors">{project.title}</h3>

                <div className="flex-grow">
                    <p className="text-slate mb-4 text-sm line-clamp-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 text-xs font-mono text-slate mb-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="mr-2 mb-2">{tech}</span>
                    ))}
                </div>

                <div className="mt-auto">
                    <Link to={`/projects/${project.id}`} className="text-green text-sm hover:underline flex items-center gap-1">
                        View Project <FiExternalLink size={14} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default ProjectCard;
