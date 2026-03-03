import { getMLSAdapter } from "@/lib/mls";
import type { Property } from "@/lib/mls";
import { PropertyCard } from "@/components/property/PropertyCard";

interface SimilarListingsProps {
  property: Property;
}

export async function SimilarListings({ property }: SimilarListingsProps) {
  const adapter = getMLSAdapter();
  const similar = await adapter.getSimilarProperties(property, 3);

  if (similar.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground font-heading">
        Similar Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similar.map((listing) => (
          <PropertyCard key={listing.mlsNumber} property={listing} />
        ))}
      </div>
    </section>
  );
}
