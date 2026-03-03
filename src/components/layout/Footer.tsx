"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Mail, MapPin } from "lucide-react";
import {
  NAV_LINKS,
  OFFICE,
  SITE_NAME,
  MLS_DISCLAIMER,
  BHHS_DISCLAIMER,
  FEATURED_AREAS,
} from "@/lib/constants";

export function Footer() {
  const [mlsExpanded, setMlsExpanded] = useState(false);

  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">
              {SITE_NAME}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {OFFICE.name}
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <a
                href={`tel:${OFFICE.phone}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                {OFFICE.phone}
              </a>
              <a
                href={`mailto:${OFFICE.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                {OFFICE.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                {OFFICE.address}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {FEATURED_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/properties?city=${encodeURIComponent(area.name)}`}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-white/70 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-white/70 hover:text-accent transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/fair-housing" className="text-white/70 hover:text-accent transition-colors">
                  Fair Housing Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BHHS Compliance */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {/* BHHS Logo placeholder */}
            <div className="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold tracking-wider">
              BHHS
            </div>
            {/* Equal Housing */}
            <div className="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold tracking-wider">
              EQUAL HOUSING OPPORTUNITY
            </div>
          </div>

          <p className="text-white/50 text-xs leading-relaxed mb-4">
            {BHHS_DISCLAIMER}
          </p>

          {/* MLS Disclaimer - collapsible */}
          <div>
            <button
              onClick={() => setMlsExpanded(!mlsExpanded)}
              className="flex items-center gap-1 text-white/50 text-xs hover:text-white/70 transition-colors"
              aria-expanded={mlsExpanded}
            >
              MLS Disclaimer
              {mlsExpanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>
            {mlsExpanded && (
              <p className="text-white/40 text-xs leading-relaxed mt-2">
                {MLS_DISCLAIMER}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
