import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { contactLinks } from '../data/siteData';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lift backdrop-blur-xl lg:grid-cols-[1.1fr_auto_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio footer</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
              Built for people who want the short version fast: who I am, what I build, and how to reach me.
            </p>
            <p className="mt-2 text-xs text-slate-500">© 2026 Shiva Pradeep. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/" className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white">Home</Link>
            <Link to="/projects" className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white">Projects</Link>
            <Link to="/resume" className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white">Resume</Link>
            <Link to="/contact" className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-3 justify-self-start lg:justify-self-end">
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                >
                  {Icon ? <Icon /> : key}
                </a>
              );
            })}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/40 hover:text-white"
            >
              <FaArrowUp /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
