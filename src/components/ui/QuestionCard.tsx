import React, { useState } from 'react';
import type { Question } from '../../types';
import { Badge } from './Badge';
import { useProgress } from '../../context/ProgressContext';
import { Bookmark, BookmarkCheck, CheckCircle2, Circle, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface QuestionCardProps {
  question: Question;
  showTopic?: boolean;
  topicName?: string;
  defaultExpanded?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  showTopic = false, 
  topicName,
  defaultExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const { isBookmarked, isCompleted, toggleBookmark, toggleCompleted } = useProgress();

  const bookmarked = isBookmarked(question.id);
  const completed = isCompleted(question.id);

  return (
    <div className={clsx(
      "bg-white dark:bg-slate-900 rounded-xl border transition-all duration-200 shadow-sm",
      completed ? "border-emerald-200 dark:border-emerald-900/50" : "border-slate-200 dark:border-slate-800",
      "hover:shadow-md"
    )}>
      <div className="p-5 md:p-6">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge type={question.difficulty} />
              {showTopic && topicName && (
                <Link to={`/topic/${question.topicId}`}>
                  <Badge type="Topic" label={topicName} className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer" />
                </Link>
              )}
              {question.badges.map(badge => (
                <Badge key={badge} type={badge} />
              ))}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {question.title}
            </h3>
          </div>
          
          <div className="flex gap-2 shrink-0">
            <button 
              onClick={() => toggleBookmark(question.id)}
              className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"
              title={bookmarked ? "Remove bookmark" : "Bookmark"}
            >
              {bookmarked ? <BookmarkCheck className="text-primary" size={24} /> : <Bookmark size={24} />}
            </button>
            <button 
              onClick={() => toggleCompleted(question.id)}
              className="p-2 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
              title={completed ? "Mark as incomplete" : "Mark as completed"}
            >
              {completed ? <CheckCircle2 className="text-emerald-500" size={24} /> : <Circle size={24} />}
            </button>
          </div>
        </div>

        {!isExpanded ? (
          <button 
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
          >
            Show Answer <ChevronDown size={20} />
          </button>
        ) : (
          <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Short Answer</h4>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{question.answer.shortAnswer}</p>
            </div>

            {question.answer.detailedExplanation && (
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Detailed Explanation</h4>
                <div className="text-slate-700 dark:text-slate-300 prose prose-slate dark:prose-invert max-w-none whitespace-pre-line leading-relaxed">
                  {question.answer.detailedExplanation}
                </div>
              </div>
            )}

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Interview Answer (How to speak)</h4>
              <p className="text-slate-700 dark:text-slate-300 italic">"{question.answer.interviewExplanation}"</p>
            </div>

            {question.answer.keyPoints.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Points</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 marker:text-primary">
                  {question.answer.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {question.answer.example && (
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Example / Application</h4>
                <p className="text-slate-700 dark:text-slate-300">{question.answer.example}</p>
              </div>
            )}

            {question.interviewTip && (
              <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800/50">
                <Lightbulb className="text-amber-500 shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-amber-800 dark:text-amber-500 mb-1">Interview Tip</h4>
                  <p className="text-amber-900/80 dark:text-amber-200/80 text-sm">{question.interviewTip}</p>
                </div>
              </div>
            )}

            {question.answer.followUpQuestions && question.answer.followUpQuestions.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Common Follow-up Questions</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                  {question.answer.followUpQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button 
                onClick={() => setIsExpanded(false)}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors"
              >
                Hide Answer <ChevronUp size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
