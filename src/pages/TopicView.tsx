import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics } from '../data/topics';
import { QuestionCard } from '../components/ui/QuestionCard';
import type { Question, Badge as BadgeType } from '../types';
import { IconRenderer } from '../components/ui/IconRenderer';
import { Filter, ArrowLeft } from 'lucide-react';

export const TopicView: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topics.find(t => t.id === topicId);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Frequently Asked', 'Conceptual', 'Practical', 'Coding', 'Numerical'];

  useEffect(() => {
    // Dynamic import to split chunks and handle lazy loading of huge data files
    const loadData = async () => {
      setLoading(true);
      try {
        let data: Question[] = [];
        
        // This simulates importing the specific data file
        // In a real app we'd map topicId to the dynamic import
        switch (topicId) {
          case 'core-ece':
            data = (await import('../data/coreEce')).coreEceQuestions;
            break;
          case 'digital-electronics':
            data = (await import('../data/digitalElectronics')).digitalElectronicsQuestions;
            break;
          case 'analog-electronics':
            data = (await import('../data/analogElectronics')).analogElectronicsQuestions;
            break;
          case 'circuit-theory':
            data = (await import('../data/circuitTheory')).circuitTheoryQuestions;
            break;
          case 'embedded-systems':
            data = (await import('../data/embeddedSystems')).embeddedSystemsQuestions;
            break;
          case 'microcontrollers':
            data = (await import('../data/microcontrollers')).microcontrollersQuestions;
            break;
          case 'programming':
            data = (await import('../data/embeddedC')).embeddedCQuestions;
            break;
          case 'sensors-iot':
            data = (await import('../data/sensors')).sensorsQuestions;
            break;
          case 'vlsi':
            // Merge both vlsi and verilog into the VLSI topic
            const vlsiData = await import('../data/vlsi');
            const verilogData = await import('../data/verilog');
            data = [...vlsiData.vlsiQuestions, ...verilogData.verilogQuestions];
            break;
          case 'semiconductors':
            data = (await import('../data/semiconductors')).semiconductorsQuestions;
            break;
          default:
            data = [];
        }
        
        setQuestions(data);
      } catch (error) {
        console.error("Failed to load topic data", error);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    if (topicId) {
      loadData();
    }
  }, [topicId]);

  if (!topic) {
    return <div className="p-8 text-center text-slate-500">Topic not found.</div>;
  }

  const filteredQuestions = questions.filter(q => {
    if (activeFilter === 'All') return true;
    if (q.difficulty === activeFilter) return true;
    if (q.badges.includes(activeFilter as BadgeType)) return true;
    return false;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
        <ArrowLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-6">
        <div className="bg-primary/10 p-4 rounded-xl shrink-0">
          <IconRenderer name={topic.icon} size={40} className="text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">{topic.name}</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{topic.description}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
            {questions.length} Questions
          </div>
        </div>
      </div>

      <div className="sticky top-16 z-10 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Filter size={18} className="text-slate-400 shrink-0 mr-2" />
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center p-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))
        ) : (
          <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500">
            No questions found matching the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};
