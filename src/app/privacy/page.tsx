import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, OFFICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
};

const LAST_UPDATED = "March 1, 2025";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10 text-foreground/80 leading-relaxed">

            <div>
              <p>
                {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">1. Information We Collect</h2>
              <p className="mb-3">We may collect information about you in the following ways:</p>

              <h3 className="font-semibold text-foreground mb-2">Information You Provide Directly</h3>
              <p className="mb-3">When you contact us, submit a form, or communicate with us, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Mailing or property address</li>
                <li>Details about your real estate needs or preferences</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-2">Information Collected Automatically</h3>
              <p className="mb-3">When you visit the Site, we may automatically collect certain technical information, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>IP address and browser type</li>
                <li>Pages viewed and time spent on the Site</li>
                <li>Referring website addresses</li>
                <li>Device type and operating system</li>
                <li>Cookies and similar tracking technologies (see Section 6)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Respond to your inquiries and provide real estate services</li>
                <li>Send you property listings, market updates, or other information you have requested</li>
                <li>Communicate with you about transactions, appointments, and follow-ups</li>
                <li>Improve the content, functionality, and user experience of our Site</li>
                <li>Comply with applicable legal obligations</li>
                <li>Prevent fraudulent activity and maintain the security of our Site</li>
                <li>Send periodic emails or newsletters, if you have opted in</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">3. Sharing Your Information</h2>
              <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><span className="font-medium text-foreground">Service Providers:</span> Trusted third parties who assist us in operating our website or conducting our business (e.g., email platforms, CRM software), subject to confidentiality agreements</li>
                <li><span className="font-medium text-foreground">Legal Requirements:</span> When required by law, subpoena, court order, or governmental authority</li>
                <li><span className="font-medium text-foreground">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset</li>
                <li><span className="font-medium text-foreground">With Your Consent:</span> With any other party when you have given us explicit permission to do so</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. While we take reasonable precautions to safeguard your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, and you provide information at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">6. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-3">
                We may use cookies, web beacons, and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us recognize you on return visits and understand how you use our Site.
              </p>
              <p className="mb-3">Types of cookies we may use:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><span className="font-medium text-foreground">Essential Cookies:</span> Necessary for the Site to function properly</li>
                <li><span className="font-medium text-foreground">Analytics Cookies:</span> Help us understand how visitors interact with our Site (e.g., Google Analytics)</li>
                <li><span className="font-medium text-foreground">Preference Cookies:</span> Remember your settings and preferences</li>
              </ul>
              <p className="mt-3">
                You can control cookie settings through your browser. Note that disabling cookies may affect certain features of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">7. Third-Party Services</h2>
              <p>
                Our Site may contain links to third-party websites or integrate third-party services (such as Google Maps or social media platforms). These third parties have their own privacy policies, and we have no control over their practices. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">8. Your Rights &amp; Choices</h2>
              <p className="mb-3">Depending on your location, you may have certain rights regarding your personal information, including the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information, subject to legal limitations</li>
                <li>Opt out of marketing communications at any time by clicking &ldquo;unsubscribe&rdquo; in any email or contacting us directly</li>
                <li>Request that we limit how we use your data</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the information in Section 10 below.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently received personal information from a child under 13, we will delete that information promptly. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of the Site after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">11. Contact Us</h2>
              <p className="mb-3">If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-1">
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
              <p className="mt-4">
                You may also review our{" "}
                <Link href="/terms" className="text-accent hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
