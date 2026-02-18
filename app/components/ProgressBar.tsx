'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  return (
    <div className="flex gap-2 mb-6 md:mb-8">
      {[1, 2, 3].map((s) => (
        <motion.div
          key={s}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            duration: 0.5,
            delay: s * 0.1,
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{ transformOrigin: 'left' }}
          className="h-1 flex-1 rounded-full overflow-hidden bg-white/10"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: s <= step ? '100%' : '0%' }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="h-full bg-gradient-to-r from-primary-purple to-primary-blue"
          />
        </motion.div>
      ))}
    </div>
  );
}
