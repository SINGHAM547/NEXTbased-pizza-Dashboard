import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Pizza Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Welcome to the Pizza Dashboard. Please log in to access your dashboard.
        </p>
        <div className="flex justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/login">
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}