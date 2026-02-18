'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { usePlan } from '../context/PlanContext';

export default function ResultsPage() {
  const router = useRouter();
  const { plan, daysPerWeek, experience, reset } = usePlan();

  useEffect(() => {
    if (!plan) {
      router.push('/sport');
    }
  }, [plan, router]);

  const handleNewPlan = () => {
    reset();
    router.push('/');
  };

  if (!plan) return null;

  return (
    <div className="min-h-screen p-4 py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gradient">{plan.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm text-white/55">
            <span>{plan.weeks}-week program</span>
            <span>·</span>
            <span>{daysPerWeek} days/week</span>
            <span>·</span>
            <span>{experience}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNewPlan}
            className="mt-6 px-6 py-2 rounded-xl border border-white/20 hover:border-primary-purple transition-all"
          >
            ← New Plan
          </motion.button>
        </div>

        {/* Workout Days */}
        <div className="space-y-6 mb-12">
          {plan.days.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.1 }}
              className="card-glass rounded-2xl overflow-hidden"
            >
              <div
                className="p-6 font-bold text-lg"
                style={{ background: 'rgba(108, 99, 255, 0.15)' }}
              >
                {day.day}
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-white/55 border-b border-white/10">
                        <th className="pb-3 font-semibold">Exercise</th>
                        <th className="pb-3 font-semibold">Sets</th>
                        <th className="pb-3 font-semibold">Reps</th>
                        <th className="pb-3 font-semibold">Rest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((exercise, exerciseIndex) => (
                        <tr
                          key={exerciseIndex}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="py-4 font-medium">{exercise.name}</td>
                          <td className="py-4 text-white/70">{exercise.sets}</td>
                          <td className="py-4 text-white/70">{exercise.reps}</td>
                          <td className="py-4 text-white/70">{exercise.rest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips */}
        {plan.tips && plan.tips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-glass p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4">💡 Pro Tips</h3>
            <ul className="space-y-3">
              {plan.tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary-purple">•</span>
                  <span className="text-white/70">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
