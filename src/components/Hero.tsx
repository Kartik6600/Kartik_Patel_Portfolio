import { motion } from "motion/react";
import { ArrowDown, Download, ChevronRight } from "lucide-react";
import resumeData from "../data/resume.json";
import { downloadResume } from "../lib/generatePDF";

export default function Hero() {
  const { name, title, summary } = resumeData.basics;

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-12 overflow-hidden text-center text-zinc-50">
      <motion.div
        className="z-10 flex flex-col items-center max-w-4xl gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide rounded-full bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.h1
            className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {name}
          </motion.h1>
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-base tracking-tight sm:text-lg md:text-2xl text-zinc-200">
              {title.split(" - ")[0]} 
            </h3>
            <h3 className="text-base tracking-tight sm:text-lg md:text-xl text-zinc-400">
              {title.split(" - ")[1]} & {title.split(" - ")[2]}
            </h3>
          </motion.div>
        </div>

        <motion.p
          className="max-w-2xl text-base leading-relaxed sm:text-lg text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {summary}
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-950 transition-all duration-300 bg-zinc-100 rounded-full hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            View Experience
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>
          <button
            onClick={downloadResume}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-100 transition-all duration-300 bg-zinc-900/50 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:scale-105 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Download Resume
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </motion.div>

  
    </section>
  );
}
