import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Brain, FileText, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ResNet Vehicle Classifier',
      description: 'Deep learning web application using ResNet50 for multi-class vehicle classification with an intuitive Flask interface.',
      longDescription: 'Built a comprehensive vehicle classification system leveraging transfer learning with ResNet50 architecture. Achieved 80%+ accuracy across multiple vehicle categories.',
      tech: ['Python', 'TensorFlow', 'Flask', 'ResNet50', 'Deep Learning'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      accuracy: '80%+',
      features: [
        'Multi-class vehicle classification',
        'Transfer learning with ResNet50',
        'Real-time predictions',
        'Flask web interface'
      ],
      github: 'https://github.com/meruva-lokesh/ResNet-Powered-Web-Application-for-Multi-Class-Vehicle-Image-Classification',
      demo: 'https://github.com/meruva-lokesh/ResNet-Powered-Web-Application-for-Multi-Class-Vehicle-Image-Classification',
      image: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Resume Analyser',
      description: 'NLP-powered resume evaluation tool that provides intelligent feedback and scoring for job applications.',
      longDescription: 'Developed an advanced NLP system that analyzes resumes, extracts key information, and provides actionable insights for improvement.',
      tech: ['Python', 'NLP', 'Scikit-learn', 'Gradio', 'Machine Learning'],
      icon: FileText,
      gradient: 'from-purple-500 to-pink-500',
      accuracy: '85%',
      features: [
        'Automated resume parsing',
        'Skill extraction and matching',
        'Scoring and recommendations',
        'Interactive Gradio interface'
      ],
      github: 'https://github.com/meruva-lokesh/Resume-Matcher',
      demo: 'https://huggingface.co/spaces/loki2910/Resume-Analyser',
      image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Handwritten Digit Recognizer',
      description: 'CNN-based MNIST classifier with Flask deployment for real-time digit recognition from handwritten images.',
      longDescription: 'Implemented a Convolutional Neural Network for recognizing handwritten digits with high accuracy, featuring a user-friendly web interface.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'CNN'],
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
      accuracy: '80%',
      features: [
        'CNN architecture',
        'MNIST dataset training',
        'Real-time recognition',
        'Flask API deployment'
      ],
      github: 'https://github.com/meruva-lokesh/Handwritten-Digit-Recognition',
      demo: 'https://github.com/meruva-lokesh/Handwritten-Digit-Recognition',
      image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring AI/ML and web development through hands-on projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all">
                {/* Project Image/Icon Area */}
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                  <div className={`relative z-10 p-4 rounded-2xl bg-gradient-to-r ${project.gradient}`}>
                    <project.icon size={48} className="text-white" />
                  </div>
                  
                  {/* Accuracy Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                    <div className="flex items-center gap-1">
                      <Zap size={14} className="text-yellow-400" />
                      <span className="text-white text-sm font-semibold">{project.accuracy} Accuracy</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all hover:scale-105`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/meruva-lokesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border-2 border-primary/50 rounded-full text-white font-semibold hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 backdrop-blur-sm"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
