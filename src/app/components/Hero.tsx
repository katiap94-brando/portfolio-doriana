import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
const profileImage = '/doriana-profilo.jpeg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1877F2] via-purple-500 to-coral-400">
      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-2xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-40 h-40 bg-coral-300 rounded-full opacity-20 blur-2xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-yellow-200 rounded-full opacity-20 blur-xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Grid Layout: Photo + Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Photo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral-400 via-yellow-400 to-purple-400 rounded-3xl blur-2xl opacity-40 scale-105" />
            
            {/* Photo container */}
            <div className="relative">
              {/* Animated border */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-coral-400 via-yellow-300 to-purple-400 rounded-3xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Photo */}
              <img 
                src={profileImage}
                alt="Doriana Rizzo"
                className="relative w-80 h-auto rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            {/* Name */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              Doriana<br/>Rizzo
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              Social Media Manager<br/>
              Comunicazione
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('progetti')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white text-[#1877F2] rounded-full text-xl shadow-2xl hover:shadow-coral-400/50 transition-all"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Scopri i miei progetti
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-white/70" />
      </motion.div>
    </section>
  );
}