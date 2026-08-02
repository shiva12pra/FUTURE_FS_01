import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import TimelineItem from '../components/TimelineItem';
import { resumeTimeline } from '../data/siteData';

const coreSkills = [
  'C', 'Java', 'Python', 'SQL', 'Data Structures', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git & GitHub', 'Tailwind CSS'
];

function ResumePage() {
  return (
    <div className="px-4 pt-8 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lift backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Resume</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">My Resume</h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                A compact view of my education, technical stack, and the kind of work I want to keep building.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-slate-300">
              Recruiter-friendly, project-focused, and easy to scan.
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-lift backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  <FaGraduationCap />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Education timeline</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">The path so far</h2>
                </div>
              </div>

              <div className="relative mt-8 pl-8">
                <div className="absolute left-3 top-8 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-transparent" />
                <div className="space-y-6">
                  {resumeTimeline.map((entry) => (
                    <TimelineItem key={entry.year + entry.title} entry={entry} />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10 p-8 shadow-lift backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Professional style</p>
              <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                I want my resume and portfolio to communicate the same thing: strong fundamentals, a clean presentation, and work that feels practical instead of decorative.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-lift backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">About my resume</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">A snapshot of my journey and skills</h2>
              <p className="mt-4 text-slate-400 leading-7">
                My resume reflects my academic background, technical skills, and project experience. I keep adding work that shows how I think, how I build, and how I improve.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-lift backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Core skills</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {coreSkills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-lift backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Download resume</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Grab the PDF version</h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-200">
                  PDF
                </div>
              </div>
              <p className="mt-4 text-slate-400 leading-7">
                A more detailed recruiter-ready version with education, skills, and project highlights.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
              >
                Download Resume (PDF)
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
