import type { Metadata } from "next";
import Link from "next/link";
import {
  Key,
  DollarSign,
  ShieldCheck,
  Home,
  FileText,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `First-Time Buyer Programs | ${SITE_NAME}`,
  description:
    "Easy-to-understand guide for first-time home buyers in Utah — programs, down payment help, what to expect, and how to get started.",
};

const STEPS = [
  {
    number: "01",
    title: "Check Your Credit Score",
    body: "Your credit score is one of the first things a lender looks at. A score of 620 or higher qualifies you for most conventional loans. A score of 580+ qualifies for FHA loans. Don't know your score? Check for free at annualcreditreport.com. If your score needs work, pay down credit card balances and avoid opening new accounts for 6 months before applying.",
    tip: "Even a 20-point improvement in your credit score can save you thousands in interest over the life of your loan.",
  },
  {
    number: "02",
    title: "Figure Out What You Can Afford",
    body: "A good rule of thumb: your total monthly housing payment (mortgage, taxes, insurance) should be no more than 28% of your gross monthly income. For example, if you earn $6,000/month, aim for a payment under $1,680. Use an online mortgage calculator to estimate payments at different price points before you start shopping.",
    tip: "Don't forget to budget for property taxes (~0.6% of home value in Utah), homeowners insurance (~$1,200/year), and HOA fees if applicable.",
  },
  {
    number: "03",
    title: "Get Pre-Approved",
    body: "Pre-approval is a letter from a lender saying they'll loan you up to a certain amount. It's not a guarantee, but it shows sellers you're serious. To get pre-approved, you'll need: 2 years of tax returns, recent pay stubs, 2–3 months of bank statements, and a government-issued ID. Pre-approval usually takes 1–3 business days.",
    tip: "Get pre-approved before you start home shopping — in Utah's competitive market, sellers often won't consider offers without it.",
  },
  {
    number: "04",
    title: "Understand Your Down Payment Options",
    body: "You don't need 20% down. Many first-time buyers put down 3–5%. The trade-off is that with less than 20% down, you'll pay Private Mortgage Insurance (PMI), which typically adds $50–$200/month to your payment until you've built 20% equity. Some programs allow 0% or 3.5% down — see the programs section below.",
    tip: "Putting more down lowers your monthly payment and eliminates PMI faster, but make sure you keep enough cash for closing costs and an emergency fund.",
  },
  {
    number: "05",
    title: "Find a Real Estate Agent",
    body: "As a buyer, you don't pay your agent's commission — the seller does. A good buyer's agent will help you find homes, negotiate the price, guide you through inspections, and protect your interests all the way to closing. Interview a couple of agents and choose someone who knows the local market well and communicates clearly.",
    tip: "Ask your agent: How many buyers have you worked with in the last 6 months? What neighborhoods do you know best? How do you communicate — phone, text, email?",
  },
  {
    number: "06",
    title: "Make an Offer",
    body: "When you find the right home, your agent will help you write an offer. This includes the price you're offering, your earnest money deposit (typically 1–2% of purchase price), and any contingencies — like a home inspection or financing contingency that lets you back out if something goes wrong. In a competitive market, your agent may advise offering at or above asking price.",
    tip: "Don't skip the inspection contingency to win a bidding war. A home inspection ($300–$500) could reveal problems that cost tens of thousands to fix.",
  },
  {
    number: "07",
    title: "Get a Home Inspection",
    body: "After your offer is accepted, hire a licensed home inspector ($300–$500) to check the roof, foundation, electrical, plumbing, HVAC, and more. The inspector will give you a detailed report. You can use this to negotiate repairs with the seller or, in some cases, walk away from the deal entirely.",
    tip: "Attend the inspection in person. You'll learn a lot about the home, and the inspector can answer questions on the spot.",
  },
  {
    number: "08",
    title: "Close on Your Home",
    body: "Closing is the final step. You'll sign a lot of documents (usually 30–50 pages), pay your closing costs (typically 2–5% of the loan amount), and receive your keys. Budget for closing costs separately from your down payment — they can add up quickly. Your lender will provide a Closing Disclosure 3 business days before closing that breaks down every cost.",
    tip: "Review your Closing Disclosure carefully and compare it to your original Loan Estimate. Costs should be very close — ask your lender to explain any differences.",
  },
];

