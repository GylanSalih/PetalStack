// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DesktopHeader } from './components/header/DesktopHeader';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Moon, Sun } from 'lucide-react';
import Home from './pages/Home/Home';
import PageOne from './pages/PageOne/PageOne';
import PageTwo from './pages/PageTwo/PageTwo';
import PageThree from './pages/PageThree/PageThree';
import Grids from './pages/Grids/Grids';
import Blog from './pages/Blog/Blog';
import BlogGrid from './pages/Blog/BlogGrid/blogGrid';
import BlogPost from './pages/Blog/BlogPost/blogPost';
import styles from './App.module.scss';

import './fonts/fonts.css';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';

const AppContent: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styles.app}>
      <Router>
        <ScrollToTop />
        <DesktopHeader />

        <button
          className={styles.themeToggle}
          onClick={toggleDarkMode}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-1" element={<PageOne />} />
          <Route path="/page-2" element={<PageTwo />} />
          <Route path="/page-3" element={<PageThree />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/grid" element={<BlogGrid />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;
