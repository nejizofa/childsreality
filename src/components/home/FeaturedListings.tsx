import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMLSAdapter } from "@/lib/mls";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

export async function FeaturedListings() {
  const adapter = getMLSAdapter();
  const properties = await adapter.getFeaturedProperties(6);

  if (!properties.length) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Curated Selection
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Featured Properties
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Hand-picked homes showcasing the finest real estate in Utah County
            and the Salt Lake Valley.
          </p>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.mlsNumber} property={property} />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-14 text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
