const Footer = () => {
    return (
        <footer className="py-6 bg-navy text-center text-slate text-sm font-mono mt-12">
            <p>
                &copy; {new Date().getFullYear()} Siyam Sikder. All rights reserved.
            </p>
            <p className="mt-2">
                Built with <span className="text-green">React</span> & <span className="text-green">Tailwind CSS</span>
            </p>
        </footer>
    );
};

export default Footer;
