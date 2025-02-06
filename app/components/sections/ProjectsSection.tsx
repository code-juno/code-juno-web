"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import styles from "./ProjectsSection.module.css";
import { SECTION_IDS } from "@/app/constants";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
};

const projects: Project[] = [
  // Add your projects here
  {
    title: "Language Learning Mobile App",
    description:
      "Cross platform, iOS and Android language learning app utilising memory retention techniques such as spaced repetition and flashcards.",
    technologies: ["Expo", "React Native", "AI"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      {project.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-full font-medium transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <motion.a
            href="#"
            onClick={handleLinkClick}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={22} />
          </motion.a>
          <motion.a
            href="#"
            onClick={handleLinkClick}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink size={22} />
          </motion.a>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: isHighlighted ? 1 : 0,
              scale: isHighlighted ? 1 : 0.9,
            }}
            transition={{ duration: 0.2 }}
            className={`text-sm px-3 py-1 rounded-full ${
              isHighlighted
                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                : "pointer-events-none"
            }`}
          >
            Coming Soon
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className={`${styles.projectsSection} py-32 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Featured Projects"
            subtitle="Here are some of my recent and ongoing projects that I'm excited about."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
