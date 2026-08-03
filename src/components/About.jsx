import { motion } from 'framer-motion';

const aboutContainer = {
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

const aboutItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const About = ({
  heading = 'About Me',
  intro,
  skills = [
  "JavaScript",
  "Java",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "React.js",
  "REST APIs",
  "JWT Authentication",
  "Git",
  "GitHub",
  "Postman"
]
}) => {
  const defaultIntro =
    "I'm a Full Stack Developer with a strong focus on backend development, passionate about building scalable web applications and secure REST APIs. I enjoy designing efficient server-side architectures, implementing authentication systems, integrating third-party APIs, and solving real-world problems with clean, maintainable code. Alongside backend development, I build responsive React applications that deliver seamless user experiences.";

  return (
    <section
      id="about"
      className="bg-white px-4 py-20 sm:py-24 transition-colors duration-300 dark:bg-black"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col gap-12 md:grid md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] md:items-start"
        variants={aboutContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="space-y-6" variants={aboutItem}>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-400/80">
              Introduction
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {heading}
            </h2>
            <div className="mt-3 h-px w-16 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-gray-200">
            {intro || defaultIntro}
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-gray-400">
            Recently, I've been building full-stack applications with Node.js, Express, MongoDB, and React, focusing on secure authentication, scalable backend systems, RESTful APIs, caching with Redis,
             and third-party integrations. I'm also continuously improving my problem-solving skills through Data Structures and Algorithms.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-5 sm:p-6 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:from-slate-900/90 dark:via-slate-950 dark:to-black/90 dark:shadow-black/40"
          variants={aboutItem}
        >
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-700 dark:text-gray-200">
            Skills
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-800 sm:grid-cols-2 dark:text-gray-100">
            {skills.map((skill) => (
              <li
                key={skill}
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/70 hover:bg-blue-50 hover:text-slate-900 hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:hover:bg-blue-500/10 dark:hover:text-white dark:hover:shadow-blue-500/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-colors duration-200 group-hover:bg-blue-400" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
