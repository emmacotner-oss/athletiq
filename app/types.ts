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

export const SPORTS_WITH_ICONS: Array<{ name: Sport; icon: string }> = [
  { name: 'Basketball', icon: '🏀' },
  { name: 'Soccer', icon: '⚽' },
  { name: 'Tennis', icon: '🎾' },
  { name: 'Swimming', icon: '🏊' },
  { name: 'Running', icon: '🏃' },
  { name: 'Football', icon: '🏈' },
  { name: 'Baseball', icon: '⚾' },
  { name: 'Volleyball', icon: '🏐' },
  { name: 'Golf', icon: '⛳' },
  { name: 'Boxing', icon: '🥊' },
  { name: 'MMA', icon: '🥋' },
  { name: 'Hockey', icon: '🏒' },
  { name: 'Track & Field', icon: '🏅' },
  { name: 'Rugby', icon: '🏉' },
  { name: 'Cricket', icon: '🏏' },
  { name: 'Other', icon: '➕' },
];

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
  Volleyball: [
    'Vertical leap',
    'Serving power',
    'Setting accuracy',
    'Blocking',
    'Agility',
    'Endurance',
  ],
  Golf: [
    'Driving distance',
    'Iron accuracy',
    'Short game',
    'Putting',
    'Flexibility',
    'Mental focus',
  ],
  Boxing: [
    'Punching power',
    'Footwork',
    'Speed',
    'Endurance',
    'Defense',
    'Combinations',
  ],
  MMA: [
    'Striking',
    'Grappling',
    'Cardio',
    'Takedowns',
    'Flexibility',
    'Fight IQ',
  ],
  Hockey: [
    'Skating speed',
    'Stick handling',
    'Shooting accuracy',
    'Endurance',
    'Body checking',
    'Agility',
  ],
  'Track & Field': [
    'Sprint speed',
    'Explosive power',
    'Endurance',
    'Technique',
    'Flexibility',
    'Mental toughness',
  ],
  Rugby: [
    'Tackling',
    'Speed',
    'Passing',
    'Endurance',
    'Strength',
    'Agility',
  ],
  Cricket: [
    'Batting technique',
    'Bowling accuracy',
    'Fielding',
    'Speed',
    'Endurance',
    'Mental focus',
  ],
  Other: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
  Default: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Power', 'Mental toughness'],
};
