import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaTelegramPlane, FaCopy } from 'react-icons/fa';
import { contactLinks } from '../data/siteData';

const initialForm = { name: '', email: '', subject: '', message: '' };

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ message: '', type: '' });
  const [submitting, setSubmitting] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const emailAddress = contactLinks.find((item) => item.label === 'Email')?.value.replace('mailto:', '') || 'hello@example.com';
  const linkedInUrl = contactLinks.find((item) => item.label === 'LinkedIn')?.value || '#';
  const githubUrl = contactLinks.find((item) => item.label === 'GitHub')?.value || '#';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: '', type: '' });

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ message: 'Please complete all fields before sending.', type: 'error' });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to send message.');
      setStatus({ message: 'Message sent successfully. I will respond shortly.', type: 'success' });
      setForm(initialForm);
    } catch (error) {
      setStatus({ message: error.message || 'There was an issue submitting the form.', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2500);
    } catch {
      setCopyStatus('Copy failed');
    }
  };

  return (
    <div className="px-4 pt-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact Me</h1>
          <p className="mt-3 max-w-3xl text-slate-400 leading-8">
            Let&apos;s connect and build something amazing together! I&apos;m always open to new ideas, collaborations, and opportunities.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-5 shadow-soft">
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Let&apos;s Connect</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">I&apos;m always open to discussing new opportunities, collaborations, or interesting projects.</h2>
                <p className="mt-4 text-slate-400 leading-7">Feel free to reach out anytime — I reply quickly to messages that are project-ready and goal-oriented.</p>
              </div>

              <div className="space-y-3">
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                      <FaEnvelope />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Email</p>
                      <a href={`mailto:${emailAddress}`} className="mt-1 text-sm text-slate-400 hover:text-white">{emailAddress}</a>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <FaLinkedin />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">LinkedIn</p>
                      <a href={linkedInUrl} target="_blank" rel="noreferrer" className="mt-1 text-sm text-slate-400 hover:text-white">linkedin.com/in/nadikudi-shiva-pradeep-42734a320</a>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                      <FaGithub />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">GitHub</p>
                      <a href={githubUrl} target="_blank" rel="noreferrer" className="mt-1 text-sm text-slate-400 hover:text-white">github.com/shiva12pra</a>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Location</p>
                      <p className="mt-1 text-sm text-slate-400">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Available for Opportunities</p>
                    <p className="mt-2 text-sm text-slate-400">Open to internships, full-time roles and exciting projects.</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                    <FaTelegramPlane />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-5 shadow-soft">
            <div className="mb-5">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Send Me a Message</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s work together on your next idea.</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-300">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-300">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="name@example.com"
                    required
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="What would you like to discuss?"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Your Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Tell me about your project, timeline, and goals."
                  required
                />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {status.message && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>{status.message}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-5 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-slate-400">Prefer email?</p>
              <p className="mt-2 text-white">
                Drop me a mail at{' '}
                <a href={`mailto:${emailAddress}`} className="font-semibold text-blue-300 hover:text-blue-200">{emailAddress}</a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-white"
              >
                <FaCopy />
                Copy Email
              </button>
              {copyStatus && <span className="text-sm text-emerald-300">{copyStatus}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
