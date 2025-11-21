import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/my photo.jpg';
import resumePDF from '../assets/MERUVA_LOKESH_RESUME (2).pdf';
import { User, MapPin, GraduationCap, Code2, Download, Eye, X } from 'lucide-react';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Meruva_Lokesh_Resume.pdf';
    link.click();
  };

  const highlights = [
    { icon: GraduationCap, text: 'B.Tech CSE at KL University', color: 'text-primary' },
    { icon: Code2, text: 'AI/ML & Web Development', color: 'text-accent' },
    { icon: MapPin, text: 'Vijayawada, Andhra Pradesh', color: 'text-secondary' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition duration-500"></div>
              
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-6 border border-white/20 backdrop-blur-sm overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Image with fallback */}
                  <img 
                    src={profileImage} 
                    alt="Meruva Lokesh" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Icon */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center">
                    <User size={120} className="text-white/50" />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Profile Info Badge */}
                <div className="mt-4 text-center space-y-2">
                  <h4 className="text-xl font-bold text-white">Meruva Lokesh</h4>
                  <p className="text-sm text-gray-400">AI/ML Enthusiast</p>
                </div>
              </div>
            </div>

            {/* Floating CGPA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-2xl shadow-2xl shadow-primary/50"
            >
              <div className="bg-black px-6 py-3 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">8.69</div>
                  <div className="text-xs text-gray-400 font-semibold tracking-wider">CGPA</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -top-4 -left-4 w-20 h-20 grid grid-cols-3 gap-2 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent"></div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I'm <span className="text-primary">Meruva Lokesh</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Computer Science student</span> at KL University, 
              currently pursuing my B.Tech degree with a strong academic record (CGPA: 8.69). 
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in technology is driven by a deep fascination with <span className="text-accent font-semibold">Artificial Intelligence</span> and 
              <span className="text-accent font-semibold"> Machine Learning</span>. I love building intelligent systems that solve real-world problems 
              and creating seamless web applications that deliver exceptional user experiences.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              From developing deep learning models for vehicle classification to creating NLP-powered resume analyzers, 
              I'm constantly exploring new technologies and pushing the boundaries of what's possible.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-3 py-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative flex items-center gap-4 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className={`relative p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} />
                  </div>
                  
                  {/* Text */}
                  <span className="relative text-gray-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
                  
                  {/* Arrow indicator */}
                  <div className="relative ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full text-black font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all overflow-hidden bg-[length:200%_100%] hover:bg-right"
                style={{ backgroundPosition: 'left' }}
              >
                <Eye size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="group relative flex items-center gap-2 px-8 py-4 bg-white/5 border-2 border-primary/50 rounded-full text-white font-bold hover:bg-white/10 hover:border-primary hover:shadow-xl hover:shadow-primary/30 transition-all backdrop-blur-sm overflow-hidden"
              >
                <Download size={20} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Resume Preview</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Resume Content */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <iframe
                  src={resumePDF}
                  className="w-full h-[600px]"
                  title="Resume Preview"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-white/10">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-black font-semibold hover:shadow-lg transition-all"
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;
