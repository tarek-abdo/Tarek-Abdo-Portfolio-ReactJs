import React from "react";
import { motion } from "framer-motion";
import cvFile from "../assets/Tarek Abdelnaby CV, Frontend Developer.pdf";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300">
          Contact Me
        </h2>
        <p className="text-lg mb-6">tarek.abdelnaby06@gmail.com</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/tarek-abdelnaby-646a53149/m" className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 hover:scale-110">LinkedIn</a>
          <a href="https://github.com/tarek-abdo" className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 hover:scale-110">GitHub</a>
          <a href="https://wa.me/+201151545073?text='Chat With Tarek Hegazy'" className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 hover:scale-110">Whatsapp</a>
        </div>
        <motion.a
          href={cvFile}
          download="Tarek Abdelnaby CV, Frontend Developer.pdf"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-indigo-600 dark:bg-indigo-500 rounded-full text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;