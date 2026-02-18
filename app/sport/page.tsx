'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePlan } from '../context/PlanContext';
import { Sport } from '../types';
import BackButton from '../components/BackButton';
import ProgressBar from '../components/ProgressBar';

const sports: Sport[] = [
  'Basketball',
  'Soccer',
  'Tennis',
  'Swimming',
  'Running',
  'Football',
  'Baseball',
  'Volleyball',
  'Golf',
  'Boxing',
  'MMA',
  'Hockey',
  'Track & Field',
  'Rugby',
  'Cricket',
  'Other',
];

export default function SportPage() {
  const router = useRouter();
  const { sport, setSport, customSport, setCustomSport } = usePlan();
  const [selectedSport, setSelectedSport] = useState<Sport | null>(sport);
  const [customInput, setCustomInput] = useState(customSport);
  const [showCustomInput, setShowCustomInput] = useState(sport === 'Other');

  const handleSportSelect = (s: Sport) => {
    setSelectedSport(s);
    if (s === 'Other') {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
      setCustomInput('');
    }
  };

  const handleContinue = () => {
    if (selectedSport) {
      setSport(selectedSport);
      if (selectedSport === 'Other') {
        setCustomSport(customInput);
      }
      router.push('/goals');
    }
  };

  const canContinue = selectedSport && (selectedSport !== 'Other' || customInput.trim().length > 0);

  return (
    <div className="min-h-screen p-4 py-12 max-w-5xl mx-auto">
      <BackButton />
      <ProgressBar step={1} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12">What sport do you play?</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {sports.map((s, index) => (
            <motion.button
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => handleSportSelect(s)}
              className={`card-glass p-6 rounded-xl text-center font-semibold transition-all hover:scale-105 ${
                selectedSport === s ? 'card-selected' : ''
              }`}
            >
              {s}
            </motion.button>
          ))}
        </div>

        {showCustomInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-8"
          >
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Enter your sport..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-purple focus:outline-none transition-colors"
            />
          </motion.div>
        )}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={handleContinue}
          disabled={!canContinue}
          className="btn-gradient px-8 py-4 rounded-xl font-semibold text-lg w-full md:w-auto"
        >
          Continue →
        </motion.button>
      </motion.div>
    </div>
  );
}
