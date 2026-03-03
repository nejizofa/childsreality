"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SUBJECTS = ["Buying", "Selling", "General Inquiry"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-primary mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. A member of our team will get back to you
          within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Full Name *
        </label>
        <Input id="contact-name" placeholder="John Smith" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Email *
          </label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Phone
          </label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="(801) 555-0123"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary mb-1.5">
          Subject *
        </label>
        <Select value={subject} onValueChange={setSubject} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {SUBJECTS.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us how we can help..."
          required
          className="flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
