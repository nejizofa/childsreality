"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PropertyGalleryProps {
  images: string[];
}

const VISIBLE_THUMBS = 5;

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjVGMEU4Ii8+PC9zdmc+";

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);

  const safeImages =
    images.length > 0 ? images : ["/images/placeholder-property.svg"];

  function goTo(direction: "prev" | "next") {
    setActiveIndex((prev) => {
      if (direction === "prev") return prev === 0 ? safeImages.length - 1 : prev - 1;
      return prev === safeImages.length - 1 ? 0 : prev + 1;
    });
  }

  function dialogGoTo(direction: "prev" | "next") {
    setDialogIndex((prev) => {
      if (direction === "prev") return prev === 0 ? safeImages.length - 1 : prev - 1;
      return prev === safeImages.length - 1 ? 0 : prev + 1;
    });
  }

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[16/9] md:aspect-[2/1] w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={safeImages[activeIndex]}
          alt={`Property photo ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 1200px"
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
        />

        {/* Navigation arrows */}
        {safeImages.length > 1 && (
          <>
            <button
              onClick={() => goTo("prev")}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => goTo("next")}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </>
        )}

        {/* Photo count + View All button */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() => setDialogIndex(activeIndex)}
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground shadow-md hover:bg-white transition-colors"
            >
              <Camera className="h-4 w-4" />
              View All Photos ({safeImages.length})
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle>
                Photo {dialogIndex + 1} of {safeImages.length}
              </DialogTitle>
            </DialogHeader>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={safeImages[dialogIndex]}
                alt={`Property photo ${dialogIndex + 1}`}
                fill
                className="object-contain"
                sizes="95vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />

              {safeImages.length > 1 && (
                <>
                  <button
                    onClick={() => dialogGoTo("prev")}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => dialogGoTo("next")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip in dialog */}
            <div className="flex gap-2 p-4 overflow-x-auto">
              {safeImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setDialogIndex(i)}
                  className={cn(
                    "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all",
                    i === dialogIndex
                      ? "border-accent ring-1 ring-accent"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnail strip */}
      {safeImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {safeImages.slice(0, VISIBLE_THUMBS).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative h-20 w-28 md:h-24 md:w-36 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                i === activeIndex
                  ? "border-accent ring-1 ring-accent"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 112px, 144px"
              />
            </button>
          ))}

          {safeImages.length > VISIBLE_THUMBS && (
            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={() => setDialogIndex(VISIBLE_THUMBS)}
                  className="relative h-20 w-28 md:h-24 md:w-36 flex-shrink-0 overflow-hidden rounded-lg border-2 border-transparent bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    +{safeImages.length - VISIBLE_THUMBS} more
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>All Photos ({safeImages.length})</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {safeImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
                    >
                      <Image
                        src={img}
                        alt={`Property photo ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 95vw, 45vw"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      )}
    </div>
  );
}
