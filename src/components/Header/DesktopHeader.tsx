import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './DesktopHeader.module.scss';

const DesktopHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img 
            src="/assets/img/Logo_Black.png" 
            alt="PetalStack Logo" 
            className={styles.logoLight}
            width={32}
            height={32}
          />
          <img 
            src="/assets/img/Logo_White.png" 
            alt="PetalStack Logo" 
            className={styles.logoDark}
            width={32}
            height={32}
          />
          <span>PetalStack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/page-1" 
            className={`${styles.navLink} ${isActive('/page-1') ? styles.active : ''}`}
          >
            Page 1
          </Link>
          <Link 
            to="/page-2" 
            className={`${styles.navLink} ${isActive('/page-2') ? styles.active : ''}`}
          >
            Page 2
          </Link>
          <Link 
            to="/page-3" 
            className={`${styles.navLink} ${isActive('/page-3') ? styles.active : ''}`}
          >
            Page 3
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavContent}>
            <Link 
              to="/" 
              className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/page-1" 
              className={`${styles.mobileNavLink} ${isActive('/page-1') ? styles.active : ''}`}
            >
              Page 1
            </Link>
            <Link 
              to="/page-2" 
              className={`${styles.mobileNavLink} ${isActive('/page-2') ? styles.active : ''}`}
            >
              Page 2
            </Link>
            <Link 
              to="/page-3" 
              className={`${styles.mobileNavLink} ${isActive('/page-3') ? styles.active : ''}`}
            >
              Page 3
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export { DesktopHeader };
