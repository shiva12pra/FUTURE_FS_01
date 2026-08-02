import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';
import { heroPhrases, aboutHighlights, skills, projects, contactLinks } from '../data/siteData';
import SkillPanel from '../components/SkillPanel';
import ProjectCard from '../components/ProjectCard';

const focusTiles = [
  {
    title: 'Interface polish',
    description: 'I like pages that feel deliberate, readable, and visually memorable without getting in the way.'
  },
  {
    title: 'Curiosity',
    description: 'I keep learning by applying new ideas in small projects and experiments.'
  },
  {
    title: 'Strong structure',
    description: 'I organize projects so features are easy to understand, extend, and maintain.'
  },
  {
    title: 'Practical delivery',
    description: 'I focus on building things that can be shown, explained, and used in real contexts.'
  },
  {
    title: 'Clear communication',
    description: 'I try to make every project easy to skim so the important parts stand out fast.'
  }
];

function HomePage() {
  const role = useTypewriter(heroPhrases, 85, 1500);

  return (
    <div className="text-slate-100">
      <section className="relative overflow-hidden px-4 pb-14 pt-0 sm:px-6 sm:pt-2 lg:px-8 lg:pt-3">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_28%),radial-gradient(circle_at_80%_16%,_rgba(217,70,239,0.10),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 shadow-lift backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              Portfolio / Full Stack
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Hi, I am</p>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Shiva Pradeep
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                <span className="block text-cyan-300">{role || heroPhrases[0]}</span>
                <span className="mt-2 block text-slate-200">
                  I build polished interfaces and useful products that explain my work quickly and clearly.
                </span>
              </p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-400">
              This portfolio is designed so someone can understand my background, my stack, the kind of work I build, and how to contact me within a few seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5"
              >
                Explore Projects <FaArrowRight />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                <FaDownload /> Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-fuchsia-400/30 hover:bg-fuchsia-400/10"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-52 w-52 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-lift backdrop-blur-xl sm:p-4 lg:min-h-[520px]">
              <div className="grid gap-3 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
                  <img
                    src="/profile.jpg"
                    alt="Shiva Pradeep"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = '/profile.svg';
                    }}
                    className="h-[320px] w-full object-contain object-center sm:h-[360px] sm:object-cover sm:object-top lg:h-full lg:min-h-[492px]"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 sm:col-span-2 lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Instant read</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight text-white">Full stack builder and problem solver.</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Current stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Tailwind CSS', 'React', 'Node.js', 'FastAPI', 'PostgreSQL'].map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Open to</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Internships, collaborative projects, and product work where design, logic, and delivery all matter.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <FaMapMarkerAlt className="text-cyan-300" />
                      Hyderabad, India
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <a href={contactLinks.find((link) => link.label === 'GitHub')?.value || '#'} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/30 hover:text-white">
                        <FaGithub />
                      </a>
                      <a href={contactLinks.find((link) => link.label === 'LinkedIn')?.value || '#'} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/30 hover:text-white">
                        <FaLinkedin />
                      </a>
                      <a href={contactLinks.find((link) => link.label === 'Email')?.value || 'mailto:hello@example.com'} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/30 hover:text-white">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lift backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">About me</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">I care about clean systems and clear presentation.</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-7">
                {aboutHighlights.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusTiles.map((tile, index) => (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-lift backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{index < 9 ? `0${index + 1}` : index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{tile.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{tile.description}</p>
                </motion.div>
              ))}
              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10 p-6 shadow-lift backdrop-blur-xl sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">What I value</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Clarity', 'Speed', 'Useful design', 'Strong logic', 'Clean delivery'].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Skill architecture</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">The stack I use to ship ideas</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                A focused set of tools, organized by the part of the product they help me ship. This keeps the page easier to scan and the stack easier to trust.
              </p>
            </div>
            <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-lift backdrop-blur-xl">
              Focused stack, faster delivery
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-6">
            {skills.map((skill) => (
              <SkillPanel key={skill.category} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Projects that show how I think</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white">
              View all projects <FaArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
