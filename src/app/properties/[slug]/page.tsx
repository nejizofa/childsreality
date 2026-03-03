import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { extractMlsFromSlug, formatPrice, formatNumber } from "@/lib/utils";
import { getMLSAdapter } from "@/lib/mls";
import { SITE_NAME, SITE_URL, TEAM, OFFICE, MLS_DISCLAIMER } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { PropertyMap } from "@/components/property/PropertyMap";
import { AgentContactForm } from "@/components/property/AgentContactForm";
import { SimilarListings } from "@/components/property/SimilarListings";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const statusColors: Record<string, string> = {
  Active: "bg-emerald-600 text-white",
  Pending: "bg-amber-500 text-white",
  Sold: "bg-red-600 text-white",
  "Coming Soon": "bg-secondary text-white",
};

async function getProperty(slug: string) {
  const mlsNumber = extractMlsFromSlug(slug);
  const adapter = getMLSAdapter();
  return adapter.getProperty(mlsNumber);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    return { title: "Property Not Found" };
  }

  const title = `${property.address}, ${property.city}, ${property.state} ${property.zipCode}`;
  const description = `${property.beds} bed, ${property.baths} bath, ${formatNumber(property.sqft)} sqft ${property.propertyType.toLowerCase()} listed at ${formatPrice(property.price)} in ${property.city}, ${property.state}. ${property.description.slice(0, 150)}...`;
  const image = property.images[0] || "/images/placeholder-property.svg";

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/properties/${slug}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  // JSON.stringify on our own structured data object is safe - no user HTML involved
  const html = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

  const fullAddress = `${property.address}, ${property.city}, ${property.state} ${property.zipCode}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: fullAddress,
    description: property.description,
    url: `${SITE_URL}/properties/${slug}`,
    datePosted: property.listDate,
    image: property.images,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "USD",
      availability:
        property.status === "Active"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zipCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.lat,
      longitude: property.lng,
    },
    numberOfRooms: property.beds,
    numberOfBathroomsTotal: property.baths,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.sqft,
      unitCode: "FTK",
    },
    yearBuilt: property.yearBuilt,
    broker: {
      "@type": "RealEstateAgent",
      name: TEAM[0].name,
      telephone: TEAM[0].phone,
      email: TEAM[0].email,
      worksFor: {
        "@type": "RealEstateAgent",
        name: OFFICE.name,
        address: OFFICE.address,
      },
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-border bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link
                  href="/properties"
                  className="hover:text-primary transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
                {property.address}
              </li>
            </ol>
          </div>
        </nav>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Gallery */}
          <PropertyGallery images={property.images} />

          {/* Price + Address header */}
          <div className="mt-6 mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Badge
                className={
                  statusColors[property.status] || "bg-primary text-white"
                }
              >
                {property.status}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {property.propertyType}
              </Badge>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">
              {formatPrice(property.price)}
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              {property.address}
            </p>
            <p className="text-muted-foreground">
              {property.city}, {property.state} {property.zipCode}
            </p>

            {/* Quick stats row */}
            <div className="flex items-center gap-6 mt-3 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground">{property.beds}</strong> Beds
              </span>
              <span>
                <strong className="text-foreground">{property.baths}</strong>{" "}
                Baths
              </span>
              <span>
                <strong className="text-foreground">
                  {formatNumber(property.sqft)}
                </strong>{" "}
                Sq Ft
              </span>
              <span>
                <strong className="text-foreground">
                  {property.lotSize}
                </strong>{" "}
                Lot
              </span>
            </div>
          </div>

          {/* Two column layout: Details + Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: details & map */}
            <div className="lg:col-span-2 space-y-10">
              <PropertyDetails property={property} />
              <PropertyMap
                lat={property.lat}
                lng={property.lng}
                address={fullAddress}
              />
            </div>

            {/* Right: sticky contact form */}
            <div className="lg:col-span-1">
              <AgentContactForm propertyAddress={fullAddress} />
            </div>
          </div>

          {/* Similar listings */}
          <div className="mt-16 pt-10 border-t border-border">
            <SimilarListings property={property} />
          </div>

          {/* MLS Disclaimer */}
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {MLS_DISCLAIMER}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
