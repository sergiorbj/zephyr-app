import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-pitch-black/95 backdrop-blur-sm border-b border-dark-coffee/50 transition-all duration-300">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl text-cream hover:text-coral-glow transition-colors duration-300"
          >
            WatchVault
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
