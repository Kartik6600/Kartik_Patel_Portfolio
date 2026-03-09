import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Projects() {
  const { projects } = resumeData;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-100 mb-4">
            Key Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-indigo-500/50 transition-colors backdrop-blur-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex gap-3 text-zinc-400">
                    <a href="https://github.com/Kartik6600?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2 hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.name}
                  </h3>
                )}
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="text-xs font-mono text-zinc-500 px-2 py-1 rounded-md bg-zinc-800/50"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
