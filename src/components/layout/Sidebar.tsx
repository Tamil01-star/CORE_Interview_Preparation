import React from 'react';
import { NavLink } from 'react-router-dom';
import { topics } from '../../data/topics';
import { IconRenderer } from '../ui/IconRenderer';
import { BookOpen, Home, Clock, Zap, Target } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const closeSidebar = () => setIsOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) => clsx(
    "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
    isActive ? "bg-primary text-white" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={clsx(
        "fixed inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 lg:translate-x-0 overflow-y-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Zap className="text-primary" />
            ECE Hub
          </h1>
        </div>

        <nav className="px-4 pb-8 space-y-1">
          <div className="mb-6">
            <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
            <NavLink to="/" onClick={closeSidebar} className={linkClass}>
              <Home size={20} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/bookmarks" onClick={closeSidebar} className={linkClass}>
              <BookOpen size={20} />
              <span>My Bookmarks</span>
            </NavLink>
            <NavLink to="/revision" onClick={closeSidebar} className={linkClass}>
              <Clock size={20} />
              <span>10-Minute Revision</span>
            </NavLink>
            <NavLink to="/interview-mode" onClick={closeSidebar} className={linkClass}>
              <Target size={20} />
              <span>Interview Mode</span>
            </NavLink>
          </div>

          <div className="mb-6">
            <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Subjects</p>
            {topics.map(topic => (
              <NavLink 
                key={topic.id} 
                to={`/topic/${topic.id}`} 
                onClick={closeSidebar}
                className={linkClass}
              >
                <IconRenderer name={topic.icon} size={18} />
                <span className="truncate">{topic.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};
