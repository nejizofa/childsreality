import { Suspense } from "react";
import type { Metadata } from "next";
import { getMLSAdapter } from "@/lib/mls";
import type { PropertySearchParams, PropertyType } from "@/lib/mls";
import { SearchFilters } from "@/components/search/SearchFilters";
import { PropertyGrid } from "@/components/search/PropertyGrid";
import { SearchPagination } from "@/components/search/SearchPagination";
import { formatNumber } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Property Search | ${SITE_NAME}`,
  description:
    "Browse luxury homes for sale in Utah County and the Salt Lake Valley. Filter by city, price, beds, baths, and property type.",
};

interface PropertiesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function toStr(val: string | string[] | undefined): string | undefined {
  if (Array.isArray(val)) return val[0];
  return val ?? undefined;
}

function toNum(val: string | string[] | undefined): number | undefined {
  const str = toStr(val);
  if (!str) return undefined;
  const n = Number(str.replace("+", ""));
  return isNaN(n) ? undefined : n;
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  const city = toStr(params.city);
  const sort = toStr(params.sort) as PropertySearchParams["sort"] | undefined;

  const searchConfig: PropertySearchParams = {
    query: toStr(params.query),
    city: city && city !== "All Cities" ? city : undefined,
    propertyType: toStr(params.propertyType) as PropertyType | undefined,
    minBeds: toNum(params.minBeds),
    minBaths: toNum(params.minBaths),
    minPrice: toNum(params.minPrice),
    maxPrice: toNum(params.maxPrice),
    sort: sort || "newest",
    page: toNum(params.page) || 1,
    limit: 12,
  };

  const mls = getMLSAdapter();
  const result = await mls.searchProperties(searchConfig);

  return (
    <main className="bg-background min-h-screen">
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Property Search
          </h1>
          <p className="mt-2 text-muted-foreground">
            {result.total > 0 ? (
              <>
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {formatNumber(result.total)}
                </span>{" "}
                {result.total === 1 ? "property" : "properties"}
              </>
            ) : (
              "No properties found"
            )}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        <Suspense fallback={null}>
          <SearchFilters />
        </Suspense>

        <PropertyGrid properties={result.properties} />

        <Suspense fallback={null}>
          <SearchPagination
            page={result.page}
            totalPages={result.totalPages}
          />
        </Suspense>
      </div>
    </main>
  );
}
