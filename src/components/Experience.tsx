import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="relative py-24 px-6 min-h-screen text-zinc-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400">
            A timeline of my professional journey, highlighting key roles and impactful contributions.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-8">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800 via-zinc-700 to-transparent -translate-x-1/2 hidden sm:block" />

          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: any; index: number; key?: number | string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={cn(
        "relative flex flex-col sm:flex-row gap-8 sm:gap-16 items-start w-full",
        isEven ? "sm:flex-row-reverse" : ""
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline Node */}
      <div className="absolute left-4 sm:left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 z-10 hidden sm:block shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

      {/* Content Card */}
      <div className={cn("w-full sm:w-1/2 flex flex-col", isEven ? "sm:items-end sm:text-right" : "sm:items-start sm:text-left")}>
        <div
          className="w-full flex flex-col gap-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md hover:bg-zinc-900/60 transition-colors duration-300 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
              {exp.role}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {exp.dates}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </span>
            </div>
          </div>

          <motion.div
            className="overflow-hidden"
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className={cn("flex flex-col gap-3 mt-4 text-zinc-300 text-sm sm:text-base", isEven ? "sm:items-end" : "sm:items-start")}>
              {exp.bullets.map((bullet: string, i: number) => (
                <li key={i} className={cn("flex items-start gap-3", isEven ? "sm:flex-row-reverse" : "")}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className={cn(isEven ? "sm:text-right" : "sm:text-left")}>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex items-center justify-between mt-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
            <span className="text-xs font-medium uppercase tracking-wider">
              {isExpanded ? "Show Less" : "Show Details"}
            </span>
            <ChevronDown
              className={cn("w-4 h-4 transition-transform duration-300", isExpanded ? "rotate-180" : "")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
