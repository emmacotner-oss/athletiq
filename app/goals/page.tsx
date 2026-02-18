'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { usePlan } from '../context/PlanContext';
import { SPORT_GOALS } from '../types';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';

export default function GoalsPage() {
  const router = useRouter();
  const { sport, customSport, goals, setGoals } = usePlan();
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals);

  useEffect(() => {
    if (!sport) {
      router.push('/sport');
    }
  }, [sport, router]);

  const availableGoals = sport && sport !== 'Other' 
    ? SPORT_GOALS[sport] 
    : SPORT_GOALS.Default;

  const handleGoalToggle = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleContinue = () => {
    setGoals(selectedGoals);
    router.push('/schedule');
  };

  if (!sport) return null;

  return (
    <div className="min-h-screen p-4 py-8 md:py-12 max-w-5xl mx-auto">
      <BackButton />
      <ProgressBar step={2} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">What do you want to improve?</h1>
        <p className="text-white/55 mb-6 md:mb-8 text-sm md:text-base">Pick up to 3 focus areas</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
          {availableGoals.map((goal, index) => (
            <motion.button
              key={goal}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: selectedGoals.includes(goal) || selectedGoals.length < 3 ? 1.03 : 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ 
                delay: index * 0.03,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              onClick={() => handleGoalToggle(goal)}
              disabled={!selectedGoals.includes(goal) && selectedGoals.length >= 3}
              className={`card-glass p-4 rounded-xl text-left font-semibold text-sm md:text-base ${
                selectedGoals.includes(goal) ? 'card-selected' : ''
              } ${
                !selectedGoals.includes(goal) && selectedGoals.length >= 3 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
            >
              {goal}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-sm md:text-base">
            {selectedGoals.length}/3 selected
          </p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: 0.3 }}
            onClick={handleContinue}
            disabled={selectedGoals.length === 0}
            className="btn-gradient px-8 py-4 rounded-xl font-semibold text-lg w-full sm:w-auto"
          >
            Continue →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
