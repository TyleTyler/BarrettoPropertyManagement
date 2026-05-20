import { Link } from 'react-router';
import { Video, Linkedin, Facebook, Instagram, Briefcase, MessageCircle } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 25, 41, 0.88), rgba(10, 25, 41, 0.75)), url('https://images.unsplash.com/photo-1697819924957-5a9684e369a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRlcmZyb250JTIwcHJvcGVydHklMjBhZXJpYWwlMjBvY2VhbiUyMHBhbG0lMjB0cmVlcyUyMGZsb3JpZGF8ZW58MXx8fHwxNzc4Njg5NjUxfDA&ixlib=rb-4.1.0&q=80&w=1920')`
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-7xl mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, lineHeight: 1.2 }}>
              Professional Property Management in South Florida
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Deliver personalized, detail-driven property management across Boca Raton and surrounding communities. We preserve long-term value, elevate the resident experience, and maintain properties to the highest standards of quality and care.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-[var(--champagne-gold)] text-black px-10 py-4 rounded text-lg hover:bg-opacity-90 transition-all shadow-lg font-medium"
              >
                Request a Proposal
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-[var(--champagne-gold)] text-[var(--champagne-gold)] px-10 py-4 rounded text-lg hover:bg-[var(--champagne-gold)] hover:text-black transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Right-Side Floating Utility Icons */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--champagne-gold)]/20 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all cursor-pointer">
            <Video className="w-5 h-5 text-[var(--champagne-gold)]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--champagne-gold)]/20 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all cursor-pointer">
            <Linkedin className="w-5 h-5 text-[var(--champagne-gold)]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--champagne-gold)]/20 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all cursor-pointer">
            <Facebook className="w-5 h-5 text-[var(--champagne-gold)]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--champagne-gold)]/20 flex items-center justify-center hover:bg-[var(--champagne-gold)] hover:text-black transition-all cursor-pointer">
            <Instagram className="w-5 h-5 text-[var(--champagne-gold)]" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[var(--champagne-gold)] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-all">
            <Briefcase className="w-7 h-7 text-black" />
          </div>
        </div>

        {/* Message Widget */}
        <div className="absolute bottom-8 right-8 z-20 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 max-w-xs">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop"
            alt="Support"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm text-[#0a1929]">How can we help you today?</p>
          </div>
          <MessageCircle className="w-6 h-6 text-[var(--champagne-gold)]" />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-gradient-to-r from-[#0a1929] to-[#1a2f45]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-[var(--champagne-gold)] mb-4 uppercase tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Integrity. Reliability. Results.
          </h2>
          <p className="text-xl text-gray-300">
            Managing Properties. Building Value. Enhancing Communities.
          </p>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-[#0f1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--champagne-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[var(--champagne-gold)]">
                <svg className="w-10 h-10 text-[var(--champagne-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Community Association Management
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Expert oversight for condominiums, townhomes, and estate communities throughout South Florida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--champagne-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[var(--champagne-gold)]">
                <svg className="w-10 h-10 text-[var(--champagne-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Maintenance & Support
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive property maintenance programs designed to protect your investment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--champagne-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[var(--champagne-gold)]">
                <svg className="w-10 h-10 text-[var(--champagne-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Maximizing Property Value
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic planning and execution to enhance value and resident satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--champagne-gold)] to-[#c9a052]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 text-black" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
            Ready to Experience the Baretto Difference?
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Let us show you how boutique attention and strategic oversight can transform your community.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white px-12 py-4 rounded text-lg hover:bg-black/90 transition-all shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