const PROGRAMS = [
  {
    name: "FHA Loan",
    icon: Home,
    downPayment: "3.5% down",
    creditMin: "580+ credit score",
    tag: "Most Popular",
    tagColor: "bg-accent/10 text-accent",
    description:
      "Backed by the Federal Housing Administration. The most popular choice for first-time buyers because it's easier to qualify for. You'll pay a Mortgage Insurance Premium (MIP) for the life of the loan if you put less than 10% down.",
    bestFor: "Buyers with less-than-perfect credit or limited savings.",
  },
  {
    name: "Conventional 97",
    icon: FileText,
    downPayment: "3% down",
    creditMin: "620+ credit score",
    tag: "Low Down Payment",
    tagColor: "bg-emerald-100 text-emerald-700",
    description:
      "A conventional loan with just 3% down. PMI is required but can be removed once you reach 20% equity — unlike FHA loans. Often has lower long-term costs than FHA if your credit is strong.",
    bestFor: "Buyers with good credit who want to build equity faster.",
  },
  {
    name: "Utah Housing Corp (UHC)",
    icon: ShieldCheck,
    downPayment: "Down payment assistance",
    creditMin: "620+ credit score",
    tag: "Utah-Specific",
    tagColor: "bg-primary/10 text-primary",
    description:
      "Utah's state housing authority offers down payment assistance loans to cover your 3.5% FHA down payment. This means you can potentially buy a home with little to no money out of pocket (excluding closing costs).",
    bestFor: "Utah buyers who have income but limited savings for a down payment.",
  },
  {
    name: "HUD Good Neighbor Next Door",
    icon: Key,
    downPayment: "50% off list price",
    creditMin: "Varies",
    tag: "For Select Professions",
    tagColor: "bg-blue-100 text-blue-700",
    description:
      "Teachers, law enforcement officers, firefighters, and EMTs can buy HUD-owned homes at a 50% discount in designated areas. You must commit to living in the home for 36 months.",
    bestFor: "Teachers, police, firefighters, and EMTs buying in eligible areas.",
  },
  {
    name: "VA Loan",
    icon: ShieldCheck,
    downPayment: "0% down",
    creditMin: "Typically 620+",
    tag: "Veterans & Military",
    tagColor: "bg-blue-100 text-blue-700",
    description:
      "For active-duty military, veterans, and surviving spouses. No down payment required and no PMI — one of the best mortgage products available. Backed by the Department of Veterans Affairs.",
    bestFor: "Active military, veterans, and eligible surviving spouses.",
  },
  {
    name: "USDA Loan",
    icon: Home,
    downPayment: "0% down",
    creditMin: "Typically 640+",
    tag: "Rural Areas",
    tagColor: "bg-emerald-100 text-emerald-700",
    description:
      "No down payment required for homes in USDA-eligible rural and suburban areas. Parts of Utah County (including some areas near Eagle Mountain and Santaquin) may qualify. Income limits apply.",
    bestFor: "Buyers purchasing in rural or suburban areas within USDA-eligible zones.",
  },
];

const MYTHS = [
  {
    myth: "\"I need 20% down to buy a home.\"",
    truth: "Most first-time buyers put down 3–5%. Programs like FHA and Utah Housing can reduce that even further. The 20% figure eliminates PMI, but it's not a requirement.",
  },
  {
    myth: "\"My credit isn't good enough.\"",
    truth: "FHA loans accept scores as low as 580. If your score is between 500–579, you may still qualify with 10% down. Working with a lender to improve your score by even 20–40 points can make a big difference.",
  },
  {
    myth: "\"Renting is always cheaper than buying.\"",
    truth: "In many Utah cities, monthly mortgage payments are comparable to rent — and every payment builds equity. Over time, you're building wealth instead of paying someone else's mortgage.",
  },
  {
    myth: "\"I should wait for prices to drop.\"",
    truth: "Trying to time the market is risky. Utah home values have consistently appreciated over the long term. Waiting often means paying more later, and you miss out on equity-building in the meantime.",
  },
];

