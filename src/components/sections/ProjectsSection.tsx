"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Link from "next/link";

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "web" | "mobile" | "other";
};

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout built with React and Node.js.",
    image: "/projects/project1.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application that helps users organize their daily tasks, set priorities, and track progress.",
    image: "/projects/project2.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    category: "web",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A mobile application that provides real-time weather forecasts, hourly and daily predictions based on user location.",
    image: "/projects/project3.jpg",
    technologies: ["React Native", "OpenWeather API", "JavaScript"],
    githubUrl: "https://github.com/",
    category: "mobile",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS, featuring dark/light mode and smooth animations.",
    image: "/projects/project4.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    category: "web",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "other">("all");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies I've learned throughout my journey.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 p-1 bg-secondary/30 rounded-lg">
            {["all", "web", "mobile", "other"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary/50"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full bg-secondary/30 flex items-center justify-center">
                {imageErrors[project.id] ? (
                  <div className="text-center">
                    <FaCode className="h-10 w-10 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Project thumbnail</p>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(project.id)}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 pt-2">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-1 h-4 w-4" />
                    Code
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1 h-3 w-3" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 