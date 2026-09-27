import { createClient } from '@supabase/supabase-js';
import type { Question } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchQuestionsFromSupabase = async (topicId?: string): Promise<Question[]> => {
  let query = supabase.from('questions').select('*');
  
  if (topicId) {
    query = query.eq('topic_id', topicId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching questions from Supabase:', error);
    return [];
  }

  return (data || []).map(row => ({
    id: row.id,
    topicId: row.topic_id,
    title: row.title,
    answer: {
      shortAnswer: row.short_answer,
      detailedExplanation: row.detailed_explanation,
      interviewExplanation: row.interview_explanation,
      keyPoints: row.key_points,
      example: row.example,
      followUpQuestions: row.follow_up_questions,
    },
    difficulty: row.difficulty,
    badges: row.badges,
    interviewTip: row.interview_tip,
  }));
};

