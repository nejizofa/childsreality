import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, OFFICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Accessibility Statement | ${SITE_NAME}`,
  description: `Accessibility Statement for ${SITE_NAME}. We are committed to ensuring our website is accessible to everyone.`,
};

const LAST_UPDATED = "March 1, 2025";

export default function AccessibilityPage() {
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
            Accessibility Statement
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
                {SITE_NAME} is committed to ensuring that our website is accessible to all users, including individuals with disabilities. We strive to provide an inclusive and barrier-free digital experience that conforms to recognized accessibility standards.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Our Commitment</h2>
              <p>
                We are actively working to increase the accessibility and usability of our website in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with disabilities, including those with visual, auditory, physical, speech, cognitive, and neurological disabilities.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Measures We Take</h2>
              <p className="mb-3">To support accessibility, {SITE_NAME} takes the following measures:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Include accessibility as part of our website design and development process</li>
                <li>Provide text alternatives for non-text content such as images and icons</li>
                <li>Ensure sufficient color contrast between text and background elements</li>
                <li>Use clear and consistent navigation throughout the Site</li>
                <li>Design pages to be navigable using a keyboard alone</li>
                <li>Use semantic HTML to improve compatibility with assistive technologies such as screen readers</li>
                <li>Ensure all form fields are properly labeled</li>
                <li>Avoid content that flashes more than three times per second</li>
                <li>Provide descriptive link text so users understand the purpose of each link</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Known Limitations</h2>
              <p>
                While we strive to meet WCAG 2.1 Level AA standards, some content on our Site may not yet fully conform. We are continuously working to identify and address accessibility issues. Third-party content, such as embedded maps, video players, or external listing tools, may not meet the same standards and may be outside our direct control.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Assistive Technologies</h2>
              <p className="mb-3">Our website is designed to be compatible with the following assistive technologies:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Screen readers (such as NVDA, JAWS, and VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Alternative input devices</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Browser &amp; Device Compatibility</h2>
              <p>
                Our Site is designed to work with modern browsers including Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge, across desktop and mobile devices. For the best experience, we recommend keeping your browser and operating system up to date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Feedback &amp; Contact</h2>
              <p className="mb-3">
                We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers, experience difficulty accessing any content, or need information in an alternative format, please contact us. We aim to respond to accessibility feedback within 2 business days.
              </p>
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
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-3">Formal Complaints</h2>
              <p>
                We are committed to resolving accessibility concerns in a timely and respectful manner. If you are not satisfied with our response, you may contact the U.S. Department of Justice&apos;s Americans with Disabilities Act (ADA) Information Line at 1-800-514-0301 (voice) or 1-800-514-0383 (TTY).
              </p>
            </div>

            <div className="pt-2 border-t border-border/40">
              <p className="text-sm text-muted-foreground">
                You may also review our{" "}
                <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