export default function FirstTimeBuyersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
        }}
      >
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
              Buyers
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
            <Key className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            First-Time Buyer Guide
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about buying your first home in Utah —
            explained simply, without the jargon.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Intro */}
        <section className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-6 w-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                The Bottom Line
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Buying your first home feels overwhelming — but it doesn&apos;t have to be. The process
                has clear steps, and you don&apos;t have to figure them out alone. Most first-time buyers
                are surprised to find they can afford more than they thought, and that getting started
                is easier than expected. This guide walks you through the whole process in plain English.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            The 8 Steps to Buying Your First Home
          </h2>
          <p className="text-muted-foreground mb-10">Follow these steps in order — each one builds on the last.</p>

          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                {/* Step number */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-semibold text-sm">
                  {step.number}
                </div>
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{step.body}</p>
                  <div className="flex items-start gap-2 bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                    <Lightbulb className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            First-Time Buyer Programs
          </h2>
          <p className="text-muted-foreground mb-10">
            You may qualify for programs that reduce your down payment, lower your rate, or provide
            direct assistance. Here are the most common options in Utah.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {PROGRAMS.map((program) => (
              <div key={program.name} className="bg-white border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <program.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{program.name}</h3>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${program.tagColor}`}>
                    {program.tag}
                  </span>
                </div>
                <div className="flex gap-4 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" /> {program.downPayment}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> {program.creditMin}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{program.description}</p>
                <p className="text-xs text-accent font-medium">Best for: {program.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Myths */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            Common Myths — Busted
          </h2>
          <p className="text-muted-foreground mb-8">
            Don&apos;t let misinformation stop you from buying. Here are the most common things
            first-time buyers get wrong.
          </p>
          <div className="space-y-5">
            {MYTHS.map((item) => (
              <div key={item.myth} className="bg-white border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="font-medium text-foreground">{item.myth}</p>
                </div>
                <div className="flex items-start gap-3 ml-8">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Glossary */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            Terms You&apos;ll Hear (Plain English)
          </h2>
          <p className="text-muted-foreground mb-8">Real estate has a lot of jargon. Here&apos;s what it actually means.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { term: "Pre-Approval", def: "A lender's written commitment to loan you up to a certain amount, based on your finances." },
              { term: "Earnest Money", def: "A deposit (1–2% of price) you put down to show the seller you're serious. It goes toward your down payment at closing." },
              { term: "Contingency", def: "A condition that must be met for the sale to go through — like a home inspection or financing approval." },
              { term: "Closing Costs", def: "Fees you pay at closing beyond the down payment — typically 2–5% of the loan. Includes lender fees, title insurance, and prepaid taxes." },
              { term: "PMI", def: "Private Mortgage Insurance. A monthly fee added to your payment when you put less than 20% down. It protects the lender, not you." },
              { term: "Appraisal", def: "A professional estimate of the home's market value, required by your lender to make sure you're not overpaying." },
              { term: "Equity", def: "The portion of the home you actually own. If your home is worth $500K and you owe $400K, you have $100K in equity." },
              { term: "Title Insurance", def: "Protects you (and your lender) if someone later claims ownership of the property. Required at closing." },
            ].map((item) => (
              <div key={item.term} className="bg-white border border-border rounded-lg px-5 py-4 shadow-sm">
                <p className="font-semibold text-foreground text-sm mb-1">{item.term}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick checklist */}
        <section className="bg-muted/40 rounded-2xl p-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
            Before You Start — Quick Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Check your credit score (aim for 620+)",
              "Calculate your monthly budget (28% rule)",
              "Save for down payment (3–5% minimum)",
              "Save for closing costs (2–5% of loan)",
              "Keep 3 months of expenses in emergency fund",
              "Gather documents: pay stubs, tax returns, bank statements",
              "Avoid opening new credit accounts",
              "Research first-time buyer programs you may qualify for",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Take the <span className="text-accent">First Step?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We work with first-time buyers every day and love helping people get
            into their first home. Reach out — we&apos;ll answer your questions and
            help you figure out where to start.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Talk to an Agent</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
              <Link href="/resources">
                More Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
