import {
  Users,
  FileText,
  ClipboardCheck,
  DollarSign,
  Headphones,
  Handshake,
  Calendar,
  Building
} from 'lucide-react';

export function Services() {
  return (
    <div className="bg-[#0f1f2e] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#0a1929] to-[#1a2f45]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
            Our Services
          </h1>
          <p className="text-xl text-[var(--champagne-gold)]">
            Comprehensive Property Management Solutions Tailored to Your Community
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0f1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Full-time & Part-time Property Managers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Dedicated professionals who serve as your on-site or remote liaison, ensuring daily operations run smoothly and efficiently.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Document Governance & Compliance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Expert management of governing documents, ensuring your community remains compliant with state and local regulations.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Personnel Supervision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive oversight of maintenance staff, contractors, and vendors to maintain consistent service quality.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Financial Management & Reporting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transparent budgeting, detailed financial reporting, and strategic planning to protect your community's fiscal health.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Resident Communications
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Timely, professional resident relations that foster community engagement and address concerns with care.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Vendor & Contractor Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Strategic vendor selection, contract negotiation, and performance monitoring to maximize value.
              </p>
            </div>

            {/* Service Card 7 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Meeting Coordination & Board Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Professional facilitation of board meetings, agenda preparation, and accurate minute-taking services.
              </p>
            </div>

            {/* Service Card 8 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-8 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="w-14 h-14 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Property Maintenance & Capital Planning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Proactive maintenance programs and long-term capital improvement planning to preserve property value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a2f45] to-[#0a1929]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl mb-12 text-[var(--champagne-gold)] text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Our Service Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Customized Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                No two communities are alike. We take the time to understand your specific needs, challenges, and goals, then tailor our services accordingly.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Proactive Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We don't wait for problems to arise. Our team anticipates issues and implements preventive measures to keep your community running smoothly.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Transparent Communication
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Regular updates, detailed reporting, and open lines of communication ensure board members and residents always know what's happening.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Long-term Value Focus
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every decision we make is evaluated through the lens of long-term property value and community sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
