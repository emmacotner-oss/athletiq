'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { usePlan } from '../context/PlanContext';
import { ExperienceLevel } from '../types';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';

const daysOptions = [2, 3, 4, 5, 6];
const experienceLevels: ExperienceLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export default function SchedulePage() {
  const router = useRouter();
  const { sport, customSport, goals, daysPerWeek, setDaysPerWeek, experience, setExperience } = usePlan();
  const [selectedDays, setSelectedDays] = useState(daysPerWeek);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(experience);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!sport || goals.length === 0) {
      router.push('/sport');
    }
  }, [sport, goals, router]);

  const handleGenerate = async () => {
    setDaysPerWeek(selectedDays);
    setExperience(selectedExperience);
    setIsGenerating(true);
    router.push('/generate');
  };

  if (!sport || goals.length === 0) return null;

  const displaySport = sport === 'Other' ? customSport : sport;

  return (
    <div className="min-h-screen p-4 py-8 md:py-12 max-w-5xl mx-auto">
      <BackButton />
      <ProgressBar step={3} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Customize your plan</h1>

        {/* Days per week */}
        <div className="mb-8 md:mb-12">
          <label className="block text-xs md:text-sm font-semibold uppercase tracking-wide text-white/55 mb-4">
            Days per week
          </label>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {daysOptions.map((days) => (
              <motion.button
                key={days}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDays(days)}
                className={`card-glass px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl ${
                  selectedDays === days ? 'card-selected' : ''
                }`}
              >
                {days}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Experience level */}
        <div className="mb-8 md:mb-12">
          <label className="block text-xs md:text-sm font-semibold uppercase tracking-wide text-white/55 mb-4">
            Experience level
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experienceLevels.map((level) => (
              <motion.button
                key={level}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedExperience(level)}
                className={`card-glass p-6 rounded-xl font-semibold transition-all ${
                  selectedExperience === level ? 'card-selected' : ''
                }`}
              >
                {level}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="card-glass p-4 md:p-6 rounded-2xl mb-6 md:mb-8"
        >
          <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wide text-white/55 mb-4">Summary</h3>
          <div className="space-y-2 text-sm md:text-base">
            <p>
              <span className="text-white/55">Sport:</span>{' '}
              <span className="font-semibold">{displaySport}</span>
            </p>
            <p>
              <span className="text-white/55">Goals:</span>{' '}
              <span className="font-semibold">{goals.join(', ')}</span>
            </p>
            <p>
              <span className="text-white/55">Days per week:</span>{' '}
              <span className="font-semibold">{selectedDays}</span>
            </p>
          </div>
        </motion.div>

        {/* Generate button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.5 }}
          onClick={handleGenerate}
          disabled={!selectedExperience || isGenerating}
          className="btn-gradient px-8 py-4 rounded-xl font-semibold text-base md:text-lg w-full md:w-auto relative"
          style={selectedExperience ? { boxShadow: '0 0 30px rgba(108, 99, 255, 0.5)' } : {}}
        >
          <span className="mr-2">⚡</span>
          Generate My Plan
        </motion.button>
      </motion.div>
    </div>
  );
}
