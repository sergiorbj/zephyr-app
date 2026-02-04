import React, { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { FilterSidebar } from './components/FilterSidebar';
import { watches } from './data/watches';
import type { Watch } from '@watchvault/shared';

function App() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [filteredWatches, setFilteredWatches] = useState<Watch[]>(watches);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    priceRange: { min: 0, max: 50000 },
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    
    let result = watches;
    
    if (newFilters.categories.length > 0) {
      result = result.filter((w) => newFilters.categories.includes(w.category));
    }
    
    if (newFilters.brands.length > 0) {
      result = result.filter((w) => newFilters.brands.includes(w.brand));
    }
    
    result = result.filter(
      (w) => w.price >= newFilters.priceRange.min && w.price <= newFilters.priceRange.max
    );
    
    setFilteredWatches(result);
  };

  const handleProductClick = (watch: Watch) => {
    setSelectedProductId(watch.id);
  };

  const handleBackToGrid = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="min-h-screen bg-pitch-black">
      <header className="bg-dark-coffee border-b border-mauve-bark px-6 py-4">
        <h1 className="font-display text-2xl text-cream">WatchVault Products</h1>
        <p className="font-body text-sm text-gold mt-1">Remote Micro-Frontend</p>
      </header>

      <main className="flex">
        {selectedProductId ? (
          <div className="flex-1 p-6">
            <button
              onClick={handleBackToGrid}
              className="mb-6 font-body text-gold hover:text-coral-glow transition-colors flex items-center gap-2"
            >
              <span>←</span> Back to Products
            </button>
            <ProductDetail productId={selectedProductId} />
          </div>
        ) : (
          <>
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              availableBrands={[...new Set(watches.map((w) => w.brand))]}
            />
            <div className="flex-1">
              <ProductGrid watches={filteredWatches} onProductClick={handleProductClick} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
