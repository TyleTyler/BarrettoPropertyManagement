import { Outlet, Link } from 'react-router';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

export function Root() {
  return (
    <div className="min-h-screen bg-[#0a1929]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="bg-[#0a1929] border-b border-[var(--champagne-gold)]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/src/imports/Logo_Baretto.png"
              alt="Baretto Property Management"
              className="h-16 w-auto"
            />
          </Link>

          <nav className="flex items-center gap-8">
            <Link to="/our-story" className="text-gray-300 hover:text-[var(--champagne-gold)] transition-colors">
              Our Story
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-[var(--champagne-gold)] transition-colors">
              Services
            </Link>
            <Link to="/resources" className="text-gray-300 hover:text-[var(--champagne-gold)] transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[var(--champagne-gold)] transition-colors">
              Contact Us
            </Link>
            <button className="bg-[var(--champagne-gold)] text-[#0a1929] px-6 py-2.5 rounded hover:bg-opacity-90 transition-all font-medium">
              OWNER PORTAL
            </button>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-[var(--champagne-gold)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="col-span-1">
              <img
                src="/src/imports/Logo_Baretto.png"
                alt="Baretto"
                className="h-20 w-auto mb-4"
              />
              <p className="text-sm text-[var(--champagne-gold)] uppercase tracking-wider mb-2">
                Integrity. Reliability. Results.
              </p>
              <p className="text-xs text-gray-400">
                Managing Properties. Building Value. Enhancing Communities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/our-story" className="text-gray-400 hover:text-[var(--champagne-gold)] transition-colors">Our Story</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-[var(--champagne-gold)] transition-colors">Services</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-[var(--champagne-gold)] transition-colors">Resources</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[var(--champagne-gold)] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Phone: (555) 555-0199</li>
                <li>Email: info@barettopm.com</li>
                <li>Boca Raton, FL</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--champagne-gold)]/10 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--champagne-gold)]/10 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--champagne-gold)]/10 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--champagne-gold)]/20 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 Baretto Property Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
