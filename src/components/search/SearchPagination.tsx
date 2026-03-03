"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchPaginationProps {
  page: number;
  totalPages: number;
}

export function SearchPagination({ page, totalPages }: SearchPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newPage <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(newPage));
      }
      router.push(`/properties?${params.toString()}`);
    },
    [searchParams, router]
  );

  // Build visible page numbers with ellipsis
  const pageNumbers = useMemo(() => {
    const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis-start");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("ellipsis-end");
    }

    pages.push(totalPages);

    return pages;
  }, [page, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center justify-center gap-1 pt-8"
      aria-label="Search results pagination"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => goToPage(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline ml-1">Previous</span>
      </Button>

      {pageNumbers.map((p) => {
        if (typeof p === "string") {
          return (
            <span
              key={p}
              className="flex h-8 w-8 items-center justify-center text-sm text-muted-foreground"
            >
              ...
            </span>
          );
        }

        return (
          <Button
            key={p}
            variant={p === page ? "default" : "ghost"}
            size="sm"
            onClick={() => goToPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "h-8 w-8 p-0",
              p === page && "pointer-events-none"
            )}
          >
            {p}
          </Button>
        );
      })}

      <Button
        variant="ghost"
        size="sm"
        onClick={() => goToPage(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        <span className="hidden sm:inline mr-1">Next</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
