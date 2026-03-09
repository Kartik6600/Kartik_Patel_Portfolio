import { motion } from "motion/react";
import { GraduationCap, Calendar } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Education() {
  const { education } = resumeData;

  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="relative py-24 px-6 bg-zinc-950/50 text-zinc-50 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400">
            My academic background and foundational learning.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, index }: { edu: any; index: number; key?: number | string }) {
  return (
    <motion.div
      className="flex flex-col gap-4 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-900/60 transition-colors duration-300 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-colors">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
            {edu.institution}
          </h3>
          <p className="text-zinc-400 font-medium">{edu.degree}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2">
        <Calendar className="w-4 h-4" />
        {edu.dates}
      </div>
    </motion.div>
  );
}
