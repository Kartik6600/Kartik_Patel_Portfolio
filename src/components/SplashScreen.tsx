import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setProgress(Math.min((step / steps) * 100, 100));
      if (step >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Wait a bit before transitioning
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-zinc-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-2xl shadow-indigo-500/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-4xl font-bold tracking-tighter bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            KP
          </span>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-indigo-500/30"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        <div className="w-48 h-1 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SplashScreen;
