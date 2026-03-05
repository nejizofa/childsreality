import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  DollarSign,
  PackageCheck,
  TrendingUp,
  Key,
  Building2,
  ArrowRight,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description: `Real estate guides, market insights, and helpful resources from ${SITE_NAME}. Everything you need to make informed buying and selling decisions.`,
};

const RESOURCES = [
  {
    title: "Home Buying Guide",
    description:
      "A comprehensive walkthrough of the home buying process in Utah — from pre-approval to closing day. Everything first-time and experienced buyers need to know.",
    icon: BookOpen,
    category: "Buyers",
    readTime: "12 min read",
    href: "/resources/home-buying-guide",
    isLive: true,
  },
  {
    title: "Mortgage Tips & Options",
    description:
      "Understanding your mortgage options, interest rates, down payment strategies, and how to secure the best financing for your next home purchase.",
    icon: DollarSign,
    category: "Finance",
    readTime: "8 min read",
    href: "/resources/mortgage-tips",
    isLive: true,
  },
  {
    title: "Moving Checklist",
    description:
      "Your complete moving checklist from 8 weeks out to move-in day. Stay organized and stress-free with our timeline of essential tasks and tips.",
    icon: PackageCheck,
    category: "Planning",
    readTime: "6 min read",
    href: "/resources/moving-checklist",
    isLive: true,
  },
  {
    title: "Utah Market Update",
    description:
      "Monthly analysis of Utah County and Salt Lake Valley real estate trends, median prices, inventory levels, and what it means for buyers and sellers.",
    icon: TrendingUp,
    category: "Market",
    readTime: "5 min read",
    href: "/resources/utah-market-update",
    isLive: true,
  },
  {
    title: "First-Time Buyer Programs",
    description:
      "Explore down payment assistance, FHA loans, Utah Housing programs, and other resources designed to make homeownership accessible for first-time buyers.",
    icon: Key,
    category: "Buyers",
    readTime: "10 min read",
    href: "/resources/first-time-buyers",
    isLive: true,
  },
  {
    title: "Investment Properties 101",
    description:
      "An introduction to real estate investing in Utah — rental properties, market analysis, ROI calculations, and how to build a profitable portfolio.",
    icon: Building2,
    category: "Investing",
    readTime: "15 min read",
    href: "/resources/investment-properties",
    isLive: true,
  },
  {
    title: "Home Selling Guide",
    description:
      "21 proven ways to prepare and sell your home for top dollar in Utah. From decluttering and staging to pricing strategy, offers, and closing day.",
    icon: Home,
    category: "Sellers",
    readTime: "10 min read",
    href: "/resources/home-selling-guide",
    isLive: true,
  },
];

export default function ResourcesPage() {
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
              Learn
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Resources & Guides
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Expert insights and practical guides to help you navigate the
            real estate market with confidence.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Knowledge Is <span className="text-accent">Power</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re buying your first home, selling a property, or
              exploring investment opportunities, our resource library is
              designed to keep you informed and empowered at every step.
            </p>
          </div>

          {/* Resource Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((resource) => {
              const cardContent = (
                <Card
                  className={`group border-border/50 hover:border-accent/30 hover:shadow-lg transition-all relative overflow-hidden h-full${resource.isLive ? " cursor-pointer" : ""}`}
                >
                  <CardContent className="p-8">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      {resource.isLive ? (
                        <ArrowRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <Badge variant="accent" className="text-[10px] uppercase tracking-wider">
                          Coming Soon
                        </Badge>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <resource.icon className="h-7 w-7 text-accent" />
                    </div>

                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {resource.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {resource.readTime}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              );

              return resource.isLive && resource.href ? (
                <Link key={resource.title} href={resource.href} className="block">
                  {cardContent}
                </Link>
              ) : (
                <div key={resource.title}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
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
            Stay <span className="text-accent">Informed</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            New guides and market updates are on the way. In the meantime,
            reach out if you have any questions about buying, selling, or the
            Utah real estate market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Ask Us Anything</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
