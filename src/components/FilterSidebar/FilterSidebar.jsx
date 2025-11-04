import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { gsap } from 'gsap';
import { useFilter } from '../../contexts/FilterContext';
import styles from './FilterSidebar.module.scss';

const FilterSidebar = () => {
  const {
    isFilterOpen,
    closeFilter,
    filters,
    setFilters,
    categories,
    productCount,
  } = useFilter();

  const [selectedCategories, setSelectedCategories] = useState(
    filters.categories
  );
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [sortBy, setSortBy] = useState(filters.sortBy);

  const [shouldRender, setShouldRender] = useState(false);
  const backdropRef = useRef(null);
  const panelRef = useRef(null);

  // Update local state when filters change
  useEffect(() => {
    setSelectedCategories(filters.categories);
    setPriceRange(filters.priceRange);
    setSortBy(filters.sortBy);
  }, [filters]);

  const updateFilters = (cats, range, sort) => {
    const newFilters = { categories: cats, priceRange: range, sortBy: sort };
    setFilters(newFilters);
  };

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    updateFilters(updated, priceRange, sortBy);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    updateFilters(selectedCategories, priceRange, newSortBy);
  };

  const clearFilters = () => {
    const resetRange = { min: 0, max: 1000 };
    setSelectedCategories([]);
    setPriceRange(resetRange);
    setSortBy('newest');
    updateFilters([], resetRange, 'newest');
  };

  const closePanel = () => {
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });

    gsap.to(panelRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        gsap.set(panelRef.current, { x: '100%' });
        setShouldRender(false);
        closeFilter();
      },
    });
  };

  useEffect(() => {
    if (isFilterOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        gsap.set(panelRef.current, { x: '100%' });
        gsap.set(backdropRef.current, { opacity: 0 });

        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });

        gsap.to(panelRef.current, {
          x: '0%',
          duration: 0.6,
          ease: 'power3.out',
        });
      }, 10);
    } else {
      document.body.style.overflow = '';
    }
  }, [isFilterOpen]);

  // ESC zum Schließen
  useEffect(() => {
    if (!shouldRender) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closePanel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shouldRender]);

  // Cleanup beim Unmounting
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Only render when filter is actually open
  if (!isFilterOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div ref={backdropRef} className={styles.backdrop} onClick={closePanel} />

      {/* Filter Sidebar */}
      <div ref={panelRef} className={styles.filterSidebar}>
        <div className={styles.header}>
          <h2 className={styles.title}>FILTER</h2>
          <button className={styles.closeButton} onClick={closePanel}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {/* Categories */}
          <div className={styles.filterSection}>
            <h4>PRODUCT TYPE</h4>
            <div className={styles.categoryList}>
              {categories.map(category => (
                <label key={category} className={styles.checkboxLabel}>
                  <input
                    type='checkbox'
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className={styles.filterSection}>
            <h4>SIZE</h4>
            <div className={styles.sizeList}>
              {['X-Small', 'Small', 'Medium', 'Large', 'X-Large'].map(size => (
                <label key={size} className={styles.checkboxLabel}>
                  <input type='checkbox' />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className={styles.filterSection}>
            <h4>COLOR</h4>
            <div className={styles.colorList}>
              {['Black', 'White', 'Gray', 'Blue', 'Red'].map(color => (
                <label key={color} className={styles.checkboxLabel}>
                  <input type='checkbox' />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className={styles.filterSection}>
            <h4>SORT BY</h4>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={e => handleSortChange(e.target.value)}
            >
              <option value='newest'>NEWEST</option>
              <option value='name'>NAME</option>
              <option value='price-low'>PRICE: LOW TO HIGH</option>
              <option value='price-high'>PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        <div className={styles.footer}>
          <button onClick={clearFilters} className={styles.clearButton}>
            CLEAR ALL
          </button>
          <button onClick={closePanel} className={styles.applyButton}>
            APPLY
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
