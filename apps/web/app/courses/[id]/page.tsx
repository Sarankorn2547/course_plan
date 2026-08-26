import { Badge, Card } from "@thaimooc/ui";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "../../../components/app-shell";
import { courses } from "../../../lib/mock-data";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);
  if (!course) notFound();

  return (
    <AppShell>
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section>
          <div className="flex flex-wrap gap-2">
            <Badge>{course.category}</Badge>
            <Badge>{course.difficulty}</Badge>
            <Badge>{course.totalMinutes} minutes</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-ink">{course.title}</h1>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            {course.description}
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-ink">Chapters</h2>
            <div className="mt-3 grid gap-3">
              {course.chapters.map((chapter) => (
                <Card key={chapter.id} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Chapter {chapter.order}</p>
                    <h3 className="font-medium text-ink">{chapter.title}</h3>
                  </div>
                  <span className="text-sm text-slate-600">
                    {chapter.estimatedMinutes} min
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Card className="self-start">
          <h2 className="text-lg font-semibold text-ink">Create Study Plan</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Plans start as drafts and stay editable before calendar sync.
          </p>
          <Link
            href="/plans/editor"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Create Plan
          </Link>
        </Card>
      </div>
    </AppShell>
  );
}
