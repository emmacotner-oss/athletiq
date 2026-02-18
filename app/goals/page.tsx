'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { usePlan } from '../context/PlanContext';
import { SPORT_GOALS } from '../types';

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

  const displaySport = sport === 'Other' ? customSport : sport;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px' }}>
      <button
        onClick={() => router.push('/sport')}
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.35)',
          cursor: 'pointer',
          fontSize: 13,
          marginBottom: 20,
          fontWeight: 600,
        }}
      >
        ← Back
      </button>

      <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 6, letterSpacing: '-0.5px' }}>
        What do you want to improve?
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontSize: 15 }}>
        Pick up to 3 focus areas for your <span style={{ color: '#6c63ff', fontWeight: 600 }}>{displaySport}</span> training.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {availableGoals.map((goal) => {
          const isSelected = selectedGoals.includes(goal);
          const isDisabled = !isSelected && selectedGoals.length >= 3;

          return (
            <button
              key={goal}
              onClick={() => handleGoalToggle(goal)}
              disabled={isDisabled}
              style={{
                padding: '14px 20px',
                borderRadius: 12,
                cursor: isDisabled ? 'default' : 'pointer',
                border: isSelected ? '2px solid #6c63ff' : '2px solid rgba(255,255,255,0.08)',
                background: isSelected ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
                color: isSelected ? '#fff' : isDisabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)',
                fontSize: 14,
                fontWeight: 600,
                transition: 'all 0.25s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <span>{goal}</span>
              <span style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelected ? '#6c63ff' : 'rgba(255,255,255,0.06)',
                fontSize: 12,
                transition: 'all 0.2s',
              }}>
                {isSelected ? '✓' : ''}
              </span>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
        {selectedGoals.length}/3 selected
      </div>

      <button
        onClick={handleContinue}
        disabled={selectedGoals.length === 0}
        style={{
          marginTop: 20,
          width: '100%',
          padding: '15px',
          fontSize: 15,
          fontWeight: 700,
          border: 'none',
          borderRadius: 14,
          background: selectedGoals.length > 0 ? 'linear-gradient(135deg, #6c63ff, #3b82f6)' : 'rgba(255,255,255,0.06)',
          color: selectedGoals.length > 0 ? '#fff' : 'rgba(255,255,255,0.2)',
          cursor: selectedGoals.length > 0 ? 'pointer' : 'default',
          transition: 'all 0.25s',
        }}
      >
        Continue →
      </button>
    </div>
  );
}
