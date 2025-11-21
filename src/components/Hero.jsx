import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Eye, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import resumePDF from '../assets/MERUVA_LOKESH_RESUME (2).pdf';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = [
      'Computer Science Student',
      'AI/ML Enthusiast',
      'Web Developer',
      'Problem Solver'
    ];

    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Meruva_Lokesh_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/meruvlokesh',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/meruva-lokesh',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:lokeshmeruva10@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-primary text-lg md:text-xl font-medium">
              Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Meruva Lokesh
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8 h-12 md:h-16 flex items-center justify-center"
          >
            <span className="font-light">{text}</span>
            <span className="animate-pulse text-primary ml-1">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Passionate about building intelligent solutions with AI/ML and creating
            beautiful web experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-black font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 flex items-center gap-2">
                <Eye size={20} />
                View Projects
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </Link>

            <button
              onClick={handleDownload}
              className="px-8 py-4 bg-white/5 border-2 border-primary/50 rounded-full text-white font-semibold hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
            >
              <Download size={20} />
              Download Resume
            </button>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <button className="px-8 py-4 bg-white/5 border-2 border-secondary/50 rounded-full text-white font-semibold hover:bg-secondary/10 hover:border-secondary transition-all hover:scale-105 flex items-center gap-2 backdrop-blur-sm">
                <Mail size={20} />
                Contact Me
              </button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className={`p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 ${social.color} transition-all hover:scale-110 hover:bg-white/10`}
                whileHover={{ y: -5 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="cursor-pointer"
              >
                <ArrowDown size={32} className="text-primary" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
