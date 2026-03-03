import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
          <Home className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-primary">
          Page Not Found
        </h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
