"use client";

import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn, formatPrice, formatNumber } from "@/lib/utils";
import type { Property } from "@/lib/mls";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const statusColors: Record<string, string> = {
  Active: "bg-emerald-600 text-white",
  Pending: "bg-amber-500 text-white",
  Sold: "bg-red-600 text-white",
  "Coming Soon": "bg-secondary text-white",
};

export function PropertyCard({ property, className }: PropertyCardProps) {
  const {
    slug,
    address,
    city,
    state,
    price,
    beds,
    baths,
    sqft,
    propertyType,
    status,
    images,
  } = property;

  const imageSrc = images?.[0] || "/images/placeholder-property.svg";

  return (
    <Link
      href={`/properties/${slug}`}
      className={cn(
        "group block rounded-xl bg-white border border-border overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={address}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjVGMEU4Ii8+PC9zdmc+"
        />

        {/* Status badge overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase shadow-md",
              statusColors[status] || "bg-primary text-white"
            )}
          >
            {status}
          </span>
        </div>

        {/* Price overlay at bottom of image */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10">
          <p className="text-white text-2xl font-bold font-heading tracking-tight">
            {formatPrice(price)}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Address */}
        <div>
          <h3 className="font-semibold text-foreground leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {address}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            {city}, {state}
          </p>
        </div>

        {/* Beds / Baths / Sqft row */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-accent" />
            <span className="font-medium text-foreground">{beds}</span> Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-accent" />
            <span className="font-medium text-foreground">{baths}</span> Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-accent" />
            <span className="font-medium text-foreground">
              {formatNumber(sqft)}
            </span>{" "}
            Sqft
          </span>
        </div>

        {/* Property type badge */}
        <div className="pt-1">
          <Badge variant="outline" className="text-xs text-muted-foreground">
            <Home className="h-3 w-3 mr-1" />
            {propertyType}
          </Badge>
        </div>
      </div>
    </Link>
  );
}
