import {
  Bed,
  Bath,
  Maximize,
  TreePine,
  Calendar,
  Car,
  Layers,
  Clock,
  DollarSign,
  Home,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatNumber, formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/mls";

interface PropertyDetailsProps {
  property: Property;
}

interface FactItem {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const facts: FactItem[] = [
    {
      icon: <Bed className="h-5 w-5 text-accent" />,
      label: "Bedrooms",
      value: property.beds,
    },
    {
      icon: <Bath className="h-5 w-5 text-accent" />,
      label: "Bathrooms",
      value: property.baths,
    },
    {
      icon: <Maximize className="h-5 w-5 text-accent" />,
      label: "Sq Ft",
      value: formatNumber(property.sqft),
    },
    {
      icon: <TreePine className="h-5 w-5 text-accent" />,
      label: "Lot Size",
      value: property.lotSize,
    },
    {
      icon: <Calendar className="h-5 w-5 text-accent" />,
      label: "Year Built",
      value: property.yearBuilt,
    },
    {
      icon: <Car className="h-5 w-5 text-accent" />,
      label: "Garage",
      value: property.garage > 0 ? `${property.garage}-Car` : "None",
    },
    {
      icon: <Layers className="h-5 w-5 text-accent" />,
      label: "Stories",
      value: property.stories,
    },
    {
      icon: <Clock className="h-5 w-5 text-accent" />,
      label: "Days on Market",
      value: property.daysOnMarket,
    },
    {
      icon: <DollarSign className="h-5 w-5 text-accent" />,
      label: "HOA Fees",
      value: property.hoaFees ? `${formatPrice(property.hoaFees)}/mo` : "None",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Key Facts Grid */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
          Property Details
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-white p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                {fact.icon}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{fact.label}</p>
                <p className="font-semibold text-foreground">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
          Description
        </h2>
        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
          {property.description.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Features */}
      {property.features.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4 font-heading">
            Features & Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {property.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Property type + MLS info */}
      <section className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
        <Badge variant="outline" className="text-xs">
          <Home className="h-3 w-3 mr-1" />
          {property.propertyType}
        </Badge>
        <span className="text-xs text-muted-foreground">
          MLS# {property.mlsNumber}
        </span>
        <span className="text-xs text-muted-foreground">
          Listed {new Date(property.listDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </section>
    </div>
  );
}
