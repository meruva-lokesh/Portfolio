import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Database, Brain, CheckCircle2, Eye, X } from 'lucide-react';

// Import your certificate images from assets folder
import sql_basic from '../assets/sql_basic.jpg';
import deep_learning from '../assets/deep_learning.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'SQL Certification',
      issuer: 'HackerRank',
      date: '2024',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Demonstrated proficiency in SQL queries, joins, and database management',
      skills: ['SQL Queries', 'Database Design', 'Data Manipulation', 'Complex Joins'],
      certificateUrl: 'https://www.hackerrank.com/certificates/12bc77407094',
      certificateImage: sql_basic, // Replace with: sqlCert (after importing)
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
      certificateUrl: 'https://www.kaggle.com/learn/certification/lokeshmeruva2910/intro-to-deep-learning',
      certificateImage: deep_learning, // Replace with: deepLearningCert (after importing)
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
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${cert.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all hover:scale-105`}
                    >
                      <Eye size={16} />
                      View Certificate
                    </button>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
                      title="View on Platform"
                    >
                      <ExternalLink size={18} />
                    </a>
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

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-5xl bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-gray-900 to-black">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${selectedCert.gradient} bg-clip-text text-transparent`}>
                  {selectedCert.issuer}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-6 max-h-[75vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
              {selectedCert.certificateImage ? (
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <img 
                    src={selectedCert.certificateImage} 
                    alt={`${selectedCert.title} Certificate`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="bg-white/5 rounded-lg p-12 border border-white/10 text-center">
                  <Award size={80} className="text-primary mx-auto mb-6 opacity-50" />
                  <p className="text-gray-400 text-lg mb-4">
                    Certificate image not available yet
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    Add your certificate image to assets folder and import it in the component
                  </p>
                  <a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedCert.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all`}
                  >
                    <ExternalLink size={18} />
                    View on {selectedCert.issuer}
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-white/10 bg-gradient-to-r from-black to-gray-900">
              <div className="text-sm text-gray-400">
                Issued: {selectedCert.date}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${selectedCert.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all`}
                >
                  <ExternalLink size={18} />
                  View Original
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
