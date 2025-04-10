import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-700 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center p-8 bg-violet-200 dark:bg-gray-900/20 backdrop-blur-lg rounded-xl shadow-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300">
          Hi, I’m Tarek Abdelnaby
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-light">
          Front-End Developer | Crafting Stunning Web Experiences
        </p>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-indigo-600 dark:bg-indigo-500 rounded-full text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
        >
          <a href="#projects">Explore My Work</a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;