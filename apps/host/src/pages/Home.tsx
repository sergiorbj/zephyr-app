import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Watch } from '@watchvault/shared';

const ProductGrid = React.lazy(() => import('remote_products/ProductGrid'));

// Sample watches data - matches the remote-products data for consistent navigation
const watches: Watch[] = [
  {
    id: 'rolex-submariner',
    brand: 'Rolex',
    model: 'Submariner Date',
    price: 14500,
    currency: 'USD',
    description: 'The reference among divers watches. A watch that has consistently improved while retaining its essential identity.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'luxury',
    features: ['Oystersteel', 'Water resistant 300m', 'Cerachrom bezel', 'Chromalight display'],
    inStock: true,
  },
  {
    id: 'omega-speedmaster',
    brand: 'Omega',
    model: 'Speedmaster Professional',
    price: 7200,
    currency: 'USD',
    description: 'The legendary Moonwatch. The first watch worn on the moon and a testament to precision and reliability.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    category: 'classic',
    features: ['Manual winding', 'Hesalite crystal', 'Tachymeter bezel', 'Moon watch certified'],
    inStock: true,
  },
  {
    id: 'tag-heuer-carrera',
    brand: 'TAG Heuer',
    model: 'Carrera Chronograph',
    price: 5950,
    currency: 'USD',
    description: 'Inspired by the dangerous Carrera Panamericana road race, this chronograph combines racing heritage with elegant design.',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80',
    category: 'sport',
    features: ['Automatic chronograph', 'Sapphire crystal', 'Ceramic bezel', '100m water resistant'],
    inStock: true,
  },
  {
    id: 'patek-philippe-nautilus',
    brand: 'Patek Philippe',
    model: 'Nautilus 5711',
    price: 35000,
    currency: 'USD',
    description: 'The iconic Nautilus, a symbol of elegance and sporty sophistication. Features a stunning blue dial with horizontal embossed pattern.',
    image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=800&q=80',
    category: 'luxury',
    features: ['Self-winding', 'Water resistant 120m', 'Sapphire crystal', 'Fold-over clasp'],
    inStock: false,
  },
  {
    id: 'seiko-presage',
    brand: 'Seiko',
    model: 'Presage Cocktail Time',
    price: 450,
    currency: 'USD',
    description: 'The Presage Cocktail Time collection draws inspiration from the artistry of cocktails with stunning sunburst dial.',
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80',
    category: 'classic',
    features: ['Automatic movement', 'Hardlex crystal', 'Exhibition case back', '50m water resistant'],
    inStock: true,
  },
  {
    id: 'audemars-piguet-royal-oak',
    brand: 'Audemars Piguet',
    model: 'Royal Oak Selfwinding',
    price: 28500,
    currency: 'USD',
    description: 'The revolutionary Royal Oak that redefined luxury sports watches with its octagonal bezel and tapisserie dial.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80',
    category: 'luxury',
    features: ['Self-winding', 'Tapisserie dial', 'Integrated bracelet', '50m water resistance'],
    inStock: true,
  },
];

function LoadingFallback() {
  return (
    <div className="loading-container">
      <div className="flex flex-col items-center gap-4">
        <div className="loading-spinner" />
        <p className="text-cream/60 text-sm">Loading collection...</p>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleProductClick = (watchOrId: any) => {
    // Handle both Watch object and string ID
    const id = typeof watchOrId === 'string' ? watchOrId : watchOrId?.id;
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-luxury opacity-50" />
        
        <div className="container-luxury relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream mb-6 animate-slide-up">
              Exceptional Timepieces for{' '}
              <span className="text-gradient">Discerning Collectors</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 font-body max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Curated selection of the world's finest luxury watches. 
              Each piece tells a story of craftsmanship and timeless elegance.
            </p>
            <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-warm text-pitch-black font-body font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Explore Collection
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
              Our Collection
            </h2>
            <p className="text-cream/60 font-body max-w-xl mx-auto">
              Discover timepieces that transcend generations, each selected for its exceptional quality and heritage.
            </p>
          </div>

          <Suspense fallback={<LoadingFallback />}>
            <ProductGrid watches={watches} onProductClick={handleProductClick} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

export default Home;
