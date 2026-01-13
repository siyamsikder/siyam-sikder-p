import SectionTitle from '../common/SectionTitle';
import BlogCard from './BlogCard';
import { blogs } from '../../data/blogs';
import Button from '../common/Button';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    const latestBlogs = blogs.slice(0, 3);

    return (
        <section id="blog" className="py-20">
            <SectionTitle title="Latest Articles" subtitle="Blog" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {latestBlogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
            </div>
            <div className="mt-12 text-center">
                <NavLink to="/blog">
                    <Button variant="outline">View All Articles</Button>
                </NavLink>
            </div>
        </section>
    );
};

export default Blog;
