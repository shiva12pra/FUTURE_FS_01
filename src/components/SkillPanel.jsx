import { motion } from 'framer-motion';

const skillSummaries = {
  Frontend: 'Interfaces, layout, and user interaction',
  'Core Development': 'Fundamentals, problem solving, and implementation details',
  Backend: 'APIs, server logic, and data handling',
  Database: 'Schema design and query performance',
  Tools: 'Workflow, versioning, and shipping',
  'Cloud & Deployment': 'Builds that are ready to share'
};

const skillSpans = {
  Frontend: 'xl:col-span-2',
  'Core Development': 'xl:col-span-2',
  Backend: 'xl:col-span-2',
  Database: 'xl:col-span-2',
  Tools: 'xl:col-span-3',
  'Cloud & Deployment': 'xl:col-span-3'
};

function SkillPanel({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-lift backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 ${skillSpans[skill.category] || 'xl:col-span-2'}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-90" />
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{skill.category}</p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{skillSummaries[skill.category] || 'Capabilities and tools I use regularly'}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillPanel;
