import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="group rounded-3xl border border-slate-800/90 bg-slate-900/95 p-6 shadow-soft backdrop-blur"
    >
      <div className="mb-4 inline-flex items-center gap-2 text-sm text-blue-300 font-semibold tracking-wide uppercase">
        <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
        {project.featured ? 'Featured' : 'Project'}
      </div>
      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-300">
        {project.title}
      </h3>
      <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-800/90 bg-slate-950 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400 hover:bg-slate-800"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400 hover:bg-slate-800"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
