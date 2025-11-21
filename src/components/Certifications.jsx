import React from 'react';
import { motion } from 'framer-motion';
import { Award, Download, ExternalLink, Database, Brain, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'SQL Certification',
      issuer: 'HackerRank',
      date: '2024',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Demonstrated proficiency in SQL queries, joins, and database management',
      skills: ['SQL Queries', 'Database Design', 'Data Manipulation', 'Complex Joins'],
      certificateUrl: '#',
      badgeColor: 'bg-blue-500'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Kaggle',
      date: '2024',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Completed comprehensive training in neural networks and deep learning architectures',
      skills: ['Neural Networks', 'CNN', 'RNN', 'Transfer Learning'],
      certificateUrl: '#',
      badgeColor: 'bg-purple-500'
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

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
            Certifications & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and skill validation through recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all">
                {/* Header with Icon */}
                <div className={`relative h-32 bg-gradient-to-r ${cert.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                    <cert.icon size={64} className="text-white" />
                  </motion.div>
                  
                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/50">
                      <CheckCircle2 size={14} className="text-green-400" />
                      <span className="text-green-400 text-xs font-semibold">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Issuer */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className={`text-lg font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                        {cert.issuer}
                      </p>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${cert.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all hover:scale-105`}
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                    <button
                      className="flex items-center justify-center px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
                      title="Download Certificate"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>

                {/* Award Icon Background */}
                <div className="absolute bottom-0 right-0 opacity-5">
                  <Award size={150} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">{certifications.length}+</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">2</div>
              <div className="text-gray-400 text-sm">Platforms</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">100%</div>
              <div className="text-gray-400 text-sm">Verified</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Continuously expanding my knowledge and earning new certifications
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
