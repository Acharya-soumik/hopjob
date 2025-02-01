export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  title: string;
  difficulty: Difficulty;
  patterns: string[];
  companies: string[];
  solution: string;
  hints: string[];
  created_at: string;
  updated_at: string;
}

export interface Submission {
  id: string;
  user_id: string;
  question_id: string;
  code: string;
  language: string;
  status: string;
  runtime_ms: number;
  memory_kb: number;
  submitted_at: string;
}

export interface Database {
  public: {
    Tables: {
      questions: {
        Row: Question;
        Insert: Omit<Question, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Question, 'id'>>;
      };
      submissions: {
        Row: Submission;
        Insert: Omit<Submission, 'id' | 'submitted_at'>;
        Update: Partial<Omit<Submission, 'id'>>;
      };
    };
  };
} 