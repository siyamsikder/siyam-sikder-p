import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic
        alert("Thanks for messaging! (Demo)");
    };

    return (
        <section id="contact" className="py-20 mb-20">
            <SectionTitle title="Get In Touch" subtitle="Contact" />

            <div className="flex flex-col md:flex-row gap-10 mt-10">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/3 space-y-6"
                >
                    <p className="text-slate text-lg">
                        I am currently open to new opportunities and projects.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-slate">
                            <div className="p-3 bg-light-navy rounded-full text-green">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Email</h4>
                                <p className="text-sm">siyam0sikder@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 text-slate">
                            <div className="p-3 bg-light-navy rounded-full text-green">
                                <FiPhone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Phone</h4>
                                <p className="text-sm">+8801343913493</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 text-slate">
                            <div className="p-3 bg-light-navy rounded-full text-green">
                                <FiMapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Location</h4>
                                <p className="text-sm">Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-2/3"
                >
                    <form onSubmit={handleSubmit} className="space-y-4 glass p-8 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-slate text-sm">Name</label>
                                <input type="text" id="name" className="w-full bg-light-navy border border-lightest-navy rounded-md p-3 text-white focus:outline-none focus:border-green transition-colors" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-slate text-sm">Email</label>
                                <input type="email" id="email" className="w-full bg-light-navy border border-lightest-navy rounded-md p-3 text-white focus:outline-none focus:border-green transition-colors" placeholder="john@example.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-slate text-sm">Message</label>
                            <textarea id="message" rows="5" className="w-full bg-light-navy border border-lightest-navy rounded-md p-3 text-white focus:outline-none focus:border-green transition-colors" placeholder="Hello, I'd like to work with you..." required></textarea>
                        </div>
                        <Button type="submit" variant="primary" className="w-full md:w-auto">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
