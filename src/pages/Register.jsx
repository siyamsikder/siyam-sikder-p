import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // Optionally add photoURL input

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, null)
                    .then(() => {
                        console.log('user profile info updated');
                        form.reset();
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <section className="py-20 flex justify-center items-center min-h-[calc(100vh-200px)]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 rounded-xl w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="block text-slate mb-2 text-sm font-mono">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full bg-light-navy border border-lightest-navy rounded-md p-3 text-white focus:outline-none focus:border-green transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-slate mb-2 text-sm font-mono">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            className="w-full bg-light-navy border border-lightest-navy rounded-md p-3 text-white focus:outline-none focus:border-green transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-slate mb-2 text-sm font-mono">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="******"
                            className="w-full bg-light-navy border border-lightest-navy rounded-md p-3 text-white focus:outline-none focus:border-green transition-colors"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button type="submit" variant="primary" className="w-full">
                        Sign Up
                    </Button>
                </form>

                <p className="mt-6 text-center text-slate text-sm">
                    Already have an account? <Link to="/login" className="text-green hover:underline">Login</Link>
                </p>
            </motion.div>
        </section>
    );
};

export default Register;
