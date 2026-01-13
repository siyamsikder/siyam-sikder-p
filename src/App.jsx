import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Container from './components/common/Container';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import BlogPage from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-navy min-h-screen text-slate font-sans selection:bg-green selection:text-navy relative">
          <Navbar />

          <Container className="pt-24 min-h-screen">
            <div className="flex flex-col lg:flex-row gap-8 relative">
              {/* Sidebar is sticky within this flex container */}
              <Sidebar />

              <main className="w-full lg:w-3/4 flex flex-col">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:id" element={<ProjectDetails />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:id" element={<BlogDetails />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
              </main>
            </div>
          </Container>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
