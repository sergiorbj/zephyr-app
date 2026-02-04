import React from 'react';
import { watches } from '../data/watches';
import { Button, Badge } from '@watchvault/shared';

export interface ProductDetailProps {
  productId: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const watch = watches.find((w) => w.id === productId);

  if (!watch) {
    return (
      <div className="p-6 text-center">
        <p className="font-body text-mauve-bark text-lg">Product not found.</p>
      </div>
    );
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="aspect-square bg-dark-coffee rounded-lg overflow-hidden border border-mauve-bark">
          <img
            src={watch.image}
            alt={`${watch.brand} ${watch.model}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="font-body text-sm uppercase tracking-wider text-gold">
              {watch.brand}
            </span>
          </div>

          <h1 className="font-display text-4xl text-cream mb-4">{watch.model}</h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-2xl text-gold">
              {formatPrice(watch.price, watch.currency)}
            </span>
            <Badge variant={watch.category === 'luxury' ? 'primary' : 'secondary'}>
              {watch.category}
            </Badge>
            {!watch.inStock && (
              <Badge variant="error">Out of Stock</Badge>
            )}
          </div>

          <p className="font-body text-cream/80 leading-relaxed mb-8">
            {watch.description}
          </p>

          {/* Features List */}
          <div className="mb-8">
            <h2 className="font-display text-xl text-cream mb-4">Features</h2>
            <ul className="space-y-2">
              {watch.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-body text-cream/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart */}
          <div className="mt-auto">
            <Button
              variant="primary"
              size="lg"
              disabled={!watch.inStock}
              className="w-full"
            >
              {watch.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            
            {watch.inStock && (
              <p className="font-body text-sm text-mauve-bark mt-3 text-center">
                Free shipping on orders over $5,000
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
