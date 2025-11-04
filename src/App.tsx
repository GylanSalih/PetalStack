// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DesktopHeader } from './components/Header/DesktopHeader';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Moon, Sun } from 'lucide-react';
import Home from './Pages/Home/Home';
// @ts-expect-error - Shop.jsx is a JSX file, not TypeScript
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
// @ts-expect-error - Login.jsx is a JSX file, not TypeScript
import Login from './Pages/Login/Login';
import styles from './app.module.scss';

import './fonts/fonts.css';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import { FilterProvider } from './contexts/FilterContext';
import { WishlistProvider } from './contexts/WishlistContext';
// @ts-expect-error - CartContext.jsx is a JSX file, not TypeScript
import { CartProvider } from './contexts/CartContext';
// @ts-expect-error - CartSidebar.jsx is a JSX file, not TypeScript
import CartSidebar from './components/CartSidebar/CartSidebar';

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
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Cart Sidebar */}
        <CartSidebar />
        
        <Footer />
      </Router>
    </div>
  );
};

const App = (): React.ReactElement => {
  return (
    <DarkModeProvider>
      <FilterProvider>
        <WishlistProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </WishlistProvider>
      </FilterProvider>
    </DarkModeProvider>
  );
};

export default App;
