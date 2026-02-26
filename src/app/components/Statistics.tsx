import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
  isInView: boolean;
}

function StatItem({ number, label, delay, isInView }: StatItemProps) {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number.replace(/[^0-9]/g, ''));
  const hasPlus = number.includes('+');
  const suffix = number.match(/[KM]$/)?.[0] || '';

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(targetNumber * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, targetNumber, delay]);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div
        className="text-6xl md:text-7xl lg:text-8xl mb-4 bg-gradient-to-r from-[#1877F2] via-coral-400 to-yellow-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
      >
        {hasPlus && '+'}
        {count}
        {suffix}
      </div>
      <div
        className="text-xl md:text-2xl text-white/80"
        style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function Statistics() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const stats = [
    { number: '7', label: 'Profili social gestiti' },
    { number: '+2000', label: 'Contenuti pubblicati' },
    { number: '+200K', label: 'Visualizzazioni per i profili gestiti' },
    { number: '1', label: 'Collaborazione per Bilancio Sociale' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-[#1A1A2E] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1877F2] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-400 rounded-full opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl text-center text-white mb-16"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
        >
          Alcuni numeri
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 200}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Decorative geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 border-4 border-coral-400 rounded-lg opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-32 h-32 border-4 border-yellow-400 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
}