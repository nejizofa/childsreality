"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CITIES, PROPERTY_TYPES, SORT_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PRICE_POINTS = [
  { label: "$200K", value: "200000" },
  { label: "$300K", value: "300000" },
  { label: "$400K", value: "400000" },
  { label: "$500K", value: "500000" },
  { label: "$600K", value: "600000" },
  { label: "$750K", value: "750000" },
  { label: "$1M", value: "1000000" },
  { label: "$1.5M", value: "1500000" },
  { label: "$2M", value: "2000000" },
];

const BED_OPTIONS = ["Any", "1", "2", "3", "4", "5+"];
const BATH_OPTIONS = ["Any", "1", "2", "3", "4+"];

export function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentFilters = useMemo(
    () => ({
      query: searchParams.get("query") ?? "",
      city: searchParams.get("city") ?? "",
      propertyType: searchParams.get("propertyType") ?? "",
      minBeds: searchParams.get("minBeds") ?? "",
      minBaths: searchParams.get("minBaths") ?? "",
      minPrice: searchParams.get("minPrice") ?? "",
      maxPrice: searchParams.get("maxPrice") ?? "",
      sort: searchParams.get("sort") ?? "",
    }),
    [searchParams]
  );

  const hasActiveFilters = useMemo(
    () =>
      Object.values(currentFilters).some(
        (v) => v !== "" && v !== "All Cities"
      ),
    [currentFilters]
  );

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value || value === "Any" || value === "No Min" || value === "No Max" || value === "All Cities") {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      // Reset to page 1 when filters change
      params.delete("page");

      router.push(`/properties?${params.toString()}`);
    },
    [searchParams, router]
  );

  const clearFilters = useCallback(() => {
    router.push("/properties");
  }, [router]);

  const handleQuerySubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const query = formData.get("query") as string;
      updateParam("query", query);
    },
    [updateParam]
  );

  const filterControls = (
    <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
      {/* Text search */}
      <form onSubmit={handleQuerySubmit} className="relative lg:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          name="query"
          placeholder="Address, city, ZIP..."
          defaultValue={currentFilters.query}
          className="pl-9"
        />
      </form>

      {/* City */}
      <Select
        value={currentFilters.city || "All Cities"}
        onValueChange={(val) => updateParam("city", val)}
      >
        <SelectTrigger className="w-full lg:w-44">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          {CITIES.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Property type */}
      <Select
        value={currentFilters.propertyType || "any"}
        onValueChange={(val) =>
          updateParam("propertyType", val === "any" ? "" : val)
        }
      >
        <SelectTrigger className="w-full lg:w-44">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="any">All Types</SelectItem>
          {PROPERTY_TYPES.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Min beds */}
      <Select
        value={currentFilters.minBeds || "Any"}
        onValueChange={(val) => updateParam("minBeds", val)}
      >
        <SelectTrigger className="w-full lg:w-32">
          <SelectValue placeholder="Beds" />
        </SelectTrigger>
        <SelectContent>
          {BED_OPTIONS.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt === "Any" ? "Beds: Any" : `${opt} Beds`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Min baths */}
      <Select
        value={currentFilters.minBaths || "Any"}
        onValueChange={(val) => updateParam("minBaths", val)}
      >
        <SelectTrigger className="w-full lg:w-32">
          <SelectValue placeholder="Baths" />
        </SelectTrigger>
        <SelectContent>
          {BATH_OPTIONS.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt === "Any" ? "Baths: Any" : `${opt} Baths`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Min price */}
      <Select
        value={currentFilters.minPrice || "none"}
        onValueChange={(val) =>
          updateParam("minPrice", val === "none" ? "" : val)
        }
      >
        <SelectTrigger className="w-full lg:w-36">
          <SelectValue placeholder="Min Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No Min</SelectItem>
          {PRICE_POINTS.map((pt) => (
            <SelectItem key={pt.value} value={pt.value}>
              {pt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Max price */}
      <Select
        value={currentFilters.maxPrice || "none"}
        onValueChange={(val) =>
          updateParam("maxPrice", val === "none" ? "" : val)
        }
      >
        <SelectTrigger className="w-full lg:w-36">
          <SelectValue placeholder="Max Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No Max</SelectItem>
          {PRICE_POINTS.map((pt) => (
            <SelectItem key={pt.value} value={pt.value}>
              {pt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select
        value={currentFilters.sort || "newest"}
        onValueChange={(val) =>
          updateParam("sort", val === "newest" ? "" : val)
        }
      >
        <SelectTrigger className="w-full lg:w-44">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Clear filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-1" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-3">
      {/* Mobile toggle */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </span>
          {hasActiveFilters && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
              {Object.values(currentFilters).filter(
                (v) => v !== "" && v !== "All Cities"
              ).length}
            </span>
          )}
        </Button>
      </div>

      {/* Mobile collapsible panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="rounded-lg border border-border bg-white p-4">
          {filterControls}
        </div>
      </div>

      {/* Desktop always-visible */}
      <div className="hidden lg:block rounded-lg border border-border bg-white p-4 shadow-sm">
        {filterControls}
      </div>
    </div>
  );
}
