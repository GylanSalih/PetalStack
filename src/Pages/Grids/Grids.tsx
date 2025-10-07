import React from 'react';
import styles from './Grids.module.scss';
import CardGrid from './components/CardGrid';
import MasonryGrid from './components/MasonryGrid';

const Grids = (): React.ReactElement => {
  return (
    <div className={styles.gridsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Grid Layouts</h1>
          <p className={styles.subtitle}>
            Professionelle Grid-Designs als Boilerplate für deine Projekte
          </p>
        </header>
        
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Card Grid</h2>
            <p>Responsive Karten-Layout für Content-Bereiche mit eleganten Hover-Effekten</p>
          </div>
          <div className={styles.sectionContent}>
            <CardGrid />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Masonry Grid</h2>
            <p>Pinterest-Style Layout mit optimiertem Spacing für eine saubere Darstellung</p>
          </div>
          <div className={styles.sectionContent}>
            <MasonryGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grids;
