import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactContainer = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const contactItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Contact = ({
  heading = 'Contact',
  subheading = "Let's build something great together.",
}) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Simulated send – later can be replaced with EmailJS or API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="bg-white px-4 py-20 sm:py-24 transition-colors duration-300 dark:bg-black"
    >
      <motion.div
        variants={contactContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-3xl flex-col gap-8"
      >
        <motion.div className="text-center space-y-3" variants={contactItem}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400/80">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {heading}
          </h2>
          <div className="mx-auto h-px w-16 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <p className="mx-auto max-w-xl text-sm sm:text-base text-slate-600 dark:text-gray-300">
            {subheading}
          </p>
        </motion.div>

        <motion.form
          variants={contactItem}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-5 sm:p-6 backdrop-blur shadow-xl shadow-slate-200/70 dark:border-white/10 dark:from-slate-900/90 dark:via-slate-950 dark:to-black/90 dark:shadow-black/40"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className="peer w-full rounded-xl border border-slate-300 bg-white px-3.5 pt-6 pb-2 text-sm text-slate-900 outline-none transition-all duration-200 placeholder-transparent focus:border-blue-500/80 focus:bg-slate-50 focus:shadow-[0_0_0_1px_rgba(59,130,246,0.7)] dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:focus:bg-black/60"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute left-3.5 top-3.5 origin-left text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[0.8rem] peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:text-gray-400 dark:peer-focus:text-blue-300"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="peer w-full rounded-xl border border-slate-300 bg-white px-3.5 pt-6 pb-2 text-sm text-slate-900 outline-none transition-all duration-200 placeholder-transparent focus:border-blue-500/80 focus:bg-slate-50 focus:shadow-[0_0_0_1px_rgba(59,130,246,0.7)] dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:focus:bg-black/60"
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-3.5 top-3.5 origin-left text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[0.8rem] peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:text-gray-400 dark:peer-focus:text-blue-300"
                >
                  Email
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="peer w-full resize-none rounded-xl border border-slate-300 bg-white px-3.5 pt-6 pb-2 text-sm text-slate-900 outline-none transition-all duration-200 placeholder-transparent focus:border-blue-500/80 focus:bg-slate-50 focus:shadow-[0_0_0_1px_rgba(59,130,246,0.7)] dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:focus:bg-black/60"
                placeholder="Message"
                required
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-3.5 top-3.5 origin-left text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[0.8rem] peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:text-gray-400 dark:peer-focus:text-blue-300"
              >
                Message
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-1 sm:flex-row sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-transform transition-shadow duration-200 hover:brightness-110 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>

            <AnimatePresence>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs sm:text-sm text-green-300"
                >
                  Message sent successfully — I&apos;ll get back to you soon.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
