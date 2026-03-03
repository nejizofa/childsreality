import Link from "next/link";
import { MapPin } from "lucide-react";
import { FEATURED_AREAS } from "@/lib/constants";

const areaGradients = [
  "from-primary/80 to-secondary/90",
  "from-secondary/80 to-primary/90",
  "from-primary/70 via-secondary/60 to-primary/90",
  "from-secondary/70 via-primary/60 to-secondary/90",
  "from-primary/80 to-secondary/70",
  "from-secondary/80 to-primary/70",
];

export function FeaturedAreas() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Discover Utah
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Explore Utah Communities
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            From mountain estates to vibrant neighborhoods, discover the
            communities that make Utah extraordinary.
          </p>
        </div>

        {/* Area grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_AREAS.map((area, index) => (
            <Link
              key={area.slug}
              href={`/properties?city=${encodeURIComponent(area.name)}`}
              className="group relative block rounded-xl overflow-hidden aspect-[3/2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${areaGradients[index % areaGradients.length]} transition-all duration-500`}
              />

              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Subtle accent shimmer on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-accent/80 text-sm font-medium tracking-wider uppercase">
                    Utah
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-white font-semibold mb-1">
                  {area.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
