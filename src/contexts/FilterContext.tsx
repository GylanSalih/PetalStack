import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FilterState {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: 'newest' | 'name' | 'price-low' | 'price-high';
}

interface FilterContextType {
  filters: FilterState;
  setFilters: (filters: FilterState | ((prev: FilterState) => FilterState)) => void;
  categories: string[];
  setCategories: (categories: string[]) => void;
  productCount: number;
  setProductCount: (count: number) => void;
  isFilterOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
  toggleFilter: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps): React.ReactElement => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: {
      min: 0,
      max: 1000,
    },
    sortBy: 'newest',
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [productCount, setProductCount] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  const value: FilterContextType = {
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

