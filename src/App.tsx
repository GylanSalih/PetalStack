// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DesktopHeader } from './components/Header/DesktopHeader';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Moon, Sun } from 'lucide-react';
import Home from './Pages/Home/Home';
import PageOne from './Pages/PageOne/PageOne';
import PageTwo from './Pages/PageTwo/PageTwo';
import PageThree from './Pages/PageThree/PageThree';
import Grids from './Pages/Grids/Grids';
import Blog from './Pages/Blog/Blog';
import BlogGrid from './Pages/Blog/BlogGrid/blogGrid';
import BlogPost from './Pages/Blog/BlogPost/blogPost';
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
