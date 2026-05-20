import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    community: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0f1f2e] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#0a1929] to-[#1a2f45]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
            Contact Us
          </h1>
          <p className="text-xl text-[var(--champagne-gold)]">
            Let's Discuss How We Can Serve Your Community
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-[#0f1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-8 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We welcome the opportunity to learn about your community and demonstrate how Baretto Property Management can serve as your trusted partner.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      Location
                    </h3>
                    <p className="text-gray-300">
                      Boca Raton, Florida<br />
                      Serving South Florida Communities
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      Phone
                    </h3>
                    <p className="text-gray-300">
                      (555) 555-0199
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      Email
                    </h3>
                    <p className="text-gray-300">
                      info@barettopm.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      Business Hours
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      24/7 Emergency Response Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Request Form */}
            <div>
              <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20">
                <h3 className="text-3xl mb-8 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                  Request a Proposal
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="community" className="block mb-2 text-gray-300">
                      Community/Property Name *
                    </label>
                    <input
                      type="text"
                      id="community"
                      name="community"
                      value={formData.community}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-300">
                      Tell Us About Your Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[var(--champagne-gold)] focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--champagne-gold)] text-black py-4 rounded hover:bg-opacity-90 transition-all text-lg font-medium"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Us Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a2f45] to-[#0a1929]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl mb-16 text-[var(--champagne-gold)] text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Why Choose Baretto Property Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Boutique Attention
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Unlike large-scale management firms, we intentionally limit our portfolio to ensure every community receives the personalized attention it deserves. You're never just a number.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Strategic Oversight
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our leadership team brings extensive experience in operations, finance, and community relations, providing you with strategic guidance that extends far beyond day-to-day tasks.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Local Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Deep roots in Boca Raton and South Florida mean we understand the unique needs of coastal communities, from hurricane preparedness to local regulatory requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Proactive Communication
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in keeping boards and residents informed through regular updates, transparent reporting, and responsive service that builds trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Technology-Enabled
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Modern management portals, digital communication tools, and streamlined processes make it easy to access information and stay connected.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Proven Track Record
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our client retention speaks for itself. Communities trust us year after year because we consistently deliver results and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
