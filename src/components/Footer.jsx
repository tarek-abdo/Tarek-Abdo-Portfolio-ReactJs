import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-white/20 dark:bg-gray-900 backdrop-blur-md">
      <p className="text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Tarek Hegazy
      </p>
    </footer>
  );
};

export default Footer;