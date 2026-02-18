'use client';

import { useRouter, usePathname } from 'next/navigation';
import { usePlan } from '../context/PlanContext';
import ProgressBar from './ProgressBar';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { reset } = usePlan();

  const handleLogoClick = () => {
    reset();
    router.push('/');
  };

  const getStep = () => {
    if (pathname === '/sport') return 1;
    if (pathname === '/goals') return 2;
    if (pathname === '/schedule' || pathname === '/generate') return 3;
    return 0;
  };

  const step = getStep();
  const showProgress = step > 0 && step < 4 && pathname !== '/results';
  const showNewPlanButton = pathname === '/results';

  return (
    <nav style={{
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      zIndex: 10,
      backdropFilter: 'blur(10px)',
    }}>
      <div
        onClick={handleLogoClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          cursor: 'pointer',
        }}
      >
        <div style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          boxShadow: '0 4px 15px rgba(108,99,255,0.3)',
        }}>
          ⚡
        </div>
        <span style={{
          fontSize: 19,
          fontWeight: 800,
          letterSpacing: '-0.5px',
        }}>
          AthletIQ
        </span>
      </div>

      {showProgress && <ProgressBar step={step} />}

      {showNewPlanButton && (
        <button
          onClick={handleLogoClick}
          style={{
            padding: '8px 20px',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          + New Plan
        </button>
      )}
    </nav>
  );
}
