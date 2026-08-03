import { motion } from 'framer-motion';

const Projects = ({ heading = 'Projects', projects = [] }) => {
  
  const fallbackProjects = [
  {
    title: "CodeForge",
    description:
      "A full-stack online coding platform inspired by LeetCode with real-time code execution, AI-powered coding assistance, secure JWT authentication, role-based access control, leaderboards, submission history, and an admin dashboard for problem management.",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Judge0 API",
      "Gemini AI",
      "JWT",
      "Tailwind CSS",
    ],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/Harshdubey04/codeforge",
    demo: "https://codeforge-frontend-gules.vercel.app/",
  },

  {
    title: "DevVerse Backend",
    description:
      "A scalable backend for a developer networking platform featuring JWT authentication, profile management, connection requests, feed APIs, secure validation, and MongoDB data modeling following RESTful architecture.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST APIs",
      "bcrypt",
    ],
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/Harshdubey04/DevVerse",
    demo: "",
  },

  {
    title: "Food Ordering App",
    description:
      "A responsive food ordering application that fetches live restaurant and menu data using the Swiggy API, featuring search, filters, Redux-powered cart management, authentication, and a modern user interface.",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "Swiggy API",
      "Tailwind CSS",
    ],
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/Harshdubey04/FoodOrdering-App",
    demo: "https://food-ordering-app-azure-delta.vercel.app/",
  },

  {
    title: "Netflix GPT",
    description:
      "An AI-powered movie recommendation platform that combines TMDB with Gemini AI to provide intelligent movie suggestions, secure authentication, and a responsive React interface.",
    tech: [
      "React",
      "Redux Toolkit",
      "Firebase",
      "TMDB API",
      "Gemini AI",
      "Tailwind CSS",
    ],
    image:
      "https://images.pexels.com/photos/799131/pexels-photo-799131.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/Harshdubey04/Netflix-GPT",
    demo: "https://netflix-gpt-94rt.vercel.app",
  },
];

  const list = projects.length ? projects : fallbackProjects;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="bg-slate-50 px-4 py-20 sm:py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400/80">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {heading}
          </h2>
          <div className="mx-auto h-px w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 dark:text-gray-300">
            A few projects that represent how I approach building thoughtful,
            modern interfaces and experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-1 backdrop-blur shadow-sm shadow-slate-200/80 dark:border-white/10 dark:bg-white/5/10 dark:from-slate-900/80 dark:via-slate-950/90 dark:to-black/90 dark:shadow-none"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-slate-900/60">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-40 w-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(147,51,234,0.25),_transparent_55%)]" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-70 dark:from-black/60 dark:via-black/10" />
              </div>

                <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                {project.tech && project.tech.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5 pt-1 text-[0.7rem] sm:text-xs text-blue-900 dark:text-blue-100">
                    {project.tech.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-blue-400/30 bg-blue-50 px-2 py-0.5 dark:border-blue-400/40 dark:bg-blue-500/10"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 min-w-[120px] items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-800 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-gray-100 dark:hover:border-white/40 dark:hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 min-w-[120px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow-md shadow-blue-500/30 transition hover:brightness-110"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
