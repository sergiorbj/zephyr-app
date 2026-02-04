import React, { useEffect } from 'react';
import type { Watch } from '@watchvault/shared';
import { ProductCard } from './ProductCard';

export interface ProductGridProps {
  watches: Watch[];
  onProductClick?: (watch: Watch) => void;
}

// Inject keyframes animation
const injectStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('product-grid-styles')) {
    const style = document.createElement('style');
    style.id = 'product-grid-styles';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
};

export const ProductGrid: React.FC<ProductGridProps> = ({ watches, onProductClick }) => {
  useEffect(() => {
    injectStyles();
  }, []);
  if (watches.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
        <p style={{ color: '#634133', fontFamily: 'DM Sans, sans-serif' }}>No watches found.</p>
      </div>
    );
  }

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '48px 32px',
      }}
    >
      {watches.map((watch, index) => (
        <ProductCard
          key={watch.id}
          watch={watch}
          index={index}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
