import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm">
      {/* Image placeholder */}
      <Skeleton className="aspect-[4/3] w-full rounded-none" />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Address */}
        <div className="space-y-1.5">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        {/* Beds / Baths / Sqft */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Badge */}
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>
  );
}

export default function PropertiesLoading() {
  return (
    <main className="bg-background min-h-screen">
      {/* Header skeleton */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Skeleton className="h-9 w-64 mb-2" />
          <Skeleton className="h-5 w-40" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {/* Filters skeleton */}
        <div className="rounded-lg border border-border bg-white p-4">
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-10 w-44" />
            <Skeleton className="h-10 w-44" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-44" />
          </div>
        </div>

        {/* Grid of 6 skeleton cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
