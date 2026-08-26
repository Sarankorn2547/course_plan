import { Card } from "@thaimooc/ui";
import { AppShell } from "../../components/app-shell";

export default function SettingsPage() {
  return (
    <AppShell>
      <h1 className="text-3xl font-semibold text-ink">Settings</h1>
      <Card className="mt-6 max-w-xl">
        <h2 className="text-lg font-semibold text-ink">Profile</h2>
        <div className="mt-4 grid gap-3">
          <label className="grid gap-1 text-sm">
            Timezone
            <input
              className="h-10 rounded-md border border-slate-300 px-3"
              defaultValue="Asia/Bangkok"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Preferred Study Days
            <input
              className="h-10 rounded-md border border-slate-300 px-3"
              defaultValue="Tue, Thu, Sat"
            />
          </label>
        </div>
      </Card>
    </AppShell>
  );
}
