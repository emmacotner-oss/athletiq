'use client';

interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 700,
            background: i < step 
              ? 'linear-gradient(135deg, #6c63ff, #3b82f6)' 
              : i === step 
                ? 'rgba(108,99,255,0.2)' 
                : 'rgba(255,255,255,0.06)',
            color: i <= step ? '#fff' : 'rgba(255,255,255,0.3)',
            border: i === step ? '2px solid #6c63ff' : '2px solid transparent',
          }}>
            {i < step ? '✓' : i}
          </div>
          {i < 3 && (
            <div style={{
              width: 24,
              height: 2,
              background: i < step ? '#6c63ff' : 'rgba(255,255,255,0.08)',
              borderRadius: 1,
            }} />
          )}
        </div>
      ))}
    </div>
  );
}
