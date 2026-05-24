import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { heroPhrases, aboutHighlights, skills, projects, contactLinks } from '../data/siteData';
import SkillPanel from '../components/SkillPanel';
import ProjectCard from '../components/ProjectCard';

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute right-12 top-12 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-fuchsia-700 via-blue-700 to-cyan-600 opacity-30 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-4 pb-12 lg:pt-6 lg:pb-14">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-x-6">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >             
              <p className="text-sm text-slate-300">Hi, I&apos;m <span className="inline-block ml-1">👋</span></p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                Shiva Pradeep
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                <span className="text-fuchsia-400 font-semibold">Computer Science Engineering Student</span>
                <span className="block text-slate-200 font-medium"> Full Stack Web Developer</span>
              </p>

              <p className="text-base text-slate-300 max-w-2xl">
                I build modern, responsive and user-friendly web applications and AI-based solutions that solve real-world problems. I love turning ideas into impactful digital experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/projects" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition">
                  View Projects
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition">
                  <FaDownload />
                  Download Resume
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5 transition">
                  Contact Me
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="text-sm text-slate-300">Connect with me</span>
                <div className="flex items-center gap-3">
                  <a href={contactLinks.find(c => c.label.toLowerCase().includes('github'))?.value || '#'} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white">
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a href={contactLinks.find(c => c.label.toLowerCase().includes('linkedin'))?.value || '#'} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a href={contactLinks.find(c => c.label.toLowerCase().includes('email'))?.value || 'mailto:hi@example.com'} className="text-slate-200 hover:text-white">
                    <FaEnvelope className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* circular backdrop */}
                <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-gradient-to-br from-blue-700 to-fuchsia-600 opacity-90" />
                {/* dotted pattern */}
                <svg className="absolute right-6 top-6 h-20 w-20 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#7c3aed" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>

                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
                  <div className="overflow-hidden rounded-2xl bg-slate-800">
                    <img
                      src="/profile.jpg"
                      alt="Pradeep"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/profile.svg'; }}
                      className="w-full h-[460px] object-cover block"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">Get to know more about my background, skills, and the way I build thoughtful digital experiences.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-widest text-fuchsia-400">Who I Am</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">I’m a Computer Science Engineering student passionate about full stack development and AI-based applications.</h3>
              <div className="mt-6 space-y-4 text-slate-300 leading-7">
                <p>I enjoy building real-world projects with modern technologies, crafting user-friendly web applications that solve problems and feel polished.</p>
                <p>My work focuses on clean code, strong collaboration, and intelligent interfaces that scale from prototype to production.</p>
                <p>I’m always eager to learn, explore new tools, and deliver solutions that make an impact.</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/15">
                <p className="text-xs uppercase tracking-widest text-fuchsia-300">Education</p>
                <h4 className="mt-4 text-xl font-semibold text-white">B.Tech in CSE</h4>
                <p className="mt-3 text-sm text-slate-400">2025 - 2028</p>
                <p className="mt-2 text-sm text-slate-400">Institute of Aeronautical Engineering</p>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/15">
                <p className="text-xs uppercase tracking-widest text-fuchsia-300">Skills</p>
                <h4 className="mt-4 text-xl font-semibold text-white">Technical Stack</h4>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <p>Java, HTML, CSS, JavaScript, React</p>
                  <p>Node.js, MySQL</p>
                  <p>Git, Tailwind CSS</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/15">
                <p className="text-xs uppercase tracking-widest text-fuchsia-300">Interests</p>
                <h4 className="mt-4 text-xl font-semibold text-white">What I Love</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Web Development</li>
                  <li>AI & Machine Learning</li>
                  <li>Problem Solving</li>
                  <li>Learning new skills</li>
                  <li>Playing Cricket</li>
                  <li>Listening to Music</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/15">
                <p className="text-xs uppercase tracking-widest text-fuchsia-300">Projects</p>
                <h4 className="mt-4 text-4xl font-bold text-white">4+</h4>
                <p className="mt-3 text-sm text-slate-300">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">Projects</p>
            <h3 className="mt-4 text-3xl font-bold text-white">Selected Highlights</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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
