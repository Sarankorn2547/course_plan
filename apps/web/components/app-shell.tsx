import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  ["Dashboard", "/"],
  ["Assistant", "/assistant"],
  ["Courses", "/courses"],
  ["Plans", "/plans"],
  ["Calendar", "/calendar"],
  ["Settings", "/settings"],
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="text-lg font-semibold text-ink">
            ThaiMOOC AI Learning Planner
          </Link>
          <nav className="flex flex-wrap gap-1">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8">{children}</main>
    </div>
  );
}
