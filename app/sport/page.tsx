'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePlan } from '../context/PlanContext';
import { Sport, SPORTS_WITH_ICONS } from '../types';

export default function SportPage() {
  const router = useRouter();
  const { sport, setSport, customSport, setCustomSport } = usePlan();
  const [selectedSport, setSelectedSport] = useState<Sport | null>(sport);
  const [customInput, setCustomInput] = useState(customSport);

  const handleSportSelect = (s: Sport) => {
    setSelectedSport(s);
    if (s !== 'Other') {
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
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px' }}>
      <button
        onClick={() => router.push('/')}
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
        What sport do you play?
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontSize: 15 }}>
        Select your primary sport to get started.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {SPORTS_WITH_ICONS.map((s) => (
          <button
            key={s.name}
            onClick={() => handleSportSelect(s.name)}
            style={{
              padding: '16px 8px',
              borderRadius: 12,
              cursor: 'pointer',
              border: selectedSport === s.name ? '2px solid #6c63ff' : '2px solid rgba(255,255,255,0.08)',
              background: selectedSport === s.name ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
              color: selectedSport === s.name ? '#fff' : 'rgba(255,255,255,0.6)',
              fontSize: 14,
              fontWeight: 600,
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 24 }}>{s.icon}</span>
            <span style={{ fontSize: 12 }}>{s.name}</span>
          </button>
        ))}
      </div>

      {selectedSport === 'Other' && (
        <input
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="Enter your sport..."
          onFocus={(e) => e.currentTarget.style.borderColor = '#6c63ff'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          style={{
            width: '100%',
            marginTop: 12,
            padding: '14px 16px',
            borderRadius: 12,
            border: '2px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)',
            color: '#fff',
            fontSize: 15,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      )}

      <button
        onClick={handleContinue}
        disabled={!canContinue}
        style={{
          marginTop: 28,
          width: '100%',
          padding: '15px',
          fontSize: 15,
          fontWeight: 700,
          border: 'none',
          borderRadius: 14,
          background: canContinue ? 'linear-gradient(135deg, #6c63ff, #3b82f6)' : 'rgba(255,255,255,0.06)',
          color: canContinue ? '#fff' : 'rgba(255,255,255,0.2)',
          cursor: canContinue ? 'pointer' : 'default',
          transition: 'all 0.25s',
        }}
      >
        Continue →
      </button>
    </div>
  );
}
