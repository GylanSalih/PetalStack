import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate login - replace with actual API call
    setTimeout(() => {
      // For demo purposes, accept any email/password
      if (email && password) {
        // Save to localStorage (in real app, this would be a token)
        localStorage.setItem('user', JSON.stringify({ email }));
        navigate('/shop');
      } else {
        setError('Bitte füllen Sie alle Felder aus');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <h1>Anmelden</h1>
            <p>Willkommen zurück! Bitte melden Sie sich an.</p>
          </div>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-Mail</label>
              <div className={styles.inputWrapper}>
                <Mail size={20} className={styles.icon} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.com"
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Passwort</label>
              <div className={styles.inputWrapper}>
                <Lock size={20} className={styles.icon} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Passwort"
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span>Angemeldet bleiben</span>
              </label>
              <Link to="/forgot-password" className={styles.forgotLink}>
                Passwort vergessen?
              </Link>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
            </button>
          </form>

          <div className={styles.footer}>
            <p>
              Noch kein Konto?{' '}
              <Link to="/register" className={styles.registerLink}>
                Jetzt registrieren
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
