'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Sport, ExperienceLevel, WorkoutPlan } from '../types';

interface PlanContextType {
  sport: Sport | null;
  setSport: (sport: Sport | null) => void;
  customSport: string;
  setCustomSport: (sport: string) => void;
  goals: string[];
  setGoals: (goals: string[]) => void;
  daysPerWeek: number;
  setDaysPerWeek: (days: number) => void;
  experience: ExperienceLevel | null;
  setExperience: (level: ExperienceLevel | null) => void;
  plan: WorkoutPlan | null;
  setPlan: (plan: WorkoutPlan | null) => void;
  reset: () => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [sport, setSport] = useState<Sport | null>(null);
  const [customSport, setCustomSport] = useState('');
  const [goals, setGoals] = useState<string[]>([]);
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [experience, setExperience] = useState<ExperienceLevel | null>(null);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);

  const reset = () => {
    setSport(null);
    setCustomSport('');
    setGoals([]);
    setDaysPerWeek(3);
    setExperience(null);
    setPlan(null);
  };

  return (
    <PlanContext.Provider
      value={{
        sport,
        setSport,
        customSport,
        setCustomSport,
        goals,
        setGoals,
        daysPerWeek,
        setDaysPerWeek,
        experience,
        setExperience,
        plan,
        setPlan,
        reset,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
}
