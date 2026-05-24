import { motion } from 'framer-motion';

function SkillPanel({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 shadow-soft"
    >
      <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
      <div className="mt-4 space-y-3">
        {skill.items.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-800/90 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-blue-400/80 hover:bg-slate-800">
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillPanel;
