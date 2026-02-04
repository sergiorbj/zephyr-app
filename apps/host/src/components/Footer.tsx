function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-coffee border-t border-mauve-bark/30">
      <div className="container-luxury py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display text-xl text-cream/80">
            WatchVault
          </div>

          {/* Copyright */}
          <p className="text-sm text-cream/60 font-body">
            &copy; {currentYear} WatchVault. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-cream/60 hover:text-coral-glow transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-cream/60 hover:text-coral-glow transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
