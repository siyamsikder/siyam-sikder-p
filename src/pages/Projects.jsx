import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
    return (
        <section className="py-20">
            <SectionTitle title="All Projects" subtitle="Archive" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
            >
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default ProjectsPage;
