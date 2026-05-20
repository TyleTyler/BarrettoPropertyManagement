import { FileText, Download, BookOpen, Shield } from 'lucide-react';

export function Resources() {
  return (
    <div className="bg-[#0f1f2e] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#0a1929] to-[#1a2f45]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
            Resources
          </h1>
          <p className="text-xl text-[var(--champagne-gold)]">
            Helpful Information for Property Owners and Board Members
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-[#0f1f2e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Resource Card 1 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                    Board Member Guide
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Comprehensive guide for new and experienced board members covering responsibilities, best practices, and effective governance strategies.
                  </p>
                  <button className="text-[var(--champagne-gold)] hover:text-white transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                    Florida HOA Laws
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Essential information about Florida statutes governing homeowners associations, condominium associations, and cooperative housing.
                  </p>
                  <button className="text-[var(--champagne-gold)] hover:text-white transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                    Hurricane Preparedness
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Complete hurricane readiness checklist and emergency procedures for South Florida coastal communities.
                  </p>
                  <button className="text-[var(--champagne-gold)] hover:text-white transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Resource Card 4 */}
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20 hover:border-[var(--champagne-gold)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl mb-4 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                    Financial Best Practices
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Guidelines for budgeting, reserve planning, and financial oversight to ensure your community's fiscal health.
                  </p>
                  <button className="text-[var(--champagne-gold)] hover:text-white transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a2f45] to-[#0a1929]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl mb-12 text-[var(--champagne-gold)] text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                What size communities do you manage?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We work with communities of all sizes, from intimate townhome associations to large high-rise condominiums. Our boutique approach ensures personalized attention regardless of property size.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                How are management fees structured?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our fee structure is transparent and customized based on your community's specific needs and service requirements. We provide detailed proposals during our consultation process.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                What technology platforms do you use?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We utilize industry-leading property management software that provides online portals for board members and residents, digital document management, and real-time financial reporting.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                How quickly can you respond to emergencies?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our team provides 24/7 emergency response coverage. We maintain relationships with trusted vendors who can respond immediately to urgent situations.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                What is your contract term?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We typically work with annual contracts, though terms can be customized. We believe in earning your business every day through exceptional service, not long-term lock-ins.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                How do you handle the transition from our current management company?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We have a proven transition process that ensures seamless handover of all documents, vendor contracts, financial records, and community operations with minimal disruption to residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Center */}
      <section className="py-24 bg-[#0f1f2e]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8 text-[var(--champagne-gold)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Need Additional Information?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our team is here to answer your questions and provide guidance on any property management topic. We believe informed communities make better decisions.
          </p>
          <button className="bg-[var(--champagne-gold)] text-black px-10 py-4 rounded text-lg hover:bg-opacity-90 transition-all shadow-lg font-medium">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
