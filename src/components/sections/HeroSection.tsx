"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
              <span className="block">Your Name</span>
              <span className="text-primary">Software Engineer</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              An undergraduate student passionate about building exceptional digital experiences with a focus on web development and user-centered design.
            </p>
            <div className="flex gap-4">
              <Link
                href="/#contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Contact Me
              </Link>
              <div className="flex items-center gap-4 ml-4">
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-secondary/30 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {imageError ? (
              <div className="text-center p-4">
                <div className="text-5xl mb-2">👋</div>
                <p className="text-muted-foreground text-sm">Profile image placeholder</p>
              </div>
            ) : (
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 