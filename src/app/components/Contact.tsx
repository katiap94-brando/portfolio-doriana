import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-[#1877F2] via-purple-500 to-coral-400 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-300 rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
          >
            Parliamoci! ☕
          </h2>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8"
        >
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full">
            <Phone className="w-6 h-6 text-white" />
            <span className="text-white text-lg" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
              334 2724018
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full">
            <Mail className="w-6 h-6 text-white" />
            <span className="text-white text-lg" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
              dorianarizzo1996@gmail.com
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = 'mailto:dorianarizzo1996@gmail.com'}
          className="px-12 py-6 bg-white text-[#1877F2] rounded-full text-2xl shadow-2xl mb-8"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          Scrivimi ora
        </motion.button>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-white/70"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          © 2026 Doriana Rizzo - Social Media Manager & Comunicazione
        </motion.p>
      </div>

      {/* Decorative confetti */}
      <div className="absolute top-10 left-10 grid grid-cols-4 gap-2 opacity-30">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i % 4 === 0 ? 'bg-white' : i % 4 === 1 ? 'bg-yellow-300' : i % 4 === 2 ? 'bg-coral-300' : 'bg-purple-300'
            }`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>
    </section>
  );
}