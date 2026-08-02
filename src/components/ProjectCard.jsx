import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  const hasLiveDemo = project.live && project.live !== '#';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-lift backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 opacity-80" />
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          {project.featured ? 'Featured build' : 'Project log'}
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Portfolio case</span>
      </div>
      <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-cyan-200">
        {project.title}
      </h3>
      <p className="mt-4 text-slate-400 leading-7">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          <FaGithub /> GitHub
        </a>
        {hasLiveDemo ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-fuchsia-400/40 hover:bg-fuchsia-400/10"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-400">
            <FaExternalLinkAlt /> Demo not published
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
