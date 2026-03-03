import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/constants";
import { Button } from "@/components/ui/button";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TeamPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Our Agents
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Meet Your Team
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated professionals committed to making your real estate
            experience exceptional.
          </p>
        </div>

        {/* Agent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group bg-white border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Avatar circle with initials */}
              <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-3xl font-heading text-white font-semibold">
                  {getInitials(member.name)}
                </span>
              </div>

              {/* Name and title */}
              <h3 className="font-heading text-xl text-foreground font-semibold">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium mt-1 tracking-wide">
                {member.title}
              </p>

              {/* Bio excerpt */}
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {member.bio}
              </p>

              {/* Contact links */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Call ${member.name}`}
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">{member.phone}</span>
                </a>
                <div className="h-4 w-px bg-border" />
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Learn more link */}
        <div className="mt-14 text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
