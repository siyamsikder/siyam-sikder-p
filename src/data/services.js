import { FiLayout, FiServer, FiDatabase, FiSmartphone } from 'react-icons/fi';

export const services = [
    {
        id: 1,
        title: 'Frontend Development',
        description: 'Building responsive, pixel-perfect, and accessible web interfaces using React.js and Tailwind CSS.',
        icon: FiLayout,
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'Creating robust server-side logic, RESTful APIs, and database management with Node.js and MongoDB.',
        icon: FiServer,
    },
    {
        id: 3,
        title: 'API Integration',
        description: 'Seamlessly connecting frontend applications with backend services and third-party APIs.',
        icon: FiDatabase, // Reusing icon or finding better
    },
    {
        id: 4,
        title: 'MERN Stack Solutions',
        description: 'Full-stack web application development providing end-to-end solutions for your business.',
        icon: FiSmartphone,
    },
];
