import React, { useState } from 'react';
import type { Watch } from '@watchvault/shared';

export interface ProductCardProps {
  watch: Watch;
  index?: number;
  onClick?: (watch: Watch) => void;
}

const styles = {
  card: {
    cursor: 'pointer',
    opacity: 0,
    animation: 'fadeIn 0.4s ease-out forwards',
  } as React.CSSProperties,
  imageContainer: {
    position: 'relative' as const,
    aspectRatio: '3/4',
    marginBottom: '20px',
    overflow: 'hidden',
    borderRadius: '8px',
    backgroundColor: '#392A16',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.5s ease',
  },
  imageHover: {
    transform: 'scale(1.05)',
  },
  soldOutOverlay: {
    position: 'absolute' as const,
    inset: 0,
    backgroundColor: 'rgba(35, 28, 7, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  soldOutBadge: {
    padding: '8px 16px',
    backgroundColor: '#8B3A3A',
    color: '#FDF8F3',
    fontSize: '11px',
    fontFamily: 'DM Sans, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    borderRadius: '4px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  brand: {
    color: '#C9A962',
    fontSize: '11px',
    fontFamily: 'DM Sans, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
  },
  model: {
    color: '#FDF8F3',
    fontSize: '18px',
    fontFamily: 'Playfair Display, serif',
    lineHeight: 1.3,
    margin: 0,
    transition: 'color 0.3s ease',
  },
  modelHover: {
    color: '#C9A962',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '8px',
  },
  price: {
    color: '#C9A962',
    fontSize: '20px',
    fontFamily: 'JetBrains Mono, monospace',
  },
  category: {
    color: '#634133',
    fontSize: '11px',
    fontFamily: 'DM Sans, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  },
};

export const ProductCard: React.FC<ProductCardProps> = ({ watch, index = 0, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <article
      style={{ 
        ...styles.card, 
        animationDelay: `${index * 80}ms` 
      }}
      onClick={() => onClick?.(watch)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div style={styles.imageContainer}>
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model}`}
          style={{
            ...styles.image,
            ...(isHovered ? styles.imageHover : {}),
          }}
          loading="lazy"
        />
        
        {/* Out of Stock Overlay */}
        {!watch.inStock && (
          <div style={styles.soldOutOverlay}>
            <span style={styles.soldOutBadge}>Sold Out</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={styles.info}>
        <p style={styles.brand}>{watch.brand}</p>
        
        <h3 style={{
          ...styles.model,
          ...(isHovered ? styles.modelHover : {}),
        }}>
          {watch.model}
        </h3>
        
        <div style={styles.priceRow}>
          <span style={styles.price}>
            {formatPrice(watch.price, watch.currency)}
          </span>
          <span style={styles.category}>{watch.category}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
