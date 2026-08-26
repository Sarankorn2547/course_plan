import { Badge, Card } from "@thaimooc/ui";
import { CalendarDays, GraduationCap, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { AppShell } from "../components/app-shell";

const features: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Course Search",
    description: "Mock ThaiMOOC provider with search and filters.",
    Icon: GraduationCap,
  },
  {
    title: "AI Planner",
    description: "Intent-aware assistant for recommendations and plan requests.",
    Icon: Sparkles,
  },
  {
    title: "Calendar Sync",
    description: "Explicit Google Calendar sync after plan review.",
    Icon: CalendarDays,
  },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="py-8">
          <Badge>MVP planning workspace</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Discover ThaiMOOC courses and turn them into editable study plans.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The app acts as a planning layer: AI recommends, the backend schedules
            deterministically, and calendar sync only happens after review.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/assistant"
              className="inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Open Assistant
            </Link>
            <Link
              href="/courses"
              className="inline-flex h-10 items-center rounded-md border border-slate-300 px-4 text-sm font-medium text-ink hover:bg-white"
            >
              Browse Courses
            </Link>
          </div>
        </section>
        <Card className="grid gap-4 self-start">
          {features.map(({ title, description, Icon }) => (
            <div key={title} className="flex gap-4 rounded-md bg-slate-50 p-4">
              <Icon className="mt-1 h-5 w-5 text-river" />
              <div>
                <h2 className="font-medium text-ink">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </AppShell>
  );
}
