import SectionTitle from '../common/SectionTitle';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const Services = () => {
    return (
        <section id="services" className="py-20">
            <SectionTitle title="What I Do" subtitle="Services" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
