import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript","Typescript", "React","Redux","Redux Toolkit","Next","Angular","Tailwind CSS","Material Ui","Bootstrap", "Shade CDN", "Agile", "Jest Unit Testing", "Git/ Git-Hub","OOP", "Solid Principle", "Design Patterns","jQuery","Firebase", "Postman", "Strapi", "SQL","Framer Motion"];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 py-2 bg-indigo-500 dark:bg-indigo-600 rounded-full text-lg font-medium text-white shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;