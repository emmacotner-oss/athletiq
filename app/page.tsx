'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const features = [
    { icon: '🎯', text: 'Goal-focused' },
    { icon: '📅', text: 'Flexible schedule' },
    { icon: '🤖', text: 'AI-powered' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-8xl mb-8"
        >
          🏆
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient"
        >
          Train Smarter. Play Better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mb-8 px-4"
          style={{ color: 'rgba(255, 255, 255, 0.55)' }}
        >
          Get a personalized workout plan tailored to your sport, goals, and schedule — powered by AI.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8 }}
          onClick={() => router.push('/sport')}
          className="btn-gradient px-8 py-4 rounded-xl font-semibold text-base md:text-lg mb-12 w-full sm:w-auto"
        >
          Build My Plan →
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="card-glass px-6 py-3 rounded-full flex items-center gap-2"
            >
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-sm font-semibold">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
