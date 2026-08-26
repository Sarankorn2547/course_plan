import { Badge, Button, Card } from "@thaimooc/ui";
import { CalendarPlus, GripVertical, Save } from "lucide-react";
import { AppShell } from "../../../components/app-shell";
import { draftSessions } from "../../../lib/mock-data";

const formatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
});

export default function PlanEditorPage() {
  return (
    <AppShell>
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge>DRAFT</Badge>
              <h1 className="mt-3 text-3xl font-semibold text-ink">
                Python Study Plan
              </h1>
              <p className="mt-2 text-slate-600">
                Edit sessions before marking ready or syncing with Google Calendar.
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="gap-2 bg-leaf">
                <Save className="h-4 w-4" />
                Save
              </Button>
              <Button className="gap-2 bg-river">
                <CalendarPlus className="h-4 w-4" />
                Sync
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {draftSessions.map((session) => (
              <Card key={session.id} className="grid gap-4 md:grid-cols-[24px_1fr_220px]">
                <GripVertical className="mt-1 h-5 w-5 text-slate-400" />
                <div>
                  <h2 className="font-medium text-ink">{session.chapterTitle}</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Preserves chapter order. Drag handles prepare for manual editing.
                  </p>
                </div>
                <div className="rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                  {formatter.format(new Date(session.startAt))}
                </div>
              </Card>
            ))}
          </div>
        </section>
        <Card className="self-start">
          <h2 className="text-lg font-semibold text-ink">Plan Inputs</h2>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm">
              Skill Level
              <select className="h-10 rounded-md border border-slate-300 bg-white px-3">
                <option>Beginner</option>
                <option>Intermediate</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              Deadline
              <input className="h-10 rounded-md border border-slate-300 px-3" type="date" />
            </label>
            <label className="grid gap-1 text-sm">
              Availability
              <textarea
                className="min-h-28 rounded-md border border-slate-300 p-3"
                defaultValue={"Tue 19:00-20:00\nThu 19:00-20:30\nSat 10:00-12:00"}
              />
            </label>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
