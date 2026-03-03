import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb skeleton */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Gallery skeleton */}
        <Skeleton className="w-full aspect-[16/9] md:aspect-[2/1] rounded-xl" />
        <div className="flex gap-2 mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-28 md:h-24 md:w-36 rounded-lg flex-shrink-0" />
          ))}
        </div>

        {/* Price + address skeleton */}
        <div className="mt-6 mb-8 space-y-3">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-72" />
          <Skeleton className="h-5 w-56" />
          <div className="flex gap-6 mt-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>

        {/* Two-column skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key facts grid */}
            <div>
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

            {/* Features */}
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Skeleton key={i} className="h-5 w-36" />
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <Skeleton className="h-64 md:h-80 w-full rounded-xl" />
          </div>

          {/* Right column - contact form */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-border bg-white p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-14 w-14 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-48" />
              <div className="space-y-3 pt-2">
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-24 w-full rounded-md" />
                <Skeleton className="h-12 w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Similar listings skeleton */}
        <div className="mt-16 pt-10 border-t border-border">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border overflow-hidden">
                <Skeleton className="aspect-[4/3] w-full" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
