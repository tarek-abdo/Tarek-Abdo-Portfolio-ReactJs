import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-lg shadow-xl"
        >
          <p className="text-lg mb-4">
          Passionate Front-End Developer specializing in building dynamic, user-friendly web applications with React. I love turning ideas into interactive, high-performance experiences with clean, maintainable code. With a keen eye for design and a deep understanding of modern web technologies, I craft responsive and engaging interfaces that enhance user experience. Always eager to learn and innovate, I stay updated with the latest trends to bring fresh, efficient solutions to the digital world.
          </p>
          <p className="text-lg italic">Lover of gradients, animations, and all things creative.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;