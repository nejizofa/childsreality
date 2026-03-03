"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Clients Say
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
              >
                <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-border text-center">
                  {/* Quote icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Quote className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonial.rating
                            ? "fill-accent text-accent"
                            : "fill-gray-200 text-gray-200"
                        )}
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-foreground text-lg md:text-xl leading-relaxed font-light italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Client info */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-heading text-lg text-foreground font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={cn(
                "rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-8 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-accent/30 hover:bg-accent/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
