import type { Metadata } from "next";
import Link from "next/link";
import {
  PackageCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Moving Checklist | ${SITE_NAME}`,
  description:
    "Your complete moving checklist from 8 weeks out to move-in day. Stay organized and stress-free with our timeline of essential tasks.",
};

const CHECKLIST = [
  {
    timeframe: "8 Weeks Before Moving",
    color: "bg-accent",
    items: [
      "Create a moving binder or digital folder to track tasks, receipts, and contacts",
      "Set a moving budget and research moving company quotes",
      "Book your moving company or reserve a moving truck",
      "Start decluttering — donate, sell, or discard items you won't need",
      "Notify your employer of your new address",
      "Research schools, doctors, dentists, and other services in your new area",
      "Contact your insurance agent about coverage during the move",
    ],
  },
  {
    timeframe: "6 Weeks Before Moving",
    color: "bg-primary",
    items: [
      "Order moving supplies: boxes, packing tape, bubble wrap, labels, markers",
      "Begin packing non-essential and seasonal items",
      "Take photos or video of electronics setups before disassembling",
      "Arrange for childcare or pet care on moving day",
      "Request school records and medical records to transfer",
      "Start using up pantry items to reduce what you need to move",
      "Notify your bank and credit card companies of your upcoming address change",
    ],
  },
  {
    timeframe: "4 Weeks Before Moving",
    color: "bg-accent",
    items: [
      "Submit a change of address with USPS at usps.com",
      "Update your address with: DMV, IRS, Social Security Administration",
      "Notify subscriptions, magazines, and memberships of new address",
      "Schedule transfer or setup of utilities at new home (electric, gas, water, internet)",
      "Cancel or transfer utilities at current home",
      "Confirm moving company details and finalize logistics",
      "Continue packing — label every box with contents and destination room",
    ],
  },
  {
    timeframe: "2 Weeks Before Moving",
    color: "bg-primary",
    items: [
      "Return borrowed items and collect anything lent to others",
      "Pick up any items from cleaners, storage, or repair shops",
      "Dispose of hazardous materials you can't move (paint, propane, chemicals)",
      "Confirm time and details with your moving company",
      "Pack a \"first night\" bag with essentials (toiletries, clothes, phone charger, medications)",
      "Disassemble large furniture that won't fit through doors",
      "Clean out and defrost the refrigerator and freezer",
    ],
  },
  {
    timeframe: "1 Week Before Moving",
    color: "bg-accent",
    items: [
      "Finish packing all remaining rooms",
      "Back up important digital files and documents",
      "Confirm childcare and pet care arrangements for moving day",
      "Prepare a box of cleaning supplies to clean after everything is out",
      "Charge all electronics and power banks",
      "Withdraw some cash for tips and unexpected expenses",
      "Confirm parking and elevator reservations at both properties if needed",
    ],
  },
  {
    timeframe: "Moving Day",
    color: "bg-primary",
    items: [
      "Do a final walkthrough of every room, closet, cabinet, and outdoor space",
      "Check attic, basement, and garage — don't leave anything behind",
      "Take meter readings for gas, electric, and water at the old home",
      "Hand over keys, garage openers, mailbox keys, and any codes",
      "Supervise the movers and check items off your inventory as they're loaded",
      "Keep important documents, valuables, and your essentials bag with you — not in the truck",
      "Do a walkthrough of the new home before the movers leave to check for damage",
    ],
  },
  {
    timeframe: "After the Move",
    color: "bg-accent",
    items: [
      "Unpack essentials first: kitchen, bathrooms, and bedrooms",
      "Check that all boxes and items arrived — report damage to the moving company promptly",
      "Update your driver's license and vehicle registration at the Utah DMV within 60 days",
      "Register to vote at your new address",
      "Set up security system and change door codes if applicable",
      "Meet your neighbors and locate nearby grocery stores, hospitals, and emergency services",
      "Find a local pharmacy and transfer prescriptions",
      "Enjoy your new home!",
    ],
  },
];

export default function MovingChecklistPage() {
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
              Planning
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
            <PackageCheck className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Moving Checklist
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From 8 weeks out to move-in day — every task you need to stay
            organized and stress-free.
          </p>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {CHECKLIST.map((section) => (
            <div key={section.timeframe}>
              {/* Timeframe header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full ${section.color}`} />
                <h2 className="font-heading text-xl md:text-2xl text-foreground font-semibold">
                  {section.timeframe}
                </h2>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Find Your <span className="text-accent">Next Home?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Let Ammon and Tasha guide you through every step of buying or selling
            in Utah County and the Salt Lake Valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get in Touch</Link>
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
