import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Since we are running in node, we'll manually load the .env
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://ozlgnuvxubngwgxmzsfz.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_HWV0iJpl32JFppdSz3682w_W5vufL2x';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// We need to read the ts files, but since they are ts, we can just parse the arrays using a regex or require the compiled js.
// A simpler way for this seed script is just to use vite-node or ts-node.
// Since we don't have ts-node, we'll just advise the user to run it via vite-node.

import { coreEceQuestions } from '../src/data/coreEce.ts';
import { digitalElectronicsQuestions } from '../src/data/digitalElectronics.ts';
import { analogElectronicsQuestions } from '../src/data/analogElectronics.ts';
import { circuitTheoryQuestions } from '../src/data/circuitTheory.ts';
import { embeddedCQuestions } from '../src/data/embeddedC.ts';
import { embeddedSystemsQuestions } from '../src/data/embeddedSystems.ts';
import { microcontrollersQuestions } from '../src/data/microcontrollers.ts';
import { semiconductorsQuestions } from '../src/data/semiconductors.ts';
import { sensorsQuestions } from '../src/data/sensors.ts';
import { verilogQuestions } from '../src/data/verilog.ts';
import { vlsiQuestions } from '../src/data/vlsi.ts';

const allQuestions = [
  ...coreEceQuestions,
  ...digitalElectronicsQuestions,
  ...analogElectronicsQuestions,
  ...circuitTheoryQuestions,
  ...embeddedCQuestions,
  ...embeddedSystemsQuestions,
  ...microcontrollersQuestions,
  ...semiconductorsQuestions,
  ...sensorsQuestions,
  ...verilogQuestions,
  ...vlsiQuestions
];

async function seed() {
  console.log(`Starting seed of ${allQuestions.length} questions to Supabase...`);
  
  // Convert arrays to correct format
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

  // Batch insert
  const batchSize = 50;
  for (let i = 0; i < formattedData.length; i += batchSize) {
    const batch = formattedData.slice(i, i + batchSize);
    const { data, error } = await supabase.from('questions').upsert(batch);
    
    if (error) {
      console.error('Error inserting batch:', error.message);
    } else {
      console.log(`Inserted batch ${i / batchSize + 1}`);
    }
  }
  
  console.log('Seed complete!');
}

seed();
