import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <section className="flex max-w-2xl flex-col items-start gap-6 py-8 sm:py-16">
      <div className="rounded-xl bg-primary/10 p-4 text-primary">
        <BookOpen className="size-8" aria-hidden="true" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Dashboard</p>
        <h1 className="page-title">Welcome to Classroom</h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Explore the subject catalog. Find a subject by name, browse departments,
          and discover what you can learn next.
        </p>
      </div>
      <Button asChild>
        <Link to="/subjects">Browse subjects <ArrowRight aria-hidden="true" /></Link>
      </Button>
    </section>
  );
}
