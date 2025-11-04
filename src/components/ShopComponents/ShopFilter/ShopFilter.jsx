import React, { useEffect, useRef, useState } from 'react';
import { Filter, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useFilter } from '../../../contexts/FilterContext';
import styles from './ShopFilter.module.scss';

const ShopFilter = ({
  className = '',
}) => {
  const { filters, setFilters, categories, productCount, isFilterOpen, openFilter, closeFilter } = useFilter();
  const [selectedCategories, setSelectedCategories] = useState(filters.categories || []);
  const [priceRange, setPriceRange] = useState(filters.priceRange || { min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState(filters.sortBy || 'newest');

  // Slider state + refs (übernommenes Muster aus CartSidebar)
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const backdropRef = useRef(null);
  const panelRef = useRef(null);

  // --- Filter helpers ---
  const updateFilters = (cats, range, sort) => {
    setFilters({
      categories: cats,
      priceRange: range,
      sortBy: sort,
    });
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

  // --- Öffnen / Schließen wie CartSidebar ---
  const openPanel = () => openFilter();

  const closePanel = () => {
    // erst animieren, dann Zustand zurücksetzen
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
      // Body scrollen verhindern
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
      // Body wieder normalisieren
      document.body.style.overflow = '';
    }
  }, [isFilterOpen]);

  // ESC zum Schließen, identisch zur UX von Drawern
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

  return (
    <>
      <div className={`${styles.shopFilter} ${className}`}>
        {/* Title Row */}
        <div className={styles.titleRow}>
          <h1 className={styles.pageTitle}>NEW IN</h1>
        </div>

        {/* Product Count and Controls Row */}
        <div className={styles.controlsRow}>
          <div className={styles.productCount}>{productCount} PRODUKTE</div>

          <div className={styles.rightControls}>
            <button className={styles.filterToggle} onClick={openFilter}>
              <Filter size={20} />
              <span>FILTER</span>
            </button>

            <div className={styles.sortGroup}>
              <span className={styles.sortLabel}>SORTIEREN NACH:</span>
              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={e => handleSortChange(e.target.value)}
              >
                <option value='newest'>AUSGEWÄHLT</option>
                <option value='name'>NAME</option>
                <option value='price-low'>PREIS: NIEDRIG ZU HOCH</option>
                <option value='price-high'>PREIS: HOCH ZU NIEDRIG</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Overlay + Panel - außerhalb des Containers für korrekte z-index */}
      {shouldRender && (
        <div
          ref={backdropRef}
          className={styles.overlay}
          onClick={closePanel} // wichtig: nicht sofort unmounten
        >
          <div
            ref={panelRef}
            className={styles.slider}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.sliderHeader}>
              <h3>FILTER</h3>
              <button className={styles.closeButton} onClick={closePanel}>
                <X size={24} />
              </button>
            </div>

            <div className={styles.sliderContent}>
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
                  {['X-Small', 'Small', 'Medium', 'Large', 'X-Large'].map(
                    size => (
                      <label key={size} className={styles.checkboxLabel}>
                        <input type='checkbox' />
                        <span>{size}</span>
                      </label>
                    )
                  )}
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

              {/* Sort duplicate for mobile */}
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

            <div className={styles.sliderFooter}>
              <button onClick={clearFilters} className={styles.clearButton}>
                CLEAR ALL
              </button>
              <button onClick={closePanel} className={styles.applyButton}>
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopFilter;
