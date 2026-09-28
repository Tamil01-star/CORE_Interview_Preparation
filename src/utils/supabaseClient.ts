import { createClient } from '@supabase/supabase-js';
import type { Question } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchQuestionsFromSupabase = async (topicId?: string): Promise<Question[]> => {
  const allRows: any[] = [];
  const pageSize = 1000;
  let offset = 0;

  while (true) {
    let query = supabase.from('questions').select('*').range(offset, offset + pageSize - 1);
    
    if (topicId) {
      query = query.eq('topic_id', topicId);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching questions from Supabase:', error);
      break;
    }

    if (!data || data.length === 0) break;
    allRows.push(...data);
    if (data.length < pageSize) break;
    offset += data.length;
  }

  return allRows.map(row => ({
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

