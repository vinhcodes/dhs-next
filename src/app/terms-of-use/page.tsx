import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | DHS Services - Tampa Bay Painting',
  description: 'Terms of use for DHS Services, professional painting services in Tampa Bay. Review our service terms and conditions.',
  openGraph: {
    title: 'Terms of Use | DHS Services',
    description: 'Terms of use for DHS Services, professional painting services in Tampa Bay.',
    url: '/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the services of DHS Services ("we," "our," "us"), you accept and agree to be bound by 
                these Terms of Use. If you do not agree to these terms, please do not use our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Our Services</h2>
              <p className="text-gray-700 mb-4">
                DHS Services provides professional painting services in the Tampa Bay area, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Interior painting services</li>
                <li>Exterior painting services</li>
                <li>Cabinet makeover and refinishing</li>
                <li>Garage floor painting and coating</li>
                <li>Pool painting and restoration</li>
                <li>Fence painting and staining</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Estimates and Contracts</h2>
              <p className="text-gray-700 mb-4">
                All estimates provided are for informational purposes and are subject to change upon inspection of the property. 
                Final pricing will be confirmed in a written contract before work begins.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Estimates are valid for 30 days from the date of issuance</li>
                <li>All work requires a signed contract before commencement</li>
                <li>Changes to the scope of work may result in additional charges</li>
                <li>Payment terms will be specified in the contract</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a customer, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate information about the property and project requirements</li>
                <li>Ensure safe and reasonable access to work areas</li>
                <li>Remove or protect personal belongings in work areas</li>
                <li>Inform us of any hazardous materials or conditions on the property</li>
                <li>Make timely payments according to the agreed schedule</li>
                <li>Communicate any concerns or changes promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Our Responsibilities</h2>
              <p className="text-gray-700 mb-4">DHS Services commits to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide professional, quality painting services</li>
                <li>Use high-quality materials and proper techniques</li>
                <li>Maintain appropriate insurance coverage</li>
                <li>Complete work in a timely manner as agreed</li>
                <li>Clean up work areas upon completion</li>
                <li>Honor our warranty terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Warranty</h2>
              <p className="text-gray-700 mb-4">
                We provide a warranty on our workmanship for a period of one (1) year from completion date, subject to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Normal wear and tear exclusions</li>
                <li>Proper maintenance by the property owner</li>
                <li>No alterations by third parties</li>
                <li>Environmental factors beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                DHS Services' liability is limited to the cost of the services provided. We are not liable for indirect, 
                consequential, or punitive damages. Our total liability shall not exceed the amount paid for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cancellation and Changes</h2>
              <p className="text-gray-700 mb-4">
                Cancellation and change policies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Projects may be cancelled with 48 hours notice</li>
                <li>Cancellation fees may apply for materials already ordered</li>
                <li>Scope changes must be agreed upon in writing</li>
                <li>Weather-related delays are beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on our website, including text, images, logos, and design, is the property of DHS Services 
                and is protected by intellectual property laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of the State of Florida. Any disputes will be resolved in the 
                courts of Florida, and you consent to the jurisdiction of such courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be posted on our website with 
                an updated "last updated" date. Continued use of our services constitutes acceptance of revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms or our services, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>DHS Services</strong></p>
                <p className="text-gray-700 mb-2">Email: dhsolus@gmail.com</p>
                <p className="text-gray-700 mb-2">Phone: (727) 614-5087</p>
                <p className="text-gray-700">Service Area: Tampa Bay Area, Florida</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}