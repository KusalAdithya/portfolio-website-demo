"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export default function AboutSection() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "HTML", "CSS", "Tailwind CSS",
    "Git", "RESTful APIs", "MongoDB", "Firebase"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get to know me</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an undergraduate software engineering student with a passion for creating 
                elegant and efficient solutions to complex problems.
              </p>
              <p>
                My journey in software development began during my first year of college, 
                where I discovered my love for coding and problem-solving. Since then, 
                I've been continuously learning and improving my skills.
              </p>
              <p>
                I'm particularly interested in web development, and I enjoy building 
                applications that are not only functional but also provide excellent user experiences.
              </p>
              <p>
                Currently, I'm pursuing my degree in Computer Science at University Name, 
                where I'm gaining a strong foundation in software engineering principles and practices.
              </p>
            </div>
          </motion.div>
          
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium">BSc in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">University Name (2021 - Present)</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium">Web Development Bootcamp</h4>
                  <p className="text-sm text-muted-foreground">Bootcamp Name (2022)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="border border-border p-6 rounded-lg text-center">
            <FaCode className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Creating responsive and dynamic web applications using modern frameworks and technologies.
            </p>
          </div>
          <div className="border border-border p-6 rounded-lg text-center">
            <FaLaptopCode className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Building beautiful, intuitive interfaces with a focus on user experience and performance.
            </p>
          </div>
          <div className="border border-border p-6 rounded-lg text-center">
            <FaMobileAlt className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              Ensuring applications look and function perfectly across all devices and screen sizes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 