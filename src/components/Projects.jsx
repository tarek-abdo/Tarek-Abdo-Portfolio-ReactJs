import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "React.Js E-Commerce Website",
    img: "/images/project1.png",
    desc: "A vibrant store with smooth animations. Products cart, whishlist and other sections",
    tech: ["React", "Tailwind", "Redux Toolkit", "Framer Motion"],
    live: "https://my-new-e-shop.netlify.app",
    repo: "https://github.com/tarek-abdo/e-shop",
  },
  {
    title: "Next.Js E-Commerce Website",
    img: "/images/project2.png",
    desc: "Powerful full stack e-commerce project",
    tech: ["Next","React", "Tailwind", "Stripe","Strapi", "Cloudinary","Kinde Authentication","Resend", "React Email"],
    repo: "https://github.com/tarek-abdo/next.js-e-commerce-frontend",
  },
  {
    title: "Doctor Appointment Booking System",
    img: "/images/project3.png",
    desc: "Doctor Appointment booking app with ability to serach docotrs specialization and book an appointment",
    tech: ["Next.js","React.js","Stripe", "Strapi CMS", "Tailwind CSS","Kinde Authentication"],
    repo: "https://github.com/tarek-abdo/doctor-appointment-frontend",
  },
  {
    title: "Technical Blog Website",
    img: "/images/project4.png",
    desc: "Landing page technical blog website ",
    tech: ["Next.js","React.js","Tailwind CSS"],
    live: " https://tech-blog-website.netlify.app",
    repo: " https://github.com/tarek-abdo/blog-website",
  },
  {
    title: "Ai Gemini Web Application",
    img: "/images/project5.png",
    desc: "Ai gemini web application with appility to search using Gemini API",
    tech: ["React.js","CSS", "Gemini API"],
    live: " https://gemini-cloning-app.netlify.app",
    repo: " https://github.com/tarek-abdo/Gemini-Clone",
  },
  {
    title: "University Web Application",
    img: "/images/project6.png",
    desc: "University Web Application to show information about studying fileds, programs and contact info",
    tech: ["React.js","React Scroll","Vite","CSS"],
    live: " https://new-educity-app.netlify.app",
    repo: " https://github.com/tarek-abdo/Educity-universty-website ",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              className="p-6 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all"
            >
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
              <p className="text-sm text-indigo-500 dark:text-indigo-300 mb-4">{project.tech.join(" | ")}</p>
              <div className="flex space-x-4">
                {project.live && <a href={project.live} className="text-indigo-600 dark:text-indigo-300 hover:underline">Live</a>}
                <a href={project.repo} className="text-indigo-600 dark:text-indigo-300 hover:underline">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;