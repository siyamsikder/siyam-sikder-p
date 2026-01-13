import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate">
                <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
                <Link to="/blog" className="text-green hover:underline">Back to Blog</Link>
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

            <article className="bg-light-navy/50 p-8 rounded-xl border border-lightest-navy/50">
                <div className="flex items-center space-x-4 text-sm text-slate font-mono mb-4">
                    <span className="flex items-center"><FiCalendar className="mr-2" /> {blog.date}</span>
                    <span className="text-green">|</span>
                    <div className="flex gap-2">
                        {blog.tags.map(tag => (
                            <span key={tag} className="flex items-center"><FiTag className="mr-1" /> {tag}</span>
                        ))}
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{blog.title}</h1>

                <div className="prose prose-invert max-w-none prose-lg">
                    <p className="text-slate/90 whitespace-pre-line leading-relaxed">
                        {blog.content}
                    </p>
                </div>
            </article>
        </motion.div>
    );
};

export default BlogDetails;
