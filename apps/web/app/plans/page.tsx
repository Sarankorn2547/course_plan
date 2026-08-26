import { Badge, Card } from "@thaimooc/ui";
import Link from "next/link";
import { AppShell } from "../../components/app-shell";

export default function PlansPage() {
  return (
    <AppShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-ink">Study Plans</h1>
          <p className="mt-2 text-slate-600">
            Saved plans move from draft to ready, active, then completed.
          </p>
        </div>
        <Link
          href="/plans/editor"
          className="inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          New Plan
        </Link>
      </div>
      <Card className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge>DRAFT</Badge>
            <h2 className="mt-3 text-xl font-semibold text-ink">
              Python Programming Foundations
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              3 sessions drafted. Review before saving and syncing.
            </p>
          </div>
          <Link
            href="/plans/editor"
            className="inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Edit Plan
          </Link>
        </div>
      </Card>
    </AppShell>
  );
}
