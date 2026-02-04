import React from 'react';

export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: { min: number; max: number };
}

export interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableBrands: string[];
}

const CATEGORIES = ['luxury', 'sport', 'classic', 'smart'] as const;

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  availableBrands,
}) => {
  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    onFilterChange({
      ...filters,
      priceRange: { ...filters.priceRange, [type]: value },
    });
  };

  const handleClearFilters = () => {
    onFilterChange({
      categories: [],
      brands: [],
      priceRange: { min: 0, max: 50000 },
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.priceRange.min > 0 ||
    filters.priceRange.max < 50000;

  return (
    <aside className="w-64 bg-dark-coffee border-r border-mauve-bark p-6 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-xl text-cream">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="font-body text-xs text-coral-glow hover:text-gold transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-body text-sm uppercase tracking-wider text-gold mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="w-4 h-4 rounded border-mauve-bark bg-pitch-black text-gold 
                           focus:ring-gold focus:ring-offset-0 focus:ring-1 cursor-pointer"
              />
              <span className="font-body text-cream/80 capitalize group-hover:text-cream transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-8">
        <h3 className="font-body text-sm uppercase tracking-wider text-gold mb-4">
          Brand
        </h3>
        <div className="space-y-2">
          {availableBrands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="w-4 h-4 rounded border-mauve-bark bg-pitch-black text-gold 
                           focus:ring-gold focus:ring-offset-0 focus:ring-1 cursor-pointer"
              />
              <span className="font-body text-cream/80 group-hover:text-cream transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="font-body text-sm uppercase tracking-wider text-gold mb-4">
          Price Range
        </h3>
        <div className="space-y-4">
          <div>
            <label className="font-body text-xs text-cream/60 block mb-1">
              Min Price
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange('min', Number(e.target.value))}
              className="w-full h-1 bg-mauve-bark rounded-lg appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                         [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <span className="font-mono text-sm text-cream/80">
              ${filters.priceRange.min.toLocaleString()}
            </span>
          </div>
          <div>
            <label className="font-body text-xs text-cream/60 block mb-1">
              Max Price
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={filters.priceRange.max}
              onChange={(e) => handlePriceChange('max', Number(e.target.value))}
              className="w-full h-1 bg-mauve-bark rounded-lg appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                         [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <span className="font-mono text-sm text-cream/80">
              ${filters.priceRange.max.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-mauve-bark">
          <h3 className="font-body text-xs uppercase tracking-wider text-gold mb-3">
            Active Filters
          </h3>
          <div className="flex flex-wrap gap-2">
            {filters.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2 py-1 bg-pitch-black 
                           rounded text-xs font-body text-cream/80 capitalize"
              >
                {cat}
                <button
                  onClick={() => handleCategoryToggle(cat)}
                  className="text-coral-glow hover:text-gold ml-1"
                >
                  ×
                </button>
              </span>
            ))}
            {filters.brands.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center gap-1 px-2 py-1 bg-pitch-black 
                           rounded text-xs font-body text-cream/80"
              >
                {brand}
                <button
                  onClick={() => handleBrandToggle(brand)}
                  className="text-coral-glow hover:text-gold ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;
