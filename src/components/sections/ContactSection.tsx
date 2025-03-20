"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // In a real application, this would be an API request to send the form data
      // For this example, we'll just simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, want to work together, or just want to connect!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">City, Country</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">your-email@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:your-email@example.com"
                  className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-800 dark:text-green-200 p-4 rounded-md mb-4">
                  Thank you for your message! I&apos;ll get back to you as soon as possible.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  
                  {error && (
                    <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-200 p-4 rounded-md mb-4">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-md font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 