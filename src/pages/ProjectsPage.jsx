import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteData';

const categories = ['All', 'Featured', 'AI', 'Web', 'Backend', 'Mobile'];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    if (activeCategory === 'Featured') return projects.filter((project) => project.featured);
    if (activeCategory === 'Web') return projects.filter((project) => project.tags.some((tag) => ['react', 'node', 'javascript', 'html', 'css', 'tailwind'].some((keyword) => tag.toLowerCase().includes(keyword))));
    if (activeCategory === 'AI') return projects.filter((project) => project.tags.some((tag) => ['python', 'opencv', 'mediapipe', 'tensorflow', 'computer vision', 'deep learning'].some((keyword) => tag.toLowerCase().includes(keyword))));
    if (activeCategory === 'Mobile') return projects.filter((project) => project.tags.some((tag) => ['unity', 'arcore', 'c#'].some((keyword) => tag.toLowerCase().includes(keyword))));
    if (activeCategory === 'Backend') return projects.filter((project) => project.tags.some((tag) => ['node', 'mongodb', 'mysql'].some((keyword) => tag.toLowerCase().includes(keyword))));
    return projects;
  }, [activeCategory]);

  return (
    <div className="px-4 pt-8 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lift backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">A project gallery built like a product showcase.</h1>
          <p className="mt-4 max-w-3xl text-slate-400 leading-8">
            Filter the work by intent and stack. Each card is designed to read quickly, highlight the technology behind it, and make the work feel more personal.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-100'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
