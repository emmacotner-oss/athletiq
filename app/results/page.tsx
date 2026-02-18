'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePlan } from '../context/PlanContext';

export default function ResultsPage() {
  const router = useRouter();
  const { plan, daysPerWeek, experience, reset } = usePlan();
  const [openDay, setOpenDay] = useState(0);

  useEffect(() => {
    if (!plan) {
      router.push('/sport');
    }
  }, [plan, router]);

  if (!plan) return null;

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{
            padding: '6px 12px',
            borderRadius: 8,
            background: 'rgba(108,99,255,0.12)',
            color: '#6c63ff',
            fontSize: 12,
            fontWeight: 700,
          }}>
            AI GENERATED
          </div>
        </div>
        <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 6, letterSpacing: '-0.5px' }}>
          {plan.title}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
          {plan.weeks}-week program · {daysPerWeek} days/week · {experience}
        </p>
      </div>

      {/* Workout Days */}
      {plan.days.map((day, i) => (
        <div
          key={i}
          style={{
            marginBottom: 12,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.06)',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <button
            onClick={() => setOpenDay(openDay === i ? -1 : i)}
            style={{
              width: '100%',
              padding: '16px 20px',
              background: openDay === i ? 'rgba(108,99,255,0.08)' : 'transparent',
              border: 'none',
              borderBottom: openDay === i ? '1px solid rgba(255,255,255,0.05)' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(59,130,246,0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 800,
                color: '#6c63ff',
              }}>
                {i + 1}
              </div>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{day.day}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                {day.exercises.length} exercises
              </span>
              <span style={{
                transform: openDay === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
                color: 'rgba(255,255,255,0.3)',
              }}>
                ▼
              </span>
            </div>
          </button>

          {openDay === i && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 70px 90px 65px',
                padding: '10px 20px',
                fontSize: 11,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '1px',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}>
                <span>EXERCISE</span>
                <span>SETS</span>
                <span>REPS</span>
                <span>REST</span>
              </div>
              {day.exercises.map((ex, j) => (
                <div
                  key={j}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 70px 90px 65px',
                    padding: '13px 20px',
                    borderBottom: j < day.exercises.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                    fontSize: 14,
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{ex.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{ex.sets}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{ex.reps}</span>
                  <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: 13 }}>{ex.rest}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Coaching Tips */}
      <div style={{
        marginTop: 24,
        padding: 20,
        borderRadius: 16,
        background: 'rgba(108,99,255,0.05)',
        border: '1px solid rgba(108,99,255,0.12)',
      }}>
        <div style={{
          fontWeight: 700,
          marginBottom: 12,
          fontSize: 15,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          💡 Coaching Tips
        </div>
        {plan.tips.map((t, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 10,
              marginBottom: i < plan.tips.length - 1 ? 10 : 0,
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: '#6c63ff', fontWeight: 700 }}>·</span>
            <span>{t}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <button
          onClick={() => window.print()}
          style={{
            flex: 1,
            padding: '14px',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.03)',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          📄 Print / PDF
        </button>
        <button
          onClick={() => {
            reset();
            router.push('/');
          }}
          style={{
            flex: 1,
            padding: '14px',
            borderRadius: 12,
            border: 'none',
            background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          ⚡ New Plan
        </button>
      </div>
    </div>
  );
}
