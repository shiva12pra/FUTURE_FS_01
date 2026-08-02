import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' }
];

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-3 shadow-lift backdrop-blur-xl">
            <NavLink to="/" className="flex items-center gap-3 rounded-full px-2 py-1">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 text-sm font-bold text-slate-950 shadow-glow">
                SP
              </span>
              <div className="leading-tight">
                <p className="text-base font-semibold text-white">Shiva Pradeep</p>
                <p className="text-xs text-slate-400">CSE student, full stack builder</p>
              </div>
            </NavLink>

            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 p-1 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                      isActive ? 'bg-white text-slate-950 shadow-glow' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/15"
            >
              Let&apos;s talk
            </NavLink>
          </div>
        </div>
      </header>

      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
