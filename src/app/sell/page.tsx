import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Camera,
  Megaphone,
  Handshake,
  ClipboardCheck,
  MessageSquare,
  BarChart3,
  Sparkles,
  Users,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME } from "@/lib/constants";
import { ValuationForm } from "./_components/ValuationForm";

export const metadata: Metadata = {
  title: "Sell Your Home",
  description: `List and sell your home with ${SITE_NAME}. Get a free market analysis, professional marketing, and expert guidance throughout the selling process.`,
};

const SELLING_STEPS = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We meet to discuss your goals, timeline, and expectations. We'll walk through your home and outline a personalized selling strategy.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Market Analysis",
    description:
      "Our team prepares a comprehensive comparative market analysis to determine the optimal listing price based on current market conditions and recent sales.",
    icon: BarChart3,
  },
  {
    step: 3,
    title: "Staging & Photos",
    description:
      "We coordinate professional staging, photography, drone footage, and virtual tours to showcase your home at its absolute best.",
    icon: Camera,
  },
  {
    step: 4,
    title: "Listing & Marketing",
    description:
      "Your property goes live across the MLS, major portals, social media, and our exclusive network. We execute a targeted digital marketing campaign to maximize exposure.",
    icon: Megaphone,
  },
  {
    step: 5,
    title: "Showings & Offers",
    description:
      "We manage all showings, gather feedback, and present offers with expert analysis. Our negotiation skills ensure you get the best possible terms.",
    icon: ClipboardCheck,
  },
  {
    step: 6,
    title: "Closing",
    description:
      "We coordinate with title, escrow, inspectors, and lenders to ensure a smooth closing. We're by your side through every final detail until keys are handed over.",
    icon: Handshake,
  },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description:
      "Deep understanding of Utah County market trends, pricing strategies, and neighborhood dynamics to position your home for maximum value.",
  },
  {
    icon: Sparkles,
    title: "Professional Marketing",
    description:
      "High-end photography, drone footage, virtual tours, and targeted digital campaigns backed by the Berkshire Hathaway brand.",
  },
  {
    icon: Users,
    title: "Negotiation Skills",
    description:
      "Proven track record of securing top-dollar offers. We advocate fiercely for your interests at every stage of the negotiation.",
  },
  {
    icon: Home,
    title: "Concierge Service",
    description:
      "From staging consultations to contractor referrals and moving logistics, we handle the details so you can focus on what's next.",
  },
];

export default function SellPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Sellers
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Sell Your Home
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From pricing strategy to closing day, we provide the expertise and
            marketing power to sell your home for top dollar.
          </p>
        </div>
      </section>

      {/* Valuation Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
                What&apos;s Your Home{" "}
                <span className="text-accent">Worth?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get a complimentary, no-obligation market analysis of your
                property. Our team will evaluate comparable sales, current
                conditions, and unique features to provide an accurate
                assessment of your home&apos;s value.
              </p>
              <div className="space-y-3">
                {[
                  "Detailed comparative market analysis",
                  "Current market conditions & trends",
                  "Strategic pricing recommendations",
                  "Personalized selling timeline",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading text-lg font-semibold text-primary mb-6">
                  Request Your Free Valuation
                </h3>
                <ValuationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selling Process Timeline */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                The Process
              </span>
              <div className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Your Selling Journey,{" "}
              <span className="text-accent">Step by Step</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve refined our selling process to be transparent,
              efficient, and focused on achieving the best possible outcome for
              you.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {SELLING_STEPS.map((step, idx) => (
                <div key={step.step} className="relative flex gap-6 md:gap-8">
                  {/* Numbered circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-sm">
                      <span className="font-heading text-lg md:text-xl font-semibold text-accent">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <Card
                    className={`flex-1 border-border/50 ${
                      idx === SELLING_STEPS.length - 1 ? "" : "mb-0"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <h3 className="font-heading text-lg font-semibold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                Why Choose Us
              </span>
              <div className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              The {SITE_NAME}{" "}
              <span className="text-accent">Advantage</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => (
              <Card
                key={benefit.title}
                className="text-center border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to <span className="text-accent">List Your Property?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your selling goals and create a strategy
            tailored to your timeline and expectations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
