import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteData';

const categories = ['All', 'Featured', 'Frontend', 'Backend', 'Data'];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    if (activeCategory === 'Featured') return projects.filter((project) => project.featured);
    return projects.filter((project) => project.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase())));
  }, [activeCategory]);

  return (

<div className="px-4 pt-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Real-world projects & modern web technologies.</h1>
          <p className="mt-3 max-w-3xl text-slate-400 leading-8">
            A collection of projects showcasing my development skills and practical experience.
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
                  ? 'border-blue-400 bg-blue-400/10 text-blue-200'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-blue-400 hover:text-white'
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
