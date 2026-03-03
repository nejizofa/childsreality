"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TEAM } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AgentContactFormProps {
  propertyAddress: string;
}

export function AgentContactForm({ propertyAddress }: AgentContactFormProps) {
  const agent = TEAM[0];
  const initials = agent.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${propertyAddress}. Please send me more information.`,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card className="sticky top-24 shadow-lg border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          {/* Agent photo placeholder with initials */}
          <div className="relative h-14 w-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-semibold text-white">{initials}</span>
          </div>
          <div>
            <CardTitle className="text-base">{agent.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{agent.title}</p>
          </div>
        </div>

        {/* Contact quick links */}
        <div className="flex flex-col gap-2 pt-3">
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 text-accent" />
            {agent.phone}
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 text-accent" />
            {agent.email}
          </a>
        </div>
      </CardHeader>

      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Message Sent!</p>
              <p className="text-sm text-muted-foreground mt-1">
                {agent.name} will get back to you shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="contact-name"
                className="text-xs font-medium text-muted-foreground mb-1 block"
              >
                Full Name
              </label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="text-xs font-medium text-muted-foreground mb-1 block"
              >
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="text-xs font-medium text-muted-foreground mb-1 block"
              >
                Phone (optional)
              </label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="(801) 555-0123"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-xs font-medium text-muted-foreground mb-1 block"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>

            <p className="text-[11px] text-muted-foreground text-center leading-tight">
              By submitting, you agree to receive communication from Childs Real
              Estate. You can unsubscribe at any time.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
