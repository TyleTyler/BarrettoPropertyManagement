import { Shield } from 'lucide-react';

export function Resources() {
  return (
    <div className="bg-[#0f1f2e] min-h-screen">
      {/* Our Mission / Results */}
      <section className="relative py-24 bg-gradient-to-r from-[#0a1929] to-[#1a2f45]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
            Our Mission
          </h1>

          <h2 className="text-3xl mb-4 text-[var(--champagne-gold)] uppercase tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Results
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We measure our success by the tangible outcomes we deliver—enhanced property values, satisfied residents, and thriving communities. We listen closely to the needs and priorities of Board members to provide thoughtful, tailored solutions that support each community’s long-term success.
          </p>
        </div>
      </section>

      {/* Our Services (selected highlights) */}
      <section className="py-16 bg-[#0f1f2e]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl mb-8 text-[var(--champagne-gold)] text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-2xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Vendor & Contractor Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We place a high priority on strategic vendor selection, contract negotiation, and performance monitoring. Our goal is to maximize value and ensure high quality while maintaining cost efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-black/40 to-[#1a2f45]/40 p-10 rounded-lg border border-[var(--champagne-gold)]/20">
              <h3 className="text-2xl mb-3 text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Meeting Coordination & Board Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our experience provides the structure, organization, and professionalism necessary to support board operations effectively. We help keep board meetings focused, efficient, and properly documented, allowing boards to make informed decisions and move forward with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section (replaces earlier resource cards) */}
      <section className="py-24 bg-gradient-to-r from-[#1a2f45] to-[#0a1929]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl mb-8 text-[var(--champagne-gold)] text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
            Advantages of partnering with Baretto Property Management
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <strong className="text-white">Boutique Industry Expertise:</strong>
              <p className="mt-2">At Baretto Property Management, we provide personalized guidance and industry best practices tailored to the unique needs of each community we serve. Our hands-on approach allows boards to operate with confidence, efficiency, and strategic direction.</p>
            </div>

            <div>
              <strong className="text-white">Dedicated Professional Support:</strong>
              <p className="mt-2">We deliver comprehensive operational support through a team of experienced professionals while managing all human resources responsibilities, including payroll, recruitment, training, and insurance. We also work collaboratively with existing on-site staff when continuity is important to the Association.</p>
            </div>

            <div>
              <strong className="text-white">Regulatory Compliance:</strong>
              <p className="mt-2">Our team helps ensure Associations remain compliant with Florida’s evolving condominium and HOA regulations by supporting proper governance, documentation, and operational procedures.</p>
            </div>

            <div>
              <strong className="text-white">Modern Technology Solutions:</strong>
              <p className="mt-2">Baretto Property Management provides modern communication and management tools designed to enhance resident engagement, streamline operations, facilitate online payments, improve security, and deliver transparent financial reporting.</p>
            </div>

            <div>
              <strong className="text-white">24/7 Responsiveness:</strong>
              <p className="mt-2">Our licensed management professionals are available around the clock to respond promptly and effectively to emergencies and urgent community matters, providing boards and residents with peace of mind.</p>
            </div>

            <div>
              <strong className="text-white">Financial Oversight & Cost Efficiency:</strong>
              <p className="mt-2">Through proactive oversight, trusted vendor partnerships, and market expertise, we identify meaningful cost-saving opportunities while maintaining a high standard of service and protecting the long-term value of the community.</p>
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
