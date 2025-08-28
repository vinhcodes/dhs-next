import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DHS Services - Tampa Bay Painting',
  description: 'Privacy policy for DHS Services, professional painting services in Tampa Bay. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | DHS Services',
    description: 'Privacy policy for DHS Services, professional painting services in Tampa Bay.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                At DHS Services, we collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Request a painting estimate or consultation</li>
                <li>Contact us through our website, phone, or email</li>
                <li>Schedule our painting services</li>
                <li>Interact with us on social media platforms</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This information may include your name, email address, phone number, property address, 
                and details about your painting project requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate painting estimates and consultations</li>
                <li>Schedule and perform interior and exterior painting services</li>
                <li>Communicate with you about your project status and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our painting services and customer experience</li>
                <li>Send you relevant information about our services (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To trusted service providers who assist us in operating our business (e.g., payment processors)</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>To professional advisors such as lawyers and accountants</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All third parties are contractually obligated to keep your information confidential and secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Website Analytics</h2>
              <p className="text-gray-700">
                Our website may use cookies and similar technologies to improve your browsing experience and analyze 
                website traffic. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new privacy policy on this page with an updated "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this privacy policy or our data practices, please contact us:
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