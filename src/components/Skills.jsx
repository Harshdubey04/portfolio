import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Frontend',
    items: [
      { label: 'React', level: 90 },
      { label: 'Redux Toolkit', level: 85 },
      { label: 'Tailwind CSS', level: 88 },
      { label: 'JavaScript (ES6+)', level: 88 },
      { label: 'Framer Motion', level: 80 },
    ],
  },
  {
    name: 'Backend',
    items: [
      { label: 'Node.js (learning)', level: 70 },
      { label: 'Express (learning)', level: 68 },
      { label: 'MongoDB (learning)', level: 65 },
      { label: 'REST APIs', level: 75 },
    ],
  },
  {
    name: 'Tools',
    items: [
      { label: 'Git & GitHub', level: 88 },
      { label: 'VS Code / Cursor', level: 90 },
      { label: 'Firebase', level: 80 },
      { label: 'Postman / API testing', level: 75 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-4 py-20 sm:py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400/80">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Skills
          </h2>
          <div className="mx-auto h-px w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 dark:text-gray-300">
            A snapshot of the areas I work in most often, with a focus on solid
            fundamentals over a long list of logos.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:gap-8 md:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.article
              key={category.name}
              variants={cardVariants}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-5 sm:p-6 backdrop-blur shadow-lg shadow-slate-200/70 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-blue-500/15 dark:border-white/10 dark:from-slate-900/90 dark:via-slate-950 dark:to-black/90 dark:shadow-black/40 dark:hover:shadow-blue-500/25"
            >
              <header className="mb-4 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700 dark:text-gray-100">
                  {category.name}
                </h3>
              </header>

              <ul className="space-y-3">
                {category.items.map((skill) => (
                  <li key={skill.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-gray-300">
                      <span>{skill.label}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

