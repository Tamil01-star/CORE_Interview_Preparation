
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { TopicView } from './pages/TopicView';
import { Bookmarks } from './pages/Bookmarks';
import { InterviewMode } from './pages/InterviewMode';

// Placeholder components for routes we haven't built yet
const Revision = () => <div className="p-8">10-Minute Revision (Coming Soon)</div>;
const SearchResults = () => <div className="p-8">Search Results (Coming Soon)</div>;

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="topic/:topicId" element={<TopicView />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="revision" element={<Revision />} />
              <Route path="interview-mode" element={<InterviewMode />} />
              <Route path="search" element={<SearchResults />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
