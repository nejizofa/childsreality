"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyMapProps {
  lat: number;
  lng: number;
  address: string;
}

export function PropertyMap({ lat, lng, address }: PropertyMapProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground font-heading">
        Location
      </h2>

      <div className="relative h-64 md:h-80 w-full rounded-xl border border-border bg-muted overflow-hidden">
        {/* Styled placeholder map */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-muted to-accent/5" />

        {/* Grid pattern for map feel */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#1B3A4B 1px, transparent 1px), linear-gradient(90deg, #1B3A4B 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Center pin */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <div className="rounded-lg bg-white/90 backdrop-blur-sm px-4 py-2 shadow-md text-center max-w-xs">
            <p className="text-sm font-medium text-foreground">{address}</p>
          </div>
        </div>
      </div>

      <Button variant="outline" size="sm" asChild>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <MapPin className="h-4 w-4 mr-2" />
          View on Google Maps
          <ExternalLink className="h-3 w-3 ml-2" />
        </a>
      </Button>
    </section>
  );
}
