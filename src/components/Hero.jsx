import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Hero = ({ name = 'Harsh Dubey', tagline }) => {
  const defaultTagline =
    'I craft modern, performant web experiences with a focus on clean design.';

  return (
    <motion.section
      id="home"
      variants={heroVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 transition-colors duration-300 dark:from-slate-950 dark:via-black dark:to-slate-950"
    >
      <div className="pointer-events-none absolute -inset-[40%] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(147,51,234,0.16),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-blue-400/80">
          Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
          {name}
        </h1>
        <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-gray-300">
          {tagline || defaultTagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-2.5 text-sm font-medium text-slate-800 backdrop-blur transition hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-white/5 dark:text-gray-100 dark:hover:border-white/40 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-offset-black"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
