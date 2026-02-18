export type Sport = 
  | 'Basketball'
  | 'Soccer'
  | 'Tennis'
  | 'Swimming'
  | 'Running'
  | 'Football'
  | 'Baseball'
  | 'Volleyball'
  | 'Golf'
  | 'Boxing'
  | 'MMA'
  | 'Hockey'
  | 'Track & Field'
  | 'Rugby'
  | 'Cricket'
  | 'Other';

export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}

export interface WorkoutDay {
  day: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  title: string;
  weeks: number;
  days: WorkoutDay[];
  tips: string[];
}

export interface PlanRequest {
  sport: string;
  goals: string[];
  daysPerWeek: number;
  experience: ExperienceLevel;
}

export const SPORT_GOALS: Record<Sport | 'Default', string[]> = {
  Basketball: [
    'Shooting accuracy',
    'Ball handling',
    'Vertical leap',
    'Speed & agility',
    'Defensive skills',
    'Court vision',
    'Endurance',
  ],
  Soccer: [
    'Dribbling',
    'Shooting power',
    'Speed & agility',
    'Passing accuracy',
    'Stamina',
    'Defensive positioning',
    'Header accuracy',
  ],
  Tennis: [
    'Serve power',
    'Footwork',
    'Backhand',
    'Forehand',
    'Net play',
    'Endurance',
    'Mental toughness',
  ],
  Swimming: [
    'Sprint speed',
    'Endurance',
    'Stroke technique',
    'Flip turns',
    'Breathing efficiency',
    'Upper body power',
  ],
  Running: [
    'Speed (sprints)',
    'Endurance (distance)',
    'Hill running',
    'Race pace',
    'Recovery',
    'Form & efficiency',
  ],
  Football: [
    'Arm strength',
    'Speed & agility',
    'Tackling',
    'Route running',
    'Explosiveness',
    'Endurance',
  ],
  Baseball: [
    'Batting power',
    'Throwing accuracy',
    'Sprint speed',
    'Fielding',
    'Pitching velocity',
    'Reaction time',
  ],
  Volleyball: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Golf: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Boxing: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  MMA: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Hockey: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  'Track & Field': ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Rugby: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Cricket: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Other: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Default: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
};
