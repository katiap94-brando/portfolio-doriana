import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skills = [
    'Gestione Social Media',
    'Storytelling',
    'Creazione Video',
    'Creazione Contenuti',
    'Campagne Pubblicitarie',
    'Piano Editoriale',
    'Copywriting',
    'Community Management',
  ];

  const tools = [
    'Canva',
    'CapCut',
    'WordPress',
    'Meta Business Suite',
    'TikTok for Business',
    'Microsoft Office',
    'AI Tools',
  ];

  const skillColors = [
    'bg-purple-100 text-purple-700',
    'bg-coral-100 text-coral-700',
    'bg-yellow-100 text-yellow-700',
    'bg-blue-100 text-blue-700',
    'bg-pink-100 text-pink-700',
    'bg-green-100 text-green-700',
    'bg-orange-100 text-orange-700',
    'bg-indigo-100 text-indigo-700',
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-yellow-100 via-coral-100 to-purple-100 relative overflow-hidden">
      {/* Geometric background decorations */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-[#1877F2] opacity-10 rounded-3xl"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-32 h-32 bg-coral-400 opacity-10 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl text-center text-[#1877F2] mb-16"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
        >
          Cosa So Fare
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              💡 Competenze
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-3 rounded-full ${skillColors[index % skillColors.length]} shadow-md`}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl text-gray-800 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              🛠️ Strumenti
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: (skills.length + index) * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-3 rounded-full ${skillColors[(skills.length + index) % skillColors.length]} shadow-md`}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-10 right-10 flex gap-3">
        <div className="w-4 h-4 bg-[#1877F2] rounded-full" />
        <div className="w-4 h-4 bg-coral-400 rounded-full" />
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="w-4 h-4 bg-purple-400 rounded-full" />
      </div>
    </section>
  );
}
