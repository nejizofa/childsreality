import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Award,
  Users,
  Shield,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM, OFFICE, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_NAME} — our story, our team, and our commitment to exceptional real estate service in Utah County and the Salt Lake Valley.`,
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function getSocialIcon(platform: string) {
  switch (platform) {
    case "instagram":
      return <Instagram className="h-4 w-4" />;
    case "facebook":
      return <Facebook className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="Childs Real Estate Logo"
              width={480}
              height={180}
              className="h-16 w-auto rounded-lg"
            />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            About {SITE_NAME}
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Trusted partners in Utah real estate, guided by integrity,
            expertise, and a genuine passion for helping families find home.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
                Rooted in Community,{" "}
                <span className="text-accent">Driven by Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {SITE_NAME} was founded with a simple belief: buying or
                  selling a home should be one of life&apos;s most rewarding
                  experiences. Ammon and Tasha Childs built their practice on
                  this principle, combining deep local knowledge with a
                  white-glove approach to every transaction.
                </p>
                <p>
                  Based in Utah County, we specialize in luxury and residential
                  real estate across the Wasatch Front. From first-time
                  homebuyers to seasoned investors, we bring the same level of
                  dedication, market insight, and personal attention to every
                  client relationship.
                </p>
                <p>
                  With over 26 years of combined experience and hundreds of
                  successful closings, our team has the track record and local
                  expertise to deliver exceptional results. We don&apos;t just
                  close deals — we build lasting relationships.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  label: "Combined Experience",
                  value: "26+",
                },
                {
                  icon: Users,
                  label: "Happy Clients",
                  value: "550+",
                },
                {
                  icon: BadgeCheck,
                  label: "Divorce Certified",
                  value: "CDC®",
                },
                {
                  icon: BadgeCheck,
                  label: "55+ Certified",
                  value: "SRES®",
                },
                {
                  icon: BadgeCheck,
                  label: "Accredited Buyer's Agent",
                  value: "ABR®",
                },
                {
                  icon: BadgeCheck,
                  label: "Certified Listing Agent",
                  value: "ALHS®",
                },
                {
                  icon: BadgeCheck,
                  label: "Negotiation Expert",
                  value: "CNE®",
                },
                {
                  icon: BadgeCheck,
                  label: "Valuation Expert",
                  value: "CVE®",
                },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="text-center p-6 border-border/50 hover:border-accent/30 transition-colors"
                >
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="font-heading text-2xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                Our Team
              </span>
              <div className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Meet the People Behind Your{" "}
              <span className="text-accent">Perfect Move</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team is committed to making your real estate
              journey seamless, informed, and ultimately successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TEAM.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Photo / Initials Avatar */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      {member.image && !member.image.endsWith(".svg") ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-accent/20">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: (member as { imagePosition?: string }).imagePosition ?? "center" }}
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-heading font-semibold text-white">
                            {getInitials(member.name)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-heading text-xl font-semibold text-primary">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium text-sm mt-1">
                        {member.title}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        {member.bio}
                      </p>

                      {/* Contact */}
                      <div className="mt-4 space-y-2">
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 text-accent" />
                          {member.phone}
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5 text-accent" />
                          {member.email}
                        </a>
                      </div>

                      {/* Social */}
                      {member.social && (
                        <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
                          {Object.entries(member.social).map(
                            ([platform, url]) => (
                              <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                              >
                                {getSocialIcon(platform)}
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BHHS Affiliation */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Our Affiliation
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
            Backed by{" "}
            <span className="text-accent">Berkshire Hathaway HomeServices</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              As proud members of Berkshire Hathaway HomeServices Elite Real
              Estate, we leverage one of the most trusted and respected brands in
              the world. This affiliation gives our clients access to an
              unmatched global network, cutting-edge marketing technology, and
              the credibility that comes with the Berkshire Hathaway name.
            </p>
            <p>
              The BHHS network spans over 50,000 agents across the globe,
              ensuring your listing receives maximum exposure and that you have
              access to the most comprehensive property search available. Our
              partnership means your home is marketed with the prestige and reach
              that only a world-class brand can provide.
            </p>
          </div>
          <div className="mt-10 inline-flex items-center gap-3 bg-muted rounded-xl px-8 py-4 border border-border/50">
            <Shield className="h-8 w-8 text-accent" />
            <div className="text-left">
              <p className="font-heading font-semibold text-primary">
                Berkshire Hathaway HomeServices
              </p>
              <p className="text-sm text-muted-foreground">
                Elite Real Estate - Independently Owned & Operated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Visit Our <span className="text-accent">Office</span>
            </h2>
          </div>
          <Card className="border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Interactive Map */}
                <div className="min-h-[280px] md:min-h-full">
                  <iframe
                    src="https://www.google.com/maps?q=825+E+1180+S+300,+American+Fork,+UT+84003&output=embed"
                    width="100%"
                    height="100%"
                    style={{ minHeight: "280px", border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Childs Real Estate Office Location"
                  />
                </div>
                {/* Details */}
                <div className="p-8 md:p-10">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                    {OFFICE.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-accent mt-2 mb-6" />
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary">
                          Address
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {OFFICE.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary">
                          Phone
                        </p>
                        <a
                          href={`tel:${OFFICE.phone}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {OFFICE.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary">
                          Email
                        </p>
                        <a
                          href={`mailto:${OFFICE.email}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {OFFICE.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Start Your{" "}
            <span className="text-accent">Real Estate Journey?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying, selling, or just exploring your options,
            we&apos;d love to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
