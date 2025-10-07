import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link to="/" className={styles.brand}>
              <img 
                src="/assets/img/Logo_Black.png" 
                alt="PetalStack Logo" 
                className={styles.logoLight}
                width={24}
                height={24}
              />
              <img 
                src="/assets/img/Logo_White.png" 
                alt="PetalStack Logo" 
                className={styles.logoDark}
                width={24}
                height={24}
              />
              <span>PetalStack</span>
            </Link>
            <p className={styles.brandDescription}>
              A modern, production-ready React TypeScript boilerplate with beautiful UI/UX, 
              smooth animations, and a comprehensive design system.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/page-1">Page 1</Link></li>
              <li><Link to="/page-2">Page 2</Link></li>
              <li><Link to="/page-3">Page 3</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.resources}>
            <h3>Resources</h3>
            <ul>
              <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a></li>
              <li><a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
              <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a></li>
              <li><a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">Sass</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <h3>Connect</h3>
            <div className={styles.socialIcons}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} PetalStack. Made with{' '}
              <Heart size={16} className={styles.heart} /> by developers for developers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
