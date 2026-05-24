import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { contactLinks } from '../data/siteData';

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-slate-400">Built with passion for technology, learning, and innovation.</p>
          <p className="mt-2 text-xs text-slate-500">© 2026 ShivaPradeep. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/" className="text-sm text-slate-300 hover:text-blue-300 transition">Home</Link>
          <Link to="/projects" className="text-sm text-slate-300 hover:text-blue-300 transition">Projects</Link>
          <Link to="/resume" className="text-sm text-slate-300 hover:text-blue-300 transition">Resume</Link>
          <Link to="/contact" className="text-sm text-slate-300 hover:text-blue-300 transition">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          {contactLinks.map((c) => {
            const url = c.value;
            const key = c.label;
            let Icon = null;
            if (url.includes('github.com')) Icon = FaGithub;
            else if (url.includes('linkedin.com')) Icon = FaLinkedin;
            else if (url.startsWith('mailto:')) Icon = FaEnvelope;

            return (
              <a
                key={key}
                href={url}
                target={url.startsWith('http') ? '_blank' : undefined}
                rel={url.startsWith('http') ? 'noreferrer' : undefined}
                className="text-slate-400 hover:text-blue-300 transition"
              >
                {Icon ? <Icon /> : key}
              </a>
            );
          })}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-white"
          >
            <FaArrowUp /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
