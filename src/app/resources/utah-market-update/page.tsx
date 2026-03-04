import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, TrendingDown, Home, Clock, BarChart3, ArrowRight, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Utah Market Update | ${SITE_NAME}`,
  description:
    "Current Utah County and Salt Lake Valley real estate market stats — median prices, days on market, inventory, and what it means for buyers and sellers.",
};

const UTAH_COUNTY_STATS = [
  { label: "Median Sale Price", value: "$589,000", change: "+4.2%", trend: "up" },
  { label: "Avg. Days on Market", value: "28 Days", change: "-6 days", trend: "down" },
  { label: "Homes Sold (Last 30 Days)", value: "412", change: "+8.1%", trend: "up" },
  { label: "Months of Inventory", value: "2.4 Mo.", change: "-0.3 mo.", trend: "down" },
  { label: "List-to-Sale Price Ratio", value: "99.1%", change: "+0.6%", trend: "up" },
  { label: "New Listings", value: "538", change: "+11.4%", trend: "up" },
];

const SL_COUNTY_STATS = [
  { label: "Median Sale Price", value: "$525,000", change: "+3.1%", trend: "up" },
  { label: "Avg. Days on Market", value: "24 Days", change: "-4 days", trend: "down" },
  { label: "Homes Sold (Last 30 Days)", value: "681", change: "+5.7%", trend: "up" },
  { label: "Months of Inventory", value: "2.1 Mo.", change: "-0.2 mo.", trend: "down" },
  { label: "List-to-Sale Price Ratio", value: "99.4%", change: "+0.4%", trend: "up" },
  { label: "New Listings", value: "824", change: "+9.8%", trend: "up" },
];

const CITY_SNAPSHOTS = [
  { city: "Highland", county: "Utah County", medianPrice: "$892,000", dom: "22 days", type: "Seller's Market" },
  { city: "Alpine", county: "Utah County", medianPrice: "$1,150,000", dom: "31 days", type: "Seller's Market" },
  { city: "Lehi", county: "Utah County", medianPrice: "$548,000", dom: "19 days", type: "Seller's Market" },
  { city: "American Fork", county: "Utah County", medianPrice: "$512,000", dom: "26 days", type: "Balanced" },
  { city: "Provo", county: "Utah County", medianPrice: "$445,000", dom: "30 days", type: "Balanced" },
  { city: "Draper", county: "Salt Lake County", medianPrice: "$685,000", dom: "21 days", type: "Seller's Market" },
  { city: "South Jordan", county: "Salt Lake County", medianPrice: "$598,000", dom: "23 days", type: "Seller's Market" },
  { city: "Sandy", county: "Salt Lake County", medianPrice: "$542,000", dom: "25 days", type: "Balanced" },
];

const PRICE_HISTORY = [
  { month: "Sep '25", utahCo: 565, slCo: 508 },
  { month: "Oct '25", utahCo: 571, slCo: 511 },
  { month: "Nov '25", utahCo: 568, slCo: 509 },
  { month: "Dec '25", utahCo: 574, slCo: 513 },
  { month: "Jan '26", utahCo: 580, slCo: 518 },
  { month: "Feb '26", utahCo: 585, slCo: 521 },
  { month: "Mar '26", utahCo: 589, slCo: 525 },
];

const INSIGHTS = [
  {
    title: "Still a Seller's Market",
    body:
      "With only 2.1–2.4 months of inventory across Utah and Salt Lake Counties, buyers continue to face competition. Well-priced homes in desirable areas are receiving multiple offers, particularly in Highland, Alpine, Lehi, and Draper.",
    icon: TrendingUp,
  },
  {
    title: "Prices Rising Steadily",
    body:
      "Median prices in Utah County are up 4.2% year-over-year, outpacing inflation. Salt Lake County has seen a more modest 3.1% gain. The tech corridor along I-15 (Lehi–Draper–South Jordan) continues to drive demand.",
    icon: BarChart3,
  },
  {
    title: "New Listings Up — But Demand Keeps Pace",
    body:
      "New listings rose 11.4% in Utah County and 9.8% in Salt Lake County compared to this time last year. However, buyer demand has absorbed most of the new supply, keeping inventory tight heading into the spring buying season.",
    icon: Home,
  },
  {
    title: "Homes Selling Quickly",
    body:
      "The average home is under contract in under 30 days. In Lehi and Draper, days on market dipped below 22 days. Buyers should be pre-approved and ready to move quickly when the right home comes along.",
    icon: Clock,
  },
];

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <TrendingUp className="h-4 w-4 text-emerald-500" />;
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-accent" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
}

function marketTypeBadge(type: string) {
  if (type === "Seller's Market") return "bg-accent/10 text-accent";
  if (type === "Buyer's Market") return "bg-emerald-100 text-emerald-700";
  return "bg-muted text-muted-foreground";
}

const maxPrice = Math.max(...PRICE_HISTORY.map((d) => Math.max(d.utahCo, d.slCo)));

export default function UtahMarketUpdatePage() {
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
              Market
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
            <TrendingUp className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-4">
            Utah Market Update
          </h1>
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
            March 2026
          </p>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Current conditions across Utah County and the Salt Lake Valley —
            what buyers and sellers need to know right now.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Utah County Stats */}
        <section>
          <div className="mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold">
              Utah County
            </h2>
            <p className="text-muted-foreground mt-1">Highland · Alpine · Lehi · American Fork · Provo · Orem · Cedar Hills</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {UTAH_COUNTY_STATS.map((stat) => (
              <div key={stat.label} className="bg-white border border-border rounded-xl p-5 shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="font-heading text-2xl text-foreground font-semibold">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendIcon trend={stat.trend} />
                  <span className={`text-xs font-medium ${stat.trend === "up" ? "text-emerald-600" : "text-accent"}`}>
                    {stat.change} YoY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Salt Lake County Stats */}
        <section>
          <div className="mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold">
              Salt Lake County
            </h2>
            <p className="text-muted-foreground mt-1">Draper · Sandy · South Jordan · Murray · West Jordan · Millcreek</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SL_COUNTY_STATS.map((stat) => (
              <div key={stat.label} className="bg-white border border-border rounded-xl p-5 shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="font-heading text-2xl text-foreground font-semibold">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendIcon trend={stat.trend} />
                  <span className={`text-xs font-medium ${stat.trend === "up" ? "text-emerald-600" : "text-accent"}`}>
                    {stat.change} YoY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Median Price Trend Chart */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            Median Price Trend
          </h2>
          <p className="text-muted-foreground mb-8">6-month trajectory — Utah County vs. Salt Lake County (in thousands)</p>

          <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
            {/* Legend */}
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Utah County</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-muted-foreground">Salt Lake County</span>
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-3 h-48">
              {PRICE_HISTORY.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end gap-0.5 h-40">
                    <div
                      className="flex-1 bg-primary rounded-t-sm transition-all"
                      style={{ height: `${(d.utahCo / maxPrice) * 100}%` }}
                      title={`Utah County: $${d.utahCo}k`}
                    />
                    <div
                      className="flex-1 bg-accent/70 rounded-t-sm transition-all"
                      style={{ height: `${(d.slCo / maxPrice) * 100}%` }}
                      title={`Salt Lake County: $${d.slCo}k`}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">{d.month}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Snapshots */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            City Snapshots
          </h2>
          <p className="text-muted-foreground mb-8">Key stats by city — March 2026</p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground">City</th>
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground">County</th>
                  <th className="text-right px-5 py-3 font-medium text-muted-foreground">Median Price</th>
                  <th className="text-right px-5 py-3 font-medium text-muted-foreground">Avg. DOM</th>
                  <th className="text-right px-5 py-3 font-medium text-muted-foreground">Conditions</th>
                </tr>
              </thead>
              <tbody>
                {CITY_SNAPSHOTS.map((row, i) => (
                  <tr key={row.city} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                    <td className="px-5 py-3 font-medium text-foreground">{row.city}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.county}</td>
                    <td className="px-5 py-3 text-right font-medium text-foreground">{row.medianPrice}</td>
                    <td className="px-5 py-3 text-right text-muted-foreground">{row.dom}</td>
                    <td className="px-5 py-3 text-right">
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${marketTypeBadge(row.type)}`}>
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Insights */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-8">
            Market Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {INSIGHTS.map((insight) => (
              <div key={insight.title} className="bg-white border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <insight.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{insight.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground border-t border-border pt-6">
          Market data reflects estimates based on MLS activity in Utah County and Salt Lake County as of March 2026.
          Statistics are for informational purposes and may vary. Contact Childs Real Estate for a personalized market
          analysis of your specific neighborhood or property.
        </p>
      </div>

      {/* CTA */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Want a <span className="text-accent">Free Market Analysis</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Get a detailed breakdown of what your home is worth — or what you
            can expect to pay — in today&apos;s Utah market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Request a Free Analysis</Link>
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
