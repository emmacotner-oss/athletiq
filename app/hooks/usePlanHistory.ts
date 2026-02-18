'use client';

import { useState, useEffect } from 'react';
import { WorkoutPlan } from '../types';

const STORAGE_KEY = 'athletiq_plan_history';
const MAX_HISTORY = 5;

interface PlanHistoryItem {
  plan: WorkoutPlan;
  timestamp: number;
  sport: string;
  goals: string[];
  daysPerWeek: number;
  experience: string;
}

export function usePlanHistory() {
  const [history, setHistory] = useState<PlanHistoryItem[]>([]);

  useEffect(() => {
    // Load history from localStorage
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setHistory(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading plan history:', error);
      }
    }
  }, []);

  const savePlan = (
    plan: WorkoutPlan,
    sport: string,
    goals: string[],
    daysPerWeek: number,
    experience: string
  ) => {
    const newItem: PlanHistoryItem = {
      plan,
      sport,
      goals,
      daysPerWeek,
      experience,
      timestamp: Date.now(),
    };

    const newHistory = [newItem, ...history].slice(0, MAX_HISTORY);
    setHistory(newHistory);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      } catch (error) {
        console.error('Error saving plan history:', error);
      }
    }
  };

  const clearHistory = () => {
    setHistory([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return { history, savePlan, clearHistory };
}
