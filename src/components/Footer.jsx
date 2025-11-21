import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', to: 'hero' },
      { name: 'About', to: 'about' },
      { name: 'Skills', to: 'skills' },
      { name: 'Projects', to: 'projects' },
      { name: 'Education', to: 'education' },
      { name: 'Contact', to: 'contact' },
    ],
    social: [
      {
        name: 'GitHub',
        icon: Github,
        url: 'https://github.com/meruvlokesh',
      },
      {
        name: 'LinkedIn',
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/meruva-lokesh',
      },
      {
        name: 'Email',
        icon: Mail,
        url: 'mailto:lokeshmeruva10@gmail.com',
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Meruva Lokesh
              </span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Computer Science Student & AI/ML Enthusiast passionate about building intelligent solutions and beautiful web experiences.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>by Meruva Lokesh</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary hover:bg-white/10 transition-all group"
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: lokeshmeruva10@gmail.com</p>
              <p>Phone: +91-8639569647</p>
              <p>Location: Vijayawada, AP, India</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm text-center md:text-left"
            >
              © {currentYear} Meruva Lokesh. All rights reserved.
            </motion.p>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary hover:bg-white/10 transition-all"
            >
              <span className="text-gray-400 group-hover:text-primary transition-colors text-sm">
                Back to Top
              </span>
              <ArrowUp size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
            <span>Built with</span>
            <span className="text-primary">React</span>
            <span>•</span>
            <span className="text-accent">Tailwind CSS</span>
            <span>•</span>
            <span className="text-secondary">Framer Motion</span>
            <span>•</span>
            <span className="text-primary">EmailJS</span>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
    </footer>
  );
};

export default Footer;
