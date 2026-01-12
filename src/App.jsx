import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Container from './components/common/Container';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';

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
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
