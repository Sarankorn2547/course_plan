import { Badge, Button, Card } from "@thaimooc/ui";
import { Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { courses } from "../../lib/mock-data";

export default function CoursesPage() {
  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-ink">Courses</h1>
          <p className="mt-2 text-slate-600">
            Mock ThaiMOOC catalog using the provider abstraction.
          </p>
        </div>
        <div className="flex gap-2">
          <input
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
            placeholder="Search Python, data, AI"
          />
          <Button>Search</Button>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge>{course.category}</Badge>
              <Badge>{course.difficulty}</Badge>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">{course.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {course.description}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-3 pt-2">
              <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                <Clock className="h-4 w-4" />
                {course.totalMinutes} min
              </span>
              <Link
                href={`/courses/${course.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-river"
              >
                Details <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
