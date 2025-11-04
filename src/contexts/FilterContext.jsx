import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: {
      min: 0,
      max: 1000,
    },
    sortBy: 'newest',
  });

  const [categories, setCategories] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  const value = {
    filters,
    setFilters,
    categories,
    setCategories,
    productCount,
    setProductCount,
    isFilterOpen,
    openFilter,
    closeFilter,
    toggleFilter,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

