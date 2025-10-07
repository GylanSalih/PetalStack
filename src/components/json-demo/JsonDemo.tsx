import React, { useState } from 'react';
import { Code, Database, Eye } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { blogJsonData } from '../../data/blogJsonData';
import JsonViewer from '../json-viewer/JsonViewer';
import styles from './JsonDemo.module.scss';

const JsonDemo = (): React.ReactElement => {
  const { isDarkMode } = useDarkMode();
  const [selectedData, setSelectedData] = useState<string>('metadata');
  const [showJsonViewer, setShowJsonViewer] = useState(false);

  const getSelectedData = () => {
    switch (selectedData) {
      case 'metadata':
        return blogJsonData.metadata;
      case 'categories':
        return blogJsonData.categories;
      case 'authors':
        return blogJsonData.authors;
      case 'posts':
        return blogJsonData.posts;
      case 'analytics':
        return blogJsonData.analytics;
      case 'seo':
        return blogJsonData.seo;
      case 'full':
        return blogJsonData;
      default:
        return blogJsonData.metadata;
    }
  };

  const dataOptions = [
    { value: 'metadata', label: 'Metadata', description: 'System information and version' },
    { value: 'categories', label: 'Categories', description: 'Blog categories with metadata' },
    { value: 'authors', label: 'Authors', description: 'Author profiles and social links' },
    { value: 'posts', label: 'Posts', description: 'Blog posts with full content' },
    { value: 'analytics', label: 'Analytics', description: 'Performance metrics and stats' },
    { value: 'seo', label: 'SEO', description: 'Search engine optimization data' },
    { value: 'full', label: 'Full Dataset', description: 'Complete JSON structure' }
  ];

  return (
    <div className={`${styles.jsonDemo} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <Database className={styles.titleIcon} />
            <h2 className={styles.title}>JSON Data Explorer</h2>
          </div>
          <p className={styles.subtitle}>
            Explore the comprehensive JSON structure of our blog system
          </p>
        </div>

        <div className={styles.controls}>
          <div className={styles.dataSelector}>
            <label className={styles.label}>Select Data Type:</label>
            <select
              value={selectedData}
              onChange={(e) => setSelectedData(e.target.value)}
              className={styles.select}
            >
              {dataOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            className={styles.viewButton}
            onClick={() => setShowJsonViewer(true)}
          >
            <Eye className={styles.buttonIcon} />
            View JSON
          </button>
        </div>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>
            {dataOptions.find(opt => opt.value === selectedData)?.label}
          </h3>
          <p className={styles.infoDescription}>
            {dataOptions.find(opt => opt.value === selectedData)?.description}
          </p>
        </div>

        {showJsonViewer && (
          <div className={styles.jsonContainer}>
            <JsonViewer
              data={getSelectedData()}
              title={`${dataOptions.find(opt => opt.value === selectedData)?.label} Data`}
              showCopyButton={true}
              showToggleButton={true}
              defaultExpanded={true}
              maxHeight="60vh"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonDemo;
