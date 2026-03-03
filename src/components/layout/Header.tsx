"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV_LINKS, OFFICE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white text-sm">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${OFFICE.phone}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {OFFICE.phone}
            </a>
            <a
              href={`mailto:${OFFICE.email}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {OFFICE.email}
            </a>
          </div>
          <p className="text-white/70 text-xs">{OFFICE.name}</p>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Logo className="h-10 md:h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-3">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </nav>

          {/* Mobile nav trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border">
                  <Logo className="h-9" />
                </div>
                <nav className="flex-1 p-6 space-y-1">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                          pathname === link.href
                            ? "text-accent bg-accent/10"
                            : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <a href={`tel:${OFFICE.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {OFFICE.phone}
                  </a>
                  <a href={`mailto:${OFFICE.email}`} className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {OFFICE.email}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
