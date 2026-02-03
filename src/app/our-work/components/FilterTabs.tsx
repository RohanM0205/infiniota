'use client';

import { useState, useEffect } from 'react';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterTabs = ({ categories, activeCategory, onCategoryChange }: FilterTabsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground shadow-lg scale-105'
              : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;