import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Linkedin, Github, Globe, ShoppingBag } from 'lucide-react';
// @ts-expect-error - CartContext.jsx is a JSX file, not TypeScript
import { useCart } from '../../contexts/CartContext';
import styles from './desktopHeader.module.scss';

const DesktopHeader = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openCart, getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

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
            to="/shop" 
            className={`${styles.navLink} ${isActive('/shop') ? styles.active : ''}`}
          >
            Shop
          </Link>
        </nav>

        {/* Cart Button */}
        <button 
          className={styles.cartButton}
          onClick={openCart}
          aria-label="Warenkorb öffnen"
        >
          <ShoppingBag size={24} />
          {cartItemCount > 0 && (
            <span className={styles.cartBadge}>{cartItemCount}</span>
          )}
        </button>

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
          {/* Close Button */}
          <button 
            className={styles.mobileCloseButton}
            onClick={toggleMenu}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>

          <div className={styles.mobileNavContent}>
            {/* Navigation Links */}
            <div className={styles.mobileNavLinks}>
              <Link 
                to="/" 
                className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`${styles.mobileNavLink} ${isActive('/shop') ? styles.active : ''}`}
              >
                Shop
              </Link>
            </div>

            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className={styles.socialIcon}
                aria-label="Website"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { DesktopHeader };
