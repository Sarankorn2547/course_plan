import { Button, Card } from "@thaimooc/ui";
import { CalendarCheck, PlugZap } from "lucide-react";
import { AppShell } from "../../components/app-shell";

export default function CalendarPage() {
  return (
    <AppShell>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section>
          <h1 className="text-3xl font-semibold text-ink">Calendar</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Google Calendar sync is explicit and operates on reviewed study sessions.
          </p>
          <Card className="mt-6">
            <div className="flex items-start gap-4">
              <CalendarCheck className="mt-1 h-6 w-6 text-leaf" />
              <div>
                <h2 className="font-semibold text-ink">No events synced yet</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Save a plan as ready, connect Google, then create calendar events.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <Card className="self-start">
          <PlugZap className="h-6 w-6 text-river" />
          <h2 className="mt-3 text-lg font-semibold text-ink">Google Connection</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            OAuth credentials are configured through backend environment variables.
          </p>
          <Button className="mt-5">Connect Google</Button>
        </Card>
      </div>
    </AppShell>
  );
}
