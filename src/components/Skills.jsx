import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Wrench, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Terminal,
      color: 'from-primary to-accent',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'JavaScript', level: 70 },
      ]
    },
    {
      category: 'AI/ML',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'Keras', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'Deep Learning', level: 85 },
        { name: 'NLP', level: 75 },
      ]
    },
    {
      category: 'Web Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flask', level: 80 },
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Gradio', level: 70 },
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Jupyter', level: 85 },
      ]
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

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
            Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and beautiful web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'TensorFlow', 'React', 'Flask', 'Git', 'Machine Learning',
              'Deep Learning', 'NLP', 'Neural Networks', 'Data Science',
              'Web Development', 'SQL', 'REST APIs', 'ResNet', 'CNN'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all cursor-default"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
