'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px', textAlign: 'center', paddingTop: 48 }}>
      <div style={{
        width: 80,
        height: 80,
        borderRadius: 24,
        background: 'rgba(108,99,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        margin: '0 auto 28px',
        border: '1px solid rgba(108,99,255,0.15)',
      }}>
        🏆
      </div>

      <h1 style={{
        fontSize: 48,
        fontWeight: 800,
        lineHeight: 1.08,
        marginBottom: 16,
        background: 'linear-gradient(135deg, #ffffff 20%, #6c63ff 80%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-1.5px',
      }}>
        Train Smarter.<br />Play Better.
      </h1>

      <p style={{
        fontSize: 17,
        color: 'rgba(255,255,255,0.45)',
        maxWidth: 440,
        margin: '0 auto 44px',
        lineHeight: 1.7,
      }}>
        AI-powered workout plans tailored to your sport, goals, and schedule. Level up your game in minutes.
      </p>

      <button
        onClick={() => router.push('/sport')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,99,255,0.5), inset 0 1px 0 rgba(255,255,255,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(108,99,255,0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
        }}
        style={{
          padding: '16px 56px',
          fontSize: 16,
          fontWeight: 700,
          border: 'none',
          borderRadius: 14,
          background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(108,99,255,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          transition: 'all 0.2s',
          letterSpacing: '-0.3px',
        }}
      >
        Build My Plan →
      </button>

      <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {[['🎯', 'Goal-focused'], ['📅', 'Flexible schedule'], ['🤖', 'AI-powered'], ['📊', 'Progressive']].map(([ico, txt]) => (
          <div key={txt} style={{ textAlign: 'center' }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              margin: '0 auto 8px',
            }}>
              {ico}
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{txt}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 64,
        padding: 24,
        borderRadius: 16,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['🏀', '⚽', '🎾', '🏊', '🏈', '🥊', '⛳', '🏒'].map(e => (
            <span key={e} style={{ fontSize: 28, opacity: 0.5 }}>{e}</span>
          ))}
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 12, marginBottom: 0 }}>
          Supporting 15+ sports with tailored training plans
        </p>
      </div>
    </div>
  );
}
