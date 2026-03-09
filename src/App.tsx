/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedBackground from "./components/AnimatedBackground";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <AnimatedBackground />
            <Navbar />
            <main className="flex flex-col w-full">
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
