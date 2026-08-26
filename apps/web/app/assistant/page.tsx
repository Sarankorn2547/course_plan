import { Badge, Button, Card } from "@thaimooc/ui";
import { Bot, Send, User } from "lucide-react";
import { AppShell } from "../../components/app-shell";
import { courses } from "../../lib/mock-data";

export default function AssistantPage() {
  return (
    <AppShell>
      <div className="grid min-h-[680px] gap-6 lg:grid-cols-[1fr_380px]">
        <section className="flex flex-col rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-5">
            <h1 className="text-2xl font-semibold text-ink">AI Assistant</h1>
            <p className="mt-1 text-sm text-slate-600">
              Recommends courses and asks only for missing planning details.
            </p>
          </div>
          <div className="flex-1 space-y-4 p-5">
            <div className="flex gap-3">
              <User className="mt-1 h-5 w-5 text-slate-500" />
              <div className="rounded-lg bg-slate-100 p-4 text-sm text-ink">
                I want to learn Python.
              </div>
            </div>
            <div className="flex gap-3">
              <Bot className="mt-1 h-5 w-5 text-river" />
              <div className="rounded-lg bg-river/10 p-4 text-sm leading-6 text-ink">
                Python Programming Foundations is the best match. It is beginner
                friendly, practical, and short enough to schedule around work.
                Tell me your availability and deadline when you want a study plan.
              </div>
            </div>
          </div>
          <form className="flex gap-3 border-t border-slate-200 p-4">
            <input
              className="h-11 flex-1 rounded-md border border-slate-300 px-3 text-sm"
              placeholder="Ask for a course recommendation"
            />
            <Button aria-label="Send message">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </section>
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-ink">Suggested Courses</h2>
          {courses.slice(0, 2).map((course) => (
            <Card key={course.id}>
              <Badge>{course.difficulty}</Badge>
              <h3 className="mt-3 font-semibold text-ink">{course.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {course.description}
              </p>
            </Card>
          ))}
        </aside>
      </div>
    </AppShell>
  );
}
