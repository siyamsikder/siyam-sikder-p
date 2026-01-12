import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import Button from '../common/Button';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    // Show only first 3 or filtered featured on home
    const featuredProjects = projects.slice(0, 3);

    return (
        <section id="projects" className="py-20">
            <SectionTitle title="Some Things I've Built" subtitle="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
            <div className="mt-12 text-center">
                <NavLink to="/projects">
                    <Button variant="outline">View All Projects</Button>
                </NavLink>
            </div>
        </section>
    );
};

export default Projects;
