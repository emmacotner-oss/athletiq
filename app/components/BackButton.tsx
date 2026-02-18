'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => router.back()}
      className="text-white/55 hover:text-white transition-colors mb-4 flex items-center gap-2"
    >
      <span>←</span>
      <span>Back</span>
    </motion.button>
  );
}
