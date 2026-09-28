import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://ozlgnuvxubngwgxmzsfz.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_HWV0iJpl32JFppdSz3682w_W5vufL2x';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { signalsCommQuestions } from '../scratch/signalsComm.ts';
import { controlPowerQuestions } from '../scratch/controlPower.ts';
import { microwaveSatQuestions } from '../scratch/microwaveSat.ts';
import { networkDevicesQuestions } from '../scratch/networkDevices.ts';

const allQuestions = [
  ...signalsCommQuestions,
  ...controlPowerQuestions,
  ...microwaveSatQuestions,
  ...networkDevicesQuestions,
];

async function seed() {
  console.log(`Starting seed of ${allQuestions.length} IndiaBix-inspired questions to Supabase...`);
  
  const formattedData = allQuestions.map(q => ({
    id: q.id,
    topic_id: q.topicId,
    title: q.title,
    short_answer: q.answer.shortAnswer,
    detailed_explanation: q.answer.detailedExplanation,
    interview_explanation: q.answer.interviewExplanation,
    key_points: q.answer.keyPoints,
    example: q.answer.example,
    follow_up_questions: q.answer.followUpQuestions,
    difficulty: q.difficulty,
    badges: q.badges,
    interview_tip: q.interviewTip
  }));

  const batchSize = 50;
  for (let i = 0; i < formattedData.length; i += batchSize) {
    const batch = formattedData.slice(i, i + batchSize);
    
    let success = false;
    let retries = 3;
    
    while (!success && retries > 0) {
      const { data, error } = await supabase.from('questions').upsert(batch);
      
      if (error) {
        console.error(`Error batch ${i / batchSize + 1} (${retries} retries left):`, error.message);
        retries--;
        await new Promise(res => setTimeout(res, 2000));
      } else {
        console.log(`Inserted batch ${i / batchSize + 1}`);
        success = true;
      }
    }
    
    if (!success) {
      console.error(`Failed batch ${i / batchSize + 1} after 3 retries.`);
    }
  }
  
  console.log('Seed complete!');
}

seed();
