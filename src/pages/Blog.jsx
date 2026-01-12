import SectionTitle from '../components/common/SectionTitle';
import BlogCard from '../components/blog/BlogCard';
import { blogs } from '../data/blogs';
import { motion } from 'framer-motion';

const BlogPage = () => {
    return (
        <section className="py-20">
            <SectionTitle title="All Articles" subtitle="Blog" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            >
                {blogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default BlogPage;
