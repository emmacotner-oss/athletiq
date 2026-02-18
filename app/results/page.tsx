'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePlan } from '../context/PlanContext';

export default function ResultsPage() {
  const router = useRouter();
  const { plan, daysPerWeek, experience, reset } = usePlan();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!plan) {
      router.push('/sport');
    }
  }, [plan, router]);

  const handleNewPlan = () => {
    reset();
    router.push('/');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareText = `Check out my ${plan?.title || 'workout plan'} from AthletIQ!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AthletIQ Workout Plan',
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  if (!plan) return null;

  return (
    <div className="min-h-screen p-4 py-8 md:py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
          >
            {plan.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 text-sm text-white/55"
          >
            <span>{plan.weeks}-week program</span>
            <span>·</span>
            <span>{daysPerWeek} days/week</span>
            <span>·</span>
            <span>{experience}</span>
          </motion.div>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNewPlan}
              className="px-6 py-2 rounded-xl border border-white/20 hover:border-primary-purple transition-all text-sm md:text-base"
            >
              ← New Plan
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="px-6 py-2 rounded-xl border border-white/20 hover:border-primary-purple transition-all text-sm md:text-base"
            >
              🖨️ Print / Save PDF
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="px-6 py-2 rounded-xl border border-white/20 hover:border-primary-purple transition-all text-sm md:text-base"
            >
              {copied ? '✓ Copied!' : '🔗 Share'}
            </motion.button>
          </div>
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
              <div className="p-4 md:p-6">
                <div className="overflow-x-auto exercise-table">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="text-left text-xs md:text-sm text-white/55 border-b border-white/10">
                        <th className="pb-3 font-semibold pr-4">Exercise</th>
                        <th className="pb-3 font-semibold px-2">Sets</th>
                        <th className="pb-3 font-semibold px-2">Reps</th>
                        <th className="pb-3 font-semibold pl-2">Rest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((exercise, exerciseIndex) => (
                        <motion.tr
                          key={exerciseIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: dayIndex * 0.1 + exerciseIndex * 0.05 }}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="py-3 md:py-4 font-medium text-sm md:text-base pr-4">{exercise.name}</td>
                          <td className="py-3 md:py-4 text-white/70 text-sm md:text-base px-2">{exercise.sets}</td>
                          <td className="py-3 md:py-4 text-white/70 text-sm md:text-base px-2">{exercise.reps}</td>
                          <td className="py-3 md:py-4 text-white/70 text-sm md:text-base pl-2">{exercise.rest}</td>
                        </motion.tr>
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
            transition={{ delay: plan.days.length * 0.1 }}
            className="card-glass p-4 md:p-6 rounded-2xl"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4">💡 Pro Tips</h3>
            <ul className="space-y-3">
              {plan.tips.map((tip, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: plan.days.length * 0.1 + index * 0.1 }}
                  className="flex gap-3"
                >
                  <span className="text-primary-purple flex-shrink-0">•</span>
                  <span className="text-white/70 text-sm md:text-base">{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
