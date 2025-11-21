import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, TrendingUp } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'KL University',
      location: 'Vijayawada, Andhra Pradesh',
      duration: '2022 - 2026',
      cgpa: '8.69',
      icon: GraduationCap,
      gradient: 'from-primary to-accent',
      highlights: [
        'Focus on AI/ML and Data Science',
        'Active participation in coding competitions',
        'Strong foundation in algorithms and data structures'
      ]
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Narayana Junior College',
      location: 'Andhra Pradesh',
      duration: '2020 - 2022',
      cgpa: '93.7%',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500',
      highlights: [
        'Excellence in Mathematics and Science',
        'Strong analytical and problem-solving skills',
        'Consistent academic performance'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

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
            Education & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Academic Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="group relative">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${edu.gradient} flex-shrink-0`}>
                          <edu.icon size={32} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp size={14} />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CGPA Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r ${edu.gradient}`}>
                        <Award size={18} className="text-white" />
                        <span className="text-white font-bold text-lg">{edu.cgpa}</span>
                        <span className="text-white/80 text-sm">CGPA/Percentage</span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${edu.gradient}`}></div>
                            <span className="text-gray-400 leading-relaxed">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.gradient}`}></div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Current CGPA', value: '8.69', icon: TrendingUp },
            { label: 'Years of Study', value: '3+', icon: Calendar },
            { label: 'Projects Completed', value: '10+', icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10 text-center hover:border-white/20 transition-all">
                <stat.icon size={32} className="text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
