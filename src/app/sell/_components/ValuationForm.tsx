"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-primary mb-2">
          Request Received!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for your interest. We&apos;ll prepare a comprehensive market
          analysis and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="val-address"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Property Address *
        </label>
        <Input
          id="val-address"
          placeholder="123 Main Street, City, UT"
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="val-beds"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Beds
          </label>
          <Input
            id="val-beds"
            type="number"
            placeholder="4"
            min={0}
            required
          />
        </div>
        <div>
          <label
            htmlFor="val-baths"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Baths
          </label>
          <Input
            id="val-baths"
            type="number"
            placeholder="3"
            min={0}
            step={0.5}
            required
          />
        </div>
        <div>
          <label
            htmlFor="val-sqft"
            className="block text-sm font-medium text-primary mb-1.5"
          >
            Sqft
          </label>
          <Input
            id="val-sqft"
            type="number"
            placeholder="3,200"
            min={0}
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="val-email"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Your Email *
        </label>
        <Input
          id="val-email"
          type="email"
          placeholder="you@email.com"
          required
        />
      </div>
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full mt-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Get My Free Valuation
          </span>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        No obligation. Your information is kept confidential.
      </p>
    </form>
  );
}
