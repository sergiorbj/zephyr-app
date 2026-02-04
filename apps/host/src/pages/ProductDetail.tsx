import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailComponent = React.lazy(() => import('remote_products/ProductDetail'));

function LoadingFallback() {
  return (
    <div className="loading-container min-h-[600px]">
      <div className="flex flex-col items-center gap-4">
        <div className="loading-spinner" />
        <p className="text-cream/60 text-sm font-body">Loading watch details...</p>
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="container-luxury py-20 text-center">
        <h1 className="font-display text-3xl text-cream mb-4">Product Not Found</h1>
        <p className="text-cream/60 mb-8">The timepiece you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-coral-glow hover:text-cinnamon-wood transition-colors duration-300"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="container-luxury pt-6">
        <nav className="flex items-center gap-2 text-sm font-body">
          <Link
            to="/"
            className="text-cream/60 hover:text-coral-glow transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-cream/40">/</span>
          <Link
            to="/#collection"
            className="text-cream/60 hover:text-coral-glow transition-colors duration-300"
          >
            Collection
          </Link>
          <span className="text-cream/40">/</span>
          <span className="text-cream">Details</span>
        </nav>
      </div>

      {/* Product Detail from Remote */}
      <Suspense fallback={<LoadingFallback />}>
        <ProductDetailComponent productId={id} />
      </Suspense>
    </div>
  );
}

export default ProductDetail;
