// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DesktopHeader } from './components/header/desktopHeader';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scrollToTop';
import { Moon, Sun } from 'lucide-react';
import Home from './pages/home/home';
import PageOne from './pages/page-one/pageOne';
import PageTwo from './pages/page-two/pageTwo';
import PageThree from './pages/page-three/pageThree';
import Grids from './pages/grids/grids';
import Blog from './pages/blog/blog';
import BlogGrid from './pages/blog/blog-grid/blogGrid';
import BlogPost from './pages/blog/blog-post/blogPost';
import styles from './app.module.scss';

import './fonts/fonts.css';
import { DarkModeProvider, useDarkMode } from './contexts/darkModeContext';

const AppContent = (): React.ReactElement => {
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

const App = (): React.ReactElement => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;
