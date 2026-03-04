import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Fair Housing Statement | ${SITE_NAME}`,
  description:
    "Our commitment to equal housing opportunity and fair housing practices in Utah real estate.",
};

export default function FairHousingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6">
            <Shield className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Fair Housing Statement
          </h1>
          <p className="text-white/70 text-lg">
            Our commitment to equal housing opportunity for all.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Equal Opportunity Pledge */}
          <div>
            <h2 className="font-heading text-2xl text-foreground font-semibold mb-4">
              Our Pledge
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We are pledged to the letter and spirit of U.S. policy for the achievement of equal
              housing opportunity throughout the nation. We encourage and support an affirmative
              advertising and marketing program in which there are no barriers to obtaining housing
              because of race, color, religion, sex, handicap, familial status, or national origin.
            </p>
          </div>

          {/* Federal Protections */}
          <div>
            <h2 className="font-heading text-2xl text-foreground font-semibold mb-4">
              Federal Fair Housing Act
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Fair Housing Act prohibits discrimination in the sale, rental, and financing of
              housing based on the following protected classes:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Race",
                "Color",
                "National origin",
                "Religion",
                "Sex",
                "Familial status (including children under the age of 18 living with parents or legal custodians, pregnant women, and people securing custody of children under the age of 18)",
                "Handicap (disability)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Utah Protections */}
          <div>
            <h2 className="font-heading text-2xl text-foreground font-semibold mb-4">
              Utah State Protections
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to federal protections, the State of Utah prohibits discrimination in
              housing based on:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Source of income",
                "Sexual orientation",
                "Gender identity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* File a Complaint */}
          <div className="bg-muted rounded-xl p-6">
            <h2 className="font-heading text-2xl text-foreground font-semibold mb-3">
              File a Complaint
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you believe you have been discriminated against in the sale, rental, or financing
              of a home, you may contact the U.S. Department of Housing and Urban Development (HUD):
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Phone:</span>{" "}
                <a href="tel:18006699777" className="text-primary hover:underline">
                  1-800-669-9777
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Website:</span>{" "}
                <a
                  href="https://www.hud.gov/fairhousing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  hud.gov/fairhousing
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
