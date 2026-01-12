import SectionTitle from '../common/SectionTitle';
import BlogCard from './BlogCard';
import { blogs } from '../../data/blogs';

const Blog = () => {
    return (
        <section id="blog" className="py-20">
            <SectionTitle title="Latest Articles" subtitle="Blog" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {blogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Blog;
