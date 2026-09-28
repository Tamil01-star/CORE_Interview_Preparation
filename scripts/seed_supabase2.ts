import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://ozlgnuvxubngwgxmzsfz.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_HWV0iJpl32JFppdSz3682w_W5vufL2x';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { coreEceQuestions2 } from '../scratch/coreEce2.ts';
import { digitalElectronicsQuestions2 } from '../scratch/digitalElectronics2.ts';
import { analogElectronicsQuestions2 } from '../scratch/analogElectronics2.ts';
import { circuitTheoryQuestions2 } from '../scratch/circuitTheory2.ts';
import { embeddedCQuestions2 } from '../scratch/embeddedC2.ts';
import { embeddedSystemsQuestions2 } from '../scratch/embeddedSystems2.ts';
import { microcontrollersQuestions2 } from '../scratch/microcontrollers2.ts';
import { semiconductorsQuestions2 } from '../scratch/semiconductors2.ts';
import { sensorsQuestions2 } from '../scratch/sensors2.ts';
import { verilogQuestions2 } from '../scratch/verilog2.ts';
import { vlsiQuestions2 } from '../scratch/vlsi2.ts';

const allQuestions = [
  ...coreEceQuestions2,
  ...digitalElectronicsQuestions2,
  ...analogElectronicsQuestions2,
  ...circuitTheoryQuestions2,
  ...embeddedCQuestions2,
  ...embeddedSystemsQuestions2,
  ...microcontrollersQuestions2,
  ...semiconductorsQuestions2,
  ...sensorsQuestions2,
  ...verilogQuestions2,
  ...vlsiQuestions2
];

async function seed() {
  console.log(`Starting seed of ${allQuestions.length} NEW questions to Supabase...`);
  
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

  const missingData = formattedData.slice(100, 250);
  const batchSize = 50;
  for (let i = 0; i < missingData.length; i += batchSize) {
    const batch = missingData.slice(i, i + batchSize);
    
    let success = false;
    let retries = 3;
    
    while (!success && retries > 0) {
      const { data, error } = await supabase.from('questions').insert(batch);
      
      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1} (${retries} retries left):`, error.message);
        retries--;
        await new Promise(res => setTimeout(res, 2000)); // wait 2 seconds before retry
      } else {
        console.log(`Inserted batch ${i / batchSize + 1}`);
        success = true;
      }
    }
    
    if (!success) {
      console.error(`Failed to insert batch ${i / batchSize + 1} after 3 retries.`);
    }
  }
  
  console.log('Seed complete!');
}

seed();
