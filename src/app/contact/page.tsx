import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM, OFFICE, SITE_NAME } from "@/lib/constants";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_NAME}. We're here to help with buying, selling, or any real estate questions you may have.`,
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function ContactPage() {
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your real estate journey? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Two-column: Form + Info */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-semibold text-primary mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll respond within one
                    business day.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Right: Office Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Office Details */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-6">
                  Our Office
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">
                        Address
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {OFFICE.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">Phone</p>
                      <a
                        href={`tel:${OFFICE.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {OFFICE.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">Email</p>
                      <a
                        href={`mailto:${OFFICE.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {OFFICE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sat: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sun: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl bg-secondary/5 border border-border/50 overflow-hidden">
                <div className="flex items-center justify-center h-48">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Quick Cards */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                  Reach Out Directly
                </h3>
                <div className="space-y-3">
                  {TEAM.map((member) => (
                    <Card
                      key={member.name}
                      className="border-border/50 hover:border-accent/30 transition-colors"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-heading font-semibold text-white">
                              {getInitials(member.name)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary truncate">
                              {member.name}
                            </p>
                            <p className="text-xs text-accent">{member.title}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <a
                              href={`tel:${member.phone}`}
                              className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                            >
                              <Phone className="h-3.5 w-3.5" />
                            </a>
                            <a
                              href={`mailto:${member.email}`}
                              className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                            >
                              <Mail className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
