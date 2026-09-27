import React from 'react';
import clsx from 'clsx';
import type { Badge as BadgeType, Difficulty } from '../../types';

interface BadgeProps {
  type: BadgeType | Difficulty | 'Topic';
  label?: string;
  className?: string;
}

const getBadgeStyles = (type: string) => {
  switch (type) {
    case 'Beginner': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800';
    case 'Intermediate': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800';
    case 'Advanced': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800';
    case 'Frequently Asked': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
    case 'Important': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
    case 'Conceptual': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Practical': return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
    case 'Coding': return 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    case 'Numerical': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400';
    case 'Topic': return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
    default: return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200';
  }
};

const getIcon = (type: string) => {
  switch (type) {
    case 'Frequently Asked': return '🔥 ';
    case 'Important': return '⭐ ';
    case 'Conceptual': return '💡 ';
    case 'Practical': return '🛠 ';
    case 'Coding': return '💻 ';
    case 'Numerical': return '📐 ';
    default: return '';
  }
}

export const Badge: React.FC<BadgeProps> = ({ type, label, className }) => {
  const displayLabel = label || type;
  
  return (
    <span className={clsx(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap",
      getBadgeStyles(type),
      className
    )}>
      {getIcon(type)}{displayLabel}
    </span>
  );
};
