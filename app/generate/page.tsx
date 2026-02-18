'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { usePlan } from '../context/PlanContext';

export default function GeneratePage() {
  const router = useRouter();
  const { sport, customSport, goals, daysPerWeek, experience, setPlan } = usePlan();

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
        router.push('/results');
      } catch (error) {
        console.error('Error generating plan:', error);
        alert('Failed to generate your workout plan. Please try again.');
        router.push('/schedule');
      }
    };

    generatePlan();
  }, [sport, customSport, goals, daysPerWeek, experience, setPlan, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-white/10 border-t-primary-purple"
        />
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-4"
        >
          Building your plan...
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/55"
        >
          Analyzing your sport, goals, and schedule
        </motion.p>
      </motion.div>
    </div>
  );
}
