'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePlan } from '../context/PlanContext';
import { WorkoutPlan, PlanRequest } from '../types';

export default function GeneratePage() {
  const router = useRouter();
  const { sport, customSport, goals, daysPerWeek, experience, setPlan } = usePlan();
  const [loadText, setLoadText] = useState('Analyzing your sport profile...');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!sport || goals.length === 0 || !experience) {
      router.push('/sport');
      return;
    }

    const messages = [
      'Analyzing your sport profile...',
      'Designing exercise combinations...',
      'Optimizing for your goals...',
      'Finalizing your plan...',
    ];

    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i < messages.length) {
        setLoadText(messages[i]);
      }
    }, 700);

    const generatePlan = async () => {
      try {
        const requestData: PlanRequest = {
          sport: sport === 'Other' ? customSport : sport,
          goals,
          daysPerWeek,
          experience,
        };

        const response = await fetch('/api/generate-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error('Failed to generate plan');
        }

        const plan: WorkoutPlan = await response.json();
        
        clearInterval(interval);
        setPlan(plan);
        router.push('/results');
      } catch (err) {
        clearInterval(interval);
        setError('Failed to generate workout plan. Please try again.');
        console.error(err);
      }
    };

    generatePlan();

    return () => clearInterval(interval);
  }, [sport, customSport, goals, daysPerWeek, experience, setPlan, router]);

  if (error) {
    return (
      <div style={{ textAlign: 'center', paddingTop: 80, maxWidth: 500, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>⚠️</div>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Oops!</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{error}</p>
        <button
          onClick={() => router.push('/schedule')}
          style={{
            padding: '12px 32px',
            fontSize: 15,
            fontWeight: 700,
            border: 'none',
            borderRadius: 12,
            background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: 80, maxWidth: 500, margin: '0 auto', padding: '32px 24px' }}>
      <div style={{ position: 'relative', width: 72, height: 72, margin: '0 auto 28px' }}>
        <div
          className="spinner"
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: '3px solid rgba(108,99,255,0.15)',
            borderTopColor: '#6c63ff',
          }}
        />
        <div
          className="spinner"
          style={{
            position: 'absolute',
            inset: 8,
            borderRadius: '50%',
            border: '3px solid rgba(59,130,246,0.1)',
            borderBottomColor: '#3b82f6',
            animation: 'spin 1.2s linear infinite reverse',
          }}
        />
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
        Building your plan...
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, transition: 'all 0.3s' }}>
        {loadText}
      </p>

      <div style={{ marginTop: 32, display: 'flex', gap: 6, justifyContent: 'center' }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="pulse-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#6c63ff',
              opacity: 0.3,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
