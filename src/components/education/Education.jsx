import SectionTitle from '../common/SectionTitle';
import { motion } from 'framer-motion';

const educationData = [
    {
        id: 1,
        degree: "Diploma in Computer Science and Technology",
        institution: "Your Institute Name", // Placeholder
        duration: "2019 - 2023", // Estimate
        description: "Gained strong foundation in computer science principles, programming, and software engineering.",
    },
    // Add more if needed
];

const Education = () => {
    return (
        <section id="education" className="py-20">
            <SectionTitle title="Education" subtitle="My Journey" />
            <div className="mt-10 max-w-3xl">
                {educationData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 pb-12 border-l-2 border-navy last:pb-0"
                    >
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-green"></div>
                        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                        <div className="text-green font-mono text-sm mb-2">{item.institution} | {item.duration}</div>
                        <p className="text-slate">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
