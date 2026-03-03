import { PropertyCard } from "@/components/property/PropertyCard";
import { Home } from "lucide-react";
import type { Property } from "@/lib/mls";

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-white py-20 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
          <Home className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          No properties match your criteria
        </h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Try adjusting your filters or broadening your search to find more
          listings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.mlsNumber} property={property} />
      ))}
    </div>
  );
}
