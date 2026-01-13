export const blogs = [
    {
        id: 1,
        title: 'Understanding React Hooks',
        summary: 'A deep dive into useState, useEffect, and custom hooks to manage state and side effects efficiently.',
        content: `React Hooks introduced in React 16.8 allow you to use state and other React features without writing a class. The most commonly used hooks are useState and useEffect.

        useState allows you to add state to functional components. It returns the current state value and a function to update it.
        
        useEffect lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
        
        Custom Hooks let you extract component logic into reusable functions.`,
        date: 'Oct 20, 2025',
        tags: ['React', 'JavaScript'],
        link: '#'
    },
    {
        id: 2,
        title: 'Mastering Tailwind CSS',
        summary: 'How to build rapid custom user interfaces without ever leaving your HTML.',
        content: `Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        
        It allows for rapid development cycles and consistent design systems. Configuration is easy via tailwind.config.js where you can customize colors, spacing, and more.`,
        date: 'Nov 15, 2025',
        tags: ['CSS', 'Tailwind'],
        link: '#'
    },
    {
        id: 3,
        title: 'MERN Stack Authentication',
        summary: 'Secure your Node.js APIs with JWT and handle user sessions in React.',
        content: `Authentication is a critical part of any application. The MERN stack (MongoDB, Express, React, Node.js) often uses JSON Web Tokens (JWT) for stateless authentication.
        
        On the backend, you generate a token upon successful login and send it to the client. The client stores this token (usually in localStorage or cookies) and sends it with every authorized request.`,
        date: 'Dec 05, 2025',
        tags: ['Node.js', 'Security'],
        link: '#'
    },
    {
        id: 4,
        title: 'The Future of Web Development',
        summary: 'Exploring new technologies like WASM, AI-driven coding, and Server Components.',
        content: `Web development is evolving rapidly. WebAssembly (WASM) is opening doors for high-performance applications in the browser.
        
        AI tools are assisting developers in writing code faster and with fewer errors.
        
        Server Components (like in Next.js) are changing how we think about rendering, blurring the line between client and server for better performance and DX.`,
        date: 'Jan 10, 2026',
        tags: ['Web', 'Trends'],
        link: '#'
    }
];
