import React, { useState, useEffect } from 'react';
import { QuestionCard } from '../components/ui/QuestionCard';
import type { Question } from '../types';
import { fetchQuestionsFromSupabase } from '../utils/supabaseClient';
import { Target, ArrowRight, Play } from 'lucide-react';
import { topics } from '../data/topics';

export const InterviewMode: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const allQuestions = await fetchQuestionsFromSupabase();

        // Shuffle questions
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled);
      } catch (error) {
        console.error("Failed to load interview mode data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop or end
      setCurrentIndex(0);
    }
  };

  const getTopicName = (topicId: string) => {
    return topics.find(t => t.id === topicId)?.name || 'Unknown Topic';
  };

  if (loading) {
    return (
      <div className="flex justify-center p-20">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="p-8 text-center text-slate-500">No questions available.</div>;
  }

  if (!isActive) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center space-y-6 animate-in fade-in duration-500">
        <div className="bg-purple-100 dark:bg-purple-900/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Target size={48} className="text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Interview Mode</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Practice answering questions as if you were in a real interview. Questions are randomized across all topics.
        </p>
        <div className="pt-8">
          <button 
            onClick={() => setIsActive(true)}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/30"
          >
            <Play size={24} /> Start Interview Practice
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="text-sm font-medium text-slate-500">
          Question {currentIndex + 1} of {questions.length}
        </div>
        <button 
          onClick={handleNext}
          className="flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
        >
          Next Question <ArrowRight size={18} />
        </button>
      </div>

      <div key={currentQuestion.id}>
        <QuestionCard 
          question={currentQuestion} 
          showTopic={true}
          topicName={getTopicName(currentQuestion.topicId)}
          defaultExpanded={false}
        />
      </div>
    </div>
  );
};
