import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFICE } from "@/lib/constants";

export function HomeCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2D1B4E 0%, #3d2866 40%, #C9A96E 100%)",
        }}
      />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="h-px w-12 bg-white/30" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Ready to Find Your
          <span className="block mt-1">Perfect Home?</span>
        </h2>

        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Whether you are buying, selling, or just exploring, our team is here
          to guide you every step of the way. Let us help you make your next
          move your best one.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold h-13 px-8 rounded-lg group"
          >
            <Link href="/properties">
              Browse Properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold h-13 px-8 rounded-lg"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Phone number */}
        <p className="mt-8 text-white/50 text-sm">
          Or call us directly at{" "}
          <a
            href={`tel:${OFFICE.phone}`}
            className="text-white/70 hover:text-white underline underline-offset-4 transition-colors"
          >
            {OFFICE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
