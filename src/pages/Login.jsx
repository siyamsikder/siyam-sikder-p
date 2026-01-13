import { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
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
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>

                <form onSubmit={handleLogin} className="space-y-6">
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
                        Sign In
                    </Button>
                </form>

                <p className="mt-6 text-center text-slate text-sm">
                    New here? <Link to="/register" className="text-green hover:underline">Create an account</Link>
                </p>
            </motion.div>
        </section>
    );
};

export default Login;
