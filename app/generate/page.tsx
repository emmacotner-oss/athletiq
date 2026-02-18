'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePlan } from '../context/PlanContext';
import { usePlanHistory } from '../hooks/usePlanHistory';

export default function GeneratePage() {
  const router = useRouter();
  const { sport, customSport, goals, daysPerWeek, experience, setPlan } = usePlan();
  const { savePlan } = usePlanHistory();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sport || !experience || goals.length === 0) {
      router.push('/sport');
      return;
    }

    const generatePlan = async () => {
      try {
        const displaySport = sport === 'Other' ? customSport : sport;
        
        const response = await fetch('/api/generate-plan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sport: displaySport,
            goals,
            daysPerWeek,
            experience,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate plan');
        }

        const plan = await response.json();
        setPlan(plan);
        
        // Save to history
        savePlan(plan, displaySport, goals, daysPerWeek, experience!);
        
        router.push('/results');
      } catch (error) {
        console.error('Error generating plan:', error);
        setError('Failed to generate your workout plan. Please try again.');
      }
    };

    generatePlan();
  }, [sport, customSport, goals, daysPerWeek, experience, setPlan, savePlan, router]);

  const handleRetry = () => {
    setError(null);
    router.push('/schedule');
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-6xl mb-6"
          >
            ⚠️
          </motion.div>
          
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          
          <p className="text-white/70 mb-8">{error}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRetry}
              className="btn-gradient px-8 py-3 rounded-xl font-semibold"
            >
              Try Again
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/')}
              className="px-8 py-3 rounded-xl border border-white/20 hover:border-primary-purple transition-all"
            >
              Start Over
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-white/10 border-t-primary-purple spinner-gradient"
        />
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-bold mb-4"
        >
          Building your plan...
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/55 text-sm md:text-base"
        >
          Analyzing your sport, goals, and schedule
        </motion.p>
      </motion.div>
    </div>
  );
}
