import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, OFFICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Terms of Service for ${SITE_NAME}. Please read these terms carefully before using our website.`,
};

const LAST_UPDATED = "March 1, 2025";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl text-white leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-10 text-foreground/80 leading-relaxed">

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website located at this domain (the &ldquo;Site&rdquo;), operated by {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Site.
              </p>
              <p className="mt-3">
                We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">2. Use of the Site</h2>
              <p>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You agree not to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li>Use the Site in any way that violates applicable federal, state, local, or international laws or regulations</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
                <li>Attempt to gain unauthorized access to any portion of the Site or any systems connected to the Site</li>
                <li>Interfere with or disrupt the integrity or performance of the Site</li>
                <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Site without express written permission</li>
                <li>Use any automated tools, bots, scrapers, or data mining techniques to extract data from the Site</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">3. Intellectual Property</h2>
              <p>
                All content on this Site — including but not limited to text, graphics, logos, images, photographs, and software — is the property of {SITE_NAME} or its content suppliers and is protected by applicable copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-3">
                You may view, download, and print content from this Site for your personal, non-commercial use only. Any other use, including reproduction, modification, distribution, or republication, without our prior written consent is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">4. Real Estate Information &amp; Disclaimers</h2>
              <p>
                The information provided on this Site, including property listings, market data, valuations, and neighborhood information, is for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
              </p>
              <p className="mt-3">
                Property listings are subject to change, sale, or withdrawal without notice. Square footage, lot size, and other property details are approximate. You should independently verify all information before making any real estate decisions. {SITE_NAME} is not responsible for any errors, omissions, or results obtained from the use of this information.
              </p>
              <p className="mt-3">
                Nothing on this Site constitutes legal, financial, or investment advice. Consult a licensed attorney, financial advisor, or tax professional before making real estate investment decisions.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">5. MLS &amp; Listing Data</h2>
              <p>
                Property data displayed on this Site may be sourced from the Multiple Listing Service (MLS). Such data is provided for personal, non-commercial use only. You may not redistribute, retransmit, publish, or otherwise reproduce MLS data without the express written permission of the applicable MLS.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">6. Third-Party Links</h2>
              <p>
                This Site may contain links to third-party websites or services that are not owned or controlled by {SITE_NAME}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. We strongly advise you to read the terms and privacy policy of any third-party site you visit.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">7. Privacy Policy</h2>
              <p>
                Your use of this Site is also governed by our{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">8. Disclaimer of Warranties</h2>
              <p>
                This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, {SITE_NAME} and its agents, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising out of or in connection with your use of, or inability to use, the Site or its content, even if advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless {SITE_NAME} and its agents, employees, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Utah County, Utah.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">12. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><span className="font-medium text-foreground">{SITE_NAME}</span></p>
                <p>{OFFICE.address}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${OFFICE.email}`} className="text-accent hover:underline">
                    {OFFICE.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={`tel:${OFFICE.phone}`} className="text-accent hover:underline">
                    {OFFICE.phone}
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
