import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-secondary px-4">
      <h1 className="text-6xl font-heading font-bold text-foreground mb-4">
        404
      </h1>
      <p className="text-xl text-muted-foreground mb-8 text-center">
        {"The page you're looking for doesn't exist."}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-royal text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </main>
  );
}
