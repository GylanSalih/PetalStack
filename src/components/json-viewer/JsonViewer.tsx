import React, { useState } from 'react';
import { Copy, ChevronDown, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import styles from './JsonViewer.module.scss';

interface JsonViewerProps {
  data: any;
  title?: string;
  showCopyButton?: boolean;
  showToggleButton?: boolean;
  defaultExpanded?: boolean;
  maxHeight?: string;
}

const JsonViewer = ({
  data,
  title = "JSON Data",
  showCopyButton = true,
  showToggleButton = true,
  defaultExpanded = true,
  maxHeight = "500px"
}: JsonViewerProps): React.ReactElement => {
  const { isDarkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);

  const formatJson = (obj: any, indent: number = 0): string => {
    if (obj === null) return 'null';
    if (obj === undefined) return 'undefined';
    if (typeof obj === 'string') return `"${obj}"`;
    if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
    
    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      const items = obj.map(item => 
        '  '.repeat(indent + 1) + formatJson(item, indent + 1)
      ).join(',\n');
      return `[\n${items}\n${'  '.repeat(indent)}]`;
    }
    
    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      if (keys.length === 0) return '{}';
      
      const items = keys.map(key => {
        const value = formatJson(obj[key], indent + 1);
        return `${'  '.repeat(indent + 1)}"${key}": ${value}`;
      }).join(',\n');
      
      return `{\n${items}\n${'  '.repeat(indent)}}`;
    }
    
    return String(obj);
  };

  const copyToClipboard = async () => {
    try {
      const jsonString = JSON.stringify(data, null, 2);
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy JSON:', err);
    }
  };

  const renderValue = (value: any, key?: string, level: number = 0): React.ReactNode => {
    if (value === null) {
      return <span className={styles.nullValue}>null</span>;
    }
    
    if (value === undefined) {
      return <span className={styles.undefinedValue}>undefined</span>;
    }
    
    if (typeof value === 'string') {
      return <span className={styles.stringValue}>"{value}"</span>;
    }
    
    if (typeof value === 'number') {
      return <span className={styles.numberValue}>{value}</span>;
    }
    
    if (typeof value === 'boolean') {
      return <span className={styles.booleanValue}>{value.toString()}</span>;
    }
    
    if (Array.isArray(value)) {
      return (
        <div className={styles.arrayContainer}>
          <span className={styles.bracket}>[</span>
          <div className={styles.arrayContent}>
            {value.map((item, index) => (
              <div key={index} className={styles.arrayItem}>
                <span className={styles.arrayIndex}>{index}:</span>
                {renderValue(item, undefined, level + 1)}
                {index < value.length - 1 && <span className={styles.comma}>,</span>}
              </div>
            ))}
          </div>
          <span className={styles.bracket}>]</span>
        </div>
      );
    }
    
    if (typeof value === 'object') {
      const keys = Object.keys(value);
      return (
        <div className={styles.objectContainer}>
          <span className={styles.brace}>{'{'}</span>
          <div className={styles.objectContent}>
            {keys.map((objKey, index) => (
              <div key={objKey} className={styles.objectItem}>
                <span className={styles.objectKey}>"{objKey}":</span>
                {renderValue(value[objKey], objKey, level + 1)}
                {index < keys.length - 1 && <span className={styles.comma}>,</span>}
              </div>
            ))}
          </div>
          <span className={styles.brace}>{'}'}</span>
        </div>
      );
    }
    
    return <span className={styles.unknownValue}>{String(value)}</span>;
  };

  return (
    <div className={`${styles.jsonViewer} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          {showToggleButton && (
            <button
              className={styles.toggleButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
          <h3 className={styles.title}>{title}</h3>
        </div>
        
        {showCopyButton && (
          <button
            className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
            onClick={copyToClipboard}
            title="Copy JSON to clipboard"
          >
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      
      {isExpanded && (
        <div 
          className={styles.jsonContent}
          style={{ maxHeight }}
        >
          <pre className={styles.jsonPre}>
            <code className={styles.jsonCode}>
              {renderValue(data)}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default JsonViewer;
