import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import TimelineItem from '../components/TimelineItem';
import { resumeTimeline } from '../data/siteData';

const coreSkills = [
  'C', 'Java', 'Python', 'SQL', 'Data Structures', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git & GitHub', 'Tailwind CSS'
];

function ResumePage() {
  return (
    <div className="px-4 pt-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">My Resume</span>
            </h1>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">A quick overview of my education, skills and highlights.</p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.95fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
                    <FaGraduationCap />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Education</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 pl-8">
                <div className="absolute left-3 top-8 h-[calc(100%-2rem)] w-px bg-slate-800" />
                <div className="space-y-6">
                  {resumeTimeline.map((entry) => (
                    <TimelineItem key={entry.year + entry.title} entry={entry} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">About My Resume</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">A snapshot of my journey and skills</h2>
              <p className="mt-4 text-slate-400 leading-7">
                My resume reflects my academic background, technical skills, project experience and the problem-solving mindset I bring to every challenge. I am always eager to learn, build and create impactful solutions.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Core Skills</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
                {coreSkills.map((skill) => (
                  <span key={skill} className="rounded-3xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-slate-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Download Resume</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Download the full PDF</h2>
                </div>
                <div className="rounded-3xl bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-300">
                  PDF
                </div>
              </div>
              <p className="mt-4 text-slate-400 leading-7">
                Get a detailed overview of my skills, projects, and experience in a recruiter-ready format.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:scale-[1.01]"
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
