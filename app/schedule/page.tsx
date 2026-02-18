'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { usePlan } from '../context/PlanContext';
import { ExperienceLevel } from '../types';

const daysOptions = [2, 3, 4, 5, 6];
const experienceLevels: Array<{ level: ExperienceLevel; icon: string }> = [
  { level: 'Beginner', icon: '🌱' },
  { level: 'Intermediate', icon: '🔥' },
  { level: 'Advanced', icon: '💎' },
];

export default function SchedulePage() {
  const router = useRouter();
  const { sport, customSport, goals, daysPerWeek, setDaysPerWeek, experience, setExperience } = usePlan();
  const [selectedDays, setSelectedDays] = useState(daysPerWeek);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(experience);

  useEffect(() => {
    if (!sport || goals.length === 0) {
      router.push('/sport');
    }
  }, [sport, goals, router]);

  const handleGenerate = () => {
    if (selectedExperience) {
      setDaysPerWeek(selectedDays);
      setExperience(selectedExperience);
      router.push('/generate');
    }
  };

  if (!sport || goals.length === 0) return null;

  const displaySport = sport === 'Other' ? customSport : sport;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px' }}>
      <button
        onClick={() => router.push('/goals')}
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
        Customize your plan
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: 15 }}>
        Set your schedule and experience level.
      </p>

      <label style={{
        fontSize: 11,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.35)',
        letterSpacing: '1.5px',
        display: 'block',
        marginBottom: 10,
      }}>
        DAYS PER WEEK
      </label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
        {daysOptions.map((days) => (
          <button
            key={days}
            onClick={() => setSelectedDays(days)}
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 700,
              padding: '14px 0',
              borderRadius: 12,
              cursor: 'pointer',
              border: selectedDays === days ? '2px solid #6c63ff' : '2px solid rgba(255,255,255,0.08)',
              background: selectedDays === days ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
              color: selectedDays === days ? '#fff' : 'rgba(255,255,255,0.6)',
              transition: 'all 0.25s ease',
            }}
          >
            {days}
          </button>
        ))}
      </div>

      <label style={{
        fontSize: 11,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.35)',
        letterSpacing: '1.5px',
        display: 'block',
        marginBottom: 10,
      }}>
        EXPERIENCE LEVEL
      </label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {experienceLevels.map(({ level, icon }) => (
          <button
            key={level}
            onClick={() => setSelectedExperience(level)}
            style={{
              flex: 1,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '16px 0',
              borderRadius: 12,
              cursor: 'pointer',
              border: selectedExperience === level ? '2px solid #6c63ff' : '2px solid rgba(255,255,255,0.08)',
              background: selectedExperience === level ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
              color: selectedExperience === level ? '#fff' : 'rgba(255,255,255,0.6)',
              fontSize: 14,
              fontWeight: 600,
              transition: 'all 0.25s ease',
            }}
          >
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{level}</span>
          </button>
        ))}
      </div>

      <div style={{
        padding: 20,
        borderRadius: 16,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        marginBottom: 24,
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '1.5px',
          marginBottom: 14,
        }}>
          PLAN SUMMARY
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Sport</span>
            <span style={{ fontWeight: 700, color: '#fff' }}>{displaySport}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Frequency</span>
            <span style={{ fontWeight: 700, color: '#fff' }}>{selectedDays}x / week</span>
          </div>
          <div style={{
            gridColumn: '1 / -1',
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Goals</span>
            {goals.map((g) => (
              <span
                key={g}
                style={{
                  padding: '4px 10px',
                  borderRadius: 8,
                  background: 'rgba(108,99,255,0.12)',
                  color: '#6c63ff',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!selectedExperience}
        style={{
          width: '100%',
          padding: '16px',
          fontSize: 16,
          fontWeight: 700,
          border: 'none',
          borderRadius: 14,
          background: selectedExperience ? 'linear-gradient(135deg, #6c63ff, #3b82f6)' : 'rgba(255,255,255,0.06)',
          color: selectedExperience ? '#fff' : 'rgba(255,255,255,0.2)',
          cursor: selectedExperience ? 'pointer' : 'default',
          boxShadow: selectedExperience ? '0 8px 32px rgba(108,99,255,0.35)' : 'none',
          letterSpacing: '-0.3px',
          transition: 'all 0.25s',
        }}
      >
        ⚡ Generate My Plan
      </button>
    </div>
  );
}
