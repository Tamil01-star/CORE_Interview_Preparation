export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Badge = 'Frequently Asked' | 'Important' | 'Conceptual' | 'Practical' | 'Coding' | 'Numerical';

export interface Question {
  id: string;
  topicId: string;
  title: string;
  answer: {
    shortAnswer: string;
    detailedExplanation?: string;
    interviewExplanation: string;
    keyPoints: string[];
    example?: string;
    followUpQuestions?: string[];
  };
  difficulty: Difficulty;
  badges: Badge[];
  interviewTip?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string; 
  questionCount?: number;
}
