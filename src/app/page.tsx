"use client";

import { motion } from "framer-motion";
import AboutMe from "@/components/AboutMe";
import Home from "@/components/Home";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.1 });
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div>
      <motion.div
        ref={homeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: homeInView ? 1 : 0, y: homeInView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
      </motion.div>

      <motion.div
        ref={aboutMeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: aboutMeInView ? 1 : 0, y: aboutMeInView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: projectsInView ? 1 : 0,
          y: projectsInView ? 0 : 20,
        }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>
    </div>
  );
}

export default App;
