import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  CheckCircle2,
  ArrowRight,
  Star,
  Camera,
  DollarSign,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Home Selling Guide | ${SITE_NAME}`,
  description:
    "21 proven ways to prepare and sell your home for top dollar in Utah. From curb appeal to closing day — a practical, easy-to-follow guide.",
};

const TIPS = [
  {
    number: "01",
    title: "Hire an Experienced Local Agent",
    body: "Your agent is your most important asset when selling. A great agent knows how to price your home accurately, market it effectively, negotiate on your behalf, and navigate the paperwork. Interview two or three agents and ask for their recent sales history, marketing plan, and communication style.",
    tip: "Choose an agent who knows your specific neighborhood. Hyperlocal knowledge can mean thousands more in your pocket.",
  },
  {
    number: "02",
    title: "Price It Right from Day One",
    body: "Overpricing is the #1 mistake sellers make. Homes that sit on the market too long develop a stigma — buyers assume something is wrong. Your agent will prepare a Comparative Market Analysis (CMA) to show what similar homes have recently sold for. Price at or just below market value to attract multiple offers.",
    tip: "Homes priced correctly in the first two weeks typically sell for more than homes that are later reduced.",
  },
  {
    number: "03",
    title: "Declutter Every Single Room",
    body: "Buyers need to visualize themselves living in your space — which is impossible if it's full of your belongings. Remove personal photos, excess furniture, countertop clutter, and anything that makes rooms feel smaller. Rent a storage unit if needed. Less is always more when selling.",
    tip: "Pack as if you're already moving. Decluttering early makes your move easier and your home show better.",
  },
  {
    number: "04",
    title: "Deep Clean from Top to Bottom",
    body: "A spotless home signals to buyers that it has been well cared for. Clean inside cabinets and drawers, scrub grout lines, wash windows inside and out, wipe down baseboards, and eliminate any odors. Consider hiring professional cleaners — the investment pays for itself.",
    tip: "Pet and smoke odors are deal-breakers for many buyers. Address them aggressively with cleaning, air purifiers, and fresh paint if needed.",
  },
  {
    number: "05",
    title: "Make Smart Repairs Before Listing",
    body: "Fix the obvious issues before buyers find them in an inspection — leaky faucets, broken cabinet hinges, cracked outlet covers, holes in walls, running toilets, and dripping faucets. Small deferred maintenance items make buyers wonder what bigger problems might be lurking.",
    tip: "Focus on items that show up most often in inspection reports. Your agent can give you a prioritized list based on local buyer expectations.",
  },
  {
    number: "06",
    title: "Boost Your Curb Appeal",
    body: "First impressions happen in seconds. Mow the lawn, edge the walkways, trim shrubs, pull weeds, add fresh mulch, and plant seasonal flowers. Paint or replace the front door if it looks dated. Power wash the driveway and sidewalks. Make sure your house number is clearly visible.",
    tip: "Spend an afternoon on the exterior and you'll attract more buyers before they even step inside.",
  },
  {
    number: "07",
    title: "Touch Up Paint Throughout",
    body: "Fresh, neutral paint is one of the highest-ROI improvements you can make. Repaint rooms with bold colors in greige, warm white, or soft gray. Touch up scuffs, scratches, and marks throughout. Don't forget doors, trim, and baseboards — they make a huge visual difference.",
    tip: "Stick to light, neutral tones. They make spaces feel larger and appeal to the widest range of buyers.",
  },
  {
    number: "08",
    title: "Stage Your Home Professionally",
    body: "Staged homes sell faster and for more money. Staging helps buyers emotionally connect with the space. It can be as simple as rearranging your existing furniture to improve flow, or as involved as bringing in rented furnishings for vacant homes. Your agent may offer staging advice or recommend a professional stager.",
    tip: "Focus staging efforts on the living room, primary bedroom, and kitchen — the rooms that buyers weigh most heavily.",
  },
  {
    number: "09",
    title: "Invest in Professional Photography",
    body: "Over 95% of buyers start their home search online — your photos are your listing. Professional real estate photography with proper lighting, wide-angle lenses, and editing makes a dramatic difference. Consider adding a 3D Matterport tour or aerial drone shots for premium properties.",
    tip: "Do not list with dark, blurry, or phone photos. High-quality images attract more showings, period.",
  },
  {
    number: "10",
    title: "Write a Compelling Listing Description",
    body: "Your listing description should highlight the home's best features, the neighborhood, recent upgrades, and unique selling points. Lead with the most appealing aspects. Use vivid, specific language — 'vaulted ceilings and panoramic mountain views' is far more powerful than 'great views.'",
    tip: "Mention proximity to schools, parks, shopping, and major employers. Buyers are buying a lifestyle, not just a house.",
  },
  {
    number: "11",
    title: "List on MLS and All Major Platforms",
    body: "Your agent should list your home on the MLS (Multiple Listing Service), which syndicates to Zillow, Realtor.com, Redfin, and hundreds of other sites. Make sure your listing is also shared on social media and through your agent's professional network to maximize exposure.",
    tip: "Ask your agent how many platforms your listing will appear on and how they plan to market it beyond just the MLS.",
  },
  {
    number: "12",
    title: "Be Flexible with Showings",
    body: "The more people who can see your home, the faster it will sell. Say yes to showings as often as possible — evenings, weekends, and short-notice requests. Buyers who can't get in quickly often move on. Keep the home clean and ready to show on short notice during the listing period.",
    tip: "Consider leaving for an hour or two during showings. Buyers feel more comfortable when sellers aren't present.",
  },
  {
    number: "13",
    title: "Host a Strong Open House",
    body: "A well-promoted open house creates buzz and urgency. Your agent should advertise it online, on social media, with yard signs, and through the MLS. Make sure the home smells fresh, is well-lit, and is at a comfortable temperature. First weekends on market are typically the most important.",
    tip: "Fresh-baked cookies or subtle candles can make buyers feel at home — literally.",
  },
  {
    number: "14",
    title: "Review Offers Strategically",
    body: "Don't automatically accept the highest offer. Evaluate the full picture: financing type, down payment amount, contingencies, closing timeline, and the buyer's pre-approval strength. A cash offer at a slightly lower price may be more reliable than a high financed offer with many contingencies.",
    tip: "In a multiple-offer situation, ask buyers to submit their highest and best by a deadline. This creates urgency and maximizes your outcome.",
  },
  {
    number: "15",
    title: "Understand Your Net Proceeds",
    body: "Your sale price is not your take-home. Factor in agent commissions (typically 5–6%), closing costs (1–2%), prorated property taxes, any seller concessions, and mortgage payoff. Your agent or title company can prepare a seller's net sheet so you know exactly what to expect at closing.",
    tip: "Run your net sheet before accepting an offer — especially if you're also buying another home.",
  },
  {
    number: "16",
    title: "Respond to Inspection Findings Calmly",
    body: "Almost every home has inspection findings. Buyers may request repairs, a price reduction, or closing cost credits. Work with your agent to respond reasonably. You don't have to agree to everything, but being too rigid can kill deals. Focus on health, safety, and major system issues rather than minor cosmetic items.",
    tip: "Consider doing a pre-listing inspection so you know what's coming and can address issues proactively.",
  },
  {
    number: "17",
    title: "Prepare for the Appraisal",
    body: "If the buyer is financing, their lender will order an appraisal to confirm the home's value. Make sure the home is clean, all repairs are done, and any recent upgrades are documented. Your agent should provide the appraiser with a list of comparable sales and improvements to support the value.",
    tip: "Keep records of all renovations, permits, and system upgrades. These support a higher appraised value.",
  },
  {
    number: "18",
    title: "Keep the Home Show-Ready",
    body: "Once listed, your home needs to stay consistently clean and presentable. Dishes done, beds made, floors vacuumed, and surfaces wiped — every single day. This is temporary, but it matters. Buyers who see the home in pristine condition feel more confident making a strong offer.",
    tip: "Create a 15-minute 'show routine' you can run through before any showing on short notice.",
  },
  {
    number: "19",
    title: "Communicate Openly with Your Agent",
    body: "Stay in regular contact with your agent throughout the process. Share feedback from showings, ask questions, and voice concerns early. The more aligned you are with your agent, the smoother the transaction. If you're not hearing back from showings, ask your agent to follow up with buyer's agents directly.",
    tip: "Showing feedback is gold. If multiple buyers mention the same issue, take it seriously and address it.",
  },
  {
    number: "20",
    title: "Plan Your Move Timeline Early",
    body: "Start planning your move as soon as you list. Research movers, reserve trucks, begin packing non-essentials, and arrange for temporary storage if you're between homes. Know your ideal closing date and communicate it to potential buyers — flexibility on timeline can make your home more attractive.",
    tip: "Book movers early, especially in spring and summer when demand is highest and availability is limited.",
  },
  {
    number: "21",
    title: "Close with Confidence",
    body: "Closing day is the finish line. Review your Closing Disclosure carefully before signing — it details every cost and credit. Bring a valid government ID and any items your title company requests. After signing, the title company will wire funds and record the deed. Congratulations — you've sold your home!",
    tip: "Do a final walkthrough of the home before closing to confirm it's in the agreed-upon condition and all included items are present.",
  },
];

const CATEGORIES = [
  { icon: ClipboardList, label: "Preparation", color: "text-accent", count: "Steps 1–8" },
  { icon: Camera, label: "Marketing", color: "text-primary", count: "Steps 9–13" },
  { icon: DollarSign, label: "Offers & Negotiation", color: "text-accent", count: "Steps 14–17" },
  { icon: Sparkles, label: "Closing Strong", color: "text-primary", count: "Steps 18–21" },
];

export default function HomeSellingGuidePage() {
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
            21 Ways to Prepare &amp;<br className="hidden sm:block" /> Sell Your Home
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A practical, step-by-step guide to getting your home ready, priced right, and sold for top dollar.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <Home className="h-4 w-4" />
              Sellers Guide
            </span>
            <span>·</span>
            <span>10 min read</span>
            <span>·</span>
            <span>21 tips</span>
          </div>
        </div>
      </section>

      {/* Phase Overview */}
      <section className="py-14 border-b border-border/40 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <cat.icon className={`h-6 w-6 ${cat.color}`} />
                </div>
                <p className="font-heading font-semibold text-primary text-sm mb-0.5">{cat.label}</p>
                <p className="text-xs text-muted-foreground">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips List */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {TIPS.map((tip, index) => (
              <div
                key={tip.number}
                className="relative flex gap-6 group"
              >
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <span className="font-heading text-sm font-bold text-accent">{tip.number}</span>
                  </div>
                  {index < TIPS.length - 1 && (
                    <div className="w-px flex-1 bg-border/50 mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {tip.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{tip.body}</p>
                  {tip.tip && (
                    <div className="flex gap-3 bg-accent/5 border border-accent/15 rounded-xl p-4">
                      <Star className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        <span className="font-semibold text-accent">Pro Tip: </span>
                        {tip.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Checklist recap */}
          <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              Quick Reference Checklist
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {TIPS.map((tip) => (
                <div key={tip.number} className="flex items-start gap-2 py-1.5 border-b border-border/30">
                  <span className="text-accent font-mono text-xs font-semibold mt-0.5 w-6 shrink-0">{tip.number}</span>
                  <span className="text-sm text-foreground/80">{tip.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to <span className="text-accent">Sell Your Home?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Our team knows the Utah market inside and out. Let us help you price it right, market it well, and get to closing with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get a Free Home Valuation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/resources">
                Back to Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
