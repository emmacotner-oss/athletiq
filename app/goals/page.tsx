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
    <div className="min-h-screen p-4 py-12 max-w-5xl mx-auto">
      <BackButton />
      <ProgressBar step={2} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">What do you want to improve?</h1>
        <p className="text-white/55 mb-8">Pick up to 3 focus areas</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {availableGoals.map((goal, index) => (
            <motion.button
              key={goal}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => handleGoalToggle(goal)}
              disabled={!selectedGoals.includes(goal) && selectedGoals.length >= 3}
              className={`card-glass p-4 rounded-xl text-left font-semibold transition-all hover:scale-105 ${
                selectedGoals.includes(goal) ? 'card-selected' : ''
              } ${
                !selectedGoals.includes(goal) && selectedGoals.length >= 3 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
            >
              {goal}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/55">
            {selectedGoals.length}/3 selected
          </p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleContinue}
            disabled={selectedGoals.length === 0}
            className="btn-gradient px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Continue →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
