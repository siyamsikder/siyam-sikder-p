import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Projects from '../components/projects/Projects';
import Education from '../components/education/Education';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Education />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;
