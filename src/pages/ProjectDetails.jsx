import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiArrowLeft, FiGithub, FiExternalLink, FiTool } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <Link to="/projects" className="text-green hover:underline">Back to Projects</Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-20 pb-10"
        >
            <Link to="/" className="inline-flex items-center text-green hover:underline mb-8">
                <FiArrowLeft className="mr-2" /> Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="rounded-xl overflow-hidden border border-lightest-navy/50 shadow-xl group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { e.target.src = `https://placehold.co/600x400/112240/64ffda?text=${project.title}` }}
                        />
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-navy border border-green text-green py-3 rounded-lg hover:bg-green/10 transition-colors"
                        >
                            <FiGithub /> GitHub
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-green text-navy py-3 rounded-lg hover:bg-green/90 transition-colors font-bold"
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-green mb-3 flex items-center"><FiTool className="mr-2" /> Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(tech => (
                                <span key={tech} className="bg-light-navy px-3 py-1 rounded-full text-slate text-sm border border-lightest-navy">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-green mb-3">Overview</h3>
                        <p className="text-slate leading-relaxed whitespace-pre-line">
                            {project.description}
                        </p>

                        {/* Placeholder for more details if available in future */}
                        <div className="mt-6 p-4 bg-light-navy/30 rounded-lg border border-lightest-navy/30">
                            <p className="text-slate/80 text-sm italic">
                                Detailed case study and implementation details coming soon...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
