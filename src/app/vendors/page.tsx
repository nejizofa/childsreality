import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendors",
  description: `Trusted vendors and service providers recommended by ${SITE_NAME}.`,
};

export default function VendorsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary py-24 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Trusted Vendors
          </h1>
          <p className="text-white/80 text-lg">
            Our recommended network of service providers to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Card */}
      <section className="mx-auto max-w-7xl px-6 py-20 flex justify-center">
        <Link
          href="https://vendors.childsrealty.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-white p-10 shadow-sm hover:shadow-md hover:border-accent transition-all max-w-sm w-full text-center"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
            <ExternalLink className="h-7 w-7 text-accent" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">Vendor Directory</h2>
            <p className="text-muted-foreground text-sm">
              Browse our curated list of trusted local service providers at vendors.childsrealty.com
            </p>
          </div>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:underline">
            Visit Directory <ExternalLink className="h-4 w-4" />
          </span>
        </Link>
      </section>
    </main>
  );
}
