import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProgressContextType {
  bookmarkedIds: string[];
  completedIds: string[];
  toggleBookmark: (id: string) => void;
  toggleCompleted: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  isCompleted: (id: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('completed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completedIds));
  }, [completedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const toggleCompleted = (id: string) => {
    setCompletedIds(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);
  const isCompleted = (id: string) => completedIds.includes(id);

  return (
    <ProgressContext.Provider value={{ 
      bookmarkedIds, 
      completedIds, 
      toggleBookmark, 
      toggleCompleted,
      isBookmarked,
      isCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
