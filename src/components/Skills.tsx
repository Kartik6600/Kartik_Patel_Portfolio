import { motion } from "motion/react";
import resumeData from "../data/resume.json";

export default function Skills() {
  const { skills } = resumeData;

  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" className="relative py-24 px-6 text-zinc-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400">
            Technologies, tools, and methodologies I use to build robust applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillGroup key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ skillGroup, index }: { skillGroup: any; index: number; key?: number | string }) {
  return (
    <motion.div
      className="flex flex-col gap-6 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-4">
        {skillGroup.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skillGroup.items.map((item: string, i: number) => (
          <motion.span
            key={i}
            className="px-4 py-2 text-sm font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
