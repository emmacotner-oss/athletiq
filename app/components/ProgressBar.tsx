'use client';

interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  return (
    <div className="flex gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`h-1 flex-1 rounded-full transition-all ${
            s <= step ? 'bg-gradient-to-r from-primary-purple to-primary-blue' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  );
}
