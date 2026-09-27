import React, { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { QuestionCard } from '../components/ui/QuestionCard';
import type { Question } from '../types';
import { fetchQuestionsFromSupabase } from '../utils/supabaseClient';
import { Bookmark, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

export const Bookmarks: React.FC = () => {
  const { bookmarkedIds } = useProgress();
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<{question: Question, topicName: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookmarks = async () => {
      setLoading(true);
      try {
        const allQuestions = await fetchQuestionsFromSupabase();

        const found = allQuestions
          .filter(q => bookmarkedIds.includes(q.id))
          .map(q => ({
            question: q,
            topicName: topics.find(t => t.id === q.topicId)?.name || 'Unknown Topic'
          }));

        setBookmarkedQuestions(found);
      } catch (error) {
        console.error("Failed to load bookmarks", error);
      } finally {
        setLoading(false);
      }
    };

    if (bookmarkedIds.length > 0) {
      loadBookmarks();
    } else {
      setBookmarkedQuestions([]);
      setLoading(false);
    }
  }, [bookmarkedIds]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
        <ArrowLeft size={20} /> Back to Dashboard
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-6">
        <div className="bg-blue-100/50 dark:bg-blue-900/30 p-4 rounded-xl shrink-0">
          <Bookmark size={40} className="text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">My Bookmarks</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Review all the questions you have saved for later.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
            {bookmarkedQuestions.length} Questions Saved
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center p-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : bookmarkedQuestions.length > 0 ? (
          bookmarkedQuestions.map(({question, topicName}) => (
            <QuestionCard 
              key={question.id} 
              question={question} 
              showTopic={true}
              topicName={topicName}
              defaultExpanded={true}
            />
          ))
        ) : (
          <div className="text-center p-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <Bookmark size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No bookmarks yet</h3>
            <p className="text-slate-500">Explore topics and bookmark questions you want to revise later.</p>
          </div>
        )}
      </div>
    </div>
  );
};
