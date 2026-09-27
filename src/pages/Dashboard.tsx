import React from 'react';
import { topics } from '../data/topics';
import { Link } from 'react-router-dom';
import { IconRenderer } from '../components/ui/IconRenderer';
import { useProgress } from '../context/ProgressContext';
import { Target, CheckCircle2, Bookmark } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { completedIds, bookmarkedIds } = useProgress();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">ECE Interview Hub</h1>
        <p className="text-xl text-emerald-50 max-w-2xl">
          Prepare smarter. Understand the concepts. Crack technical interviews.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
            <CheckCircle2 className="text-emerald-600 dark:text-emerald-400" size={28} />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Questions Completed</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{completedIds.length}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
            <Bookmark className="text-blue-600 dark:text-blue-400" size={28} />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Bookmarked</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{bookmarkedIds.length}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
            <Target className="text-purple-600 dark:text-purple-400" size={28} />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Interview Readiness</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {completedIds.length > 0 ? Math.min(Math.round((completedIds.length / 100) * 100), 100) : 0}%
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Explore Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topics.map(topic => (
            <Link 
              key={topic.id} 
              to={`/topic/${topic.id}`}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <IconRenderer name={topic.icon} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{topic.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
