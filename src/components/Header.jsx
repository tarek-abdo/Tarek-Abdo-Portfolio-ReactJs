import React from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Install @heroicons/react

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/50 dark:bg-gray-900/30 backdrop-blur-md p-4 flex justify-between items-center shadow-lg z-10">
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="text-3xl font-extrabold text-indigo-800 dark:text-indigo-100"
      >
        Tarek Abdelnaby
      </motion.h1>
      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-indigo-500 text-white"
        >
          {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;