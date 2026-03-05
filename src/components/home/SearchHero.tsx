"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CITIES, SITE_NAME } from "@/lib/constants";

export function SearchHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (city && city !== "All Cities") params.set("city", city);
    router.push(`/properties${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
        }}
      />

      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle gold accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Small decorative line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-accent/60" />
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
            {SITE_NAME}
          </span>
          <div className="h-px w-12 bg-accent/60" />
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
          Find Your Dream Home
          <span className="block text-accent mt-2">in Utah</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Luxury homes and exceptional service throughout Utah County and the
          Salt Lake Valley. Let our experienced team guide you home.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-3">
            {/* Text input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by address, neighborhood, or MLS #"
                className="w-full h-12 bg-white/10 border border-white/10 rounded-lg pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
              />
            </div>

            {/* City select */}
            <div className="relative md:w-52">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40 z-10 pointer-events-none" />
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="h-12 bg-white/10 border-white/10 text-white pl-10 rounded-lg hover:bg-white/15 transition-colors [&>svg]:text-white/40">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search button */}
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="h-12 px-8 rounded-lg font-semibold tracking-wide"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </form>

        {/* Quick stats */}
        <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 text-white/60">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading text-white font-semibold">
              500+
            </p>
            <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
              Properties Sold
            </p>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading text-white font-semibold">
              26+
            </p>
            <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
              Combined Years Experience
            </p>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading text-white font-semibold">
              200+
            </p>
            <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
              Happy Clients
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
