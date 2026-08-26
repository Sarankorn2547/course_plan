# ThaiMOOC AI Learning Planner

AI planning layer for ThaiMOOC course discovery, recommendation, deterministic
study scheduling, editable plans, and explicit Google Calendar sync.

## Workspace

- `apps/web` - Next.js frontend
- `apps/api` - NestJS REST API
- `packages/contracts` - shared TypeScript contracts
- `packages/database` - Prisma schema and generated client package
- `packages/ui` - shared UI primitives
- `docs` - architecture notes
- `docker` - local infrastructure

## Getting Started

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm dev
```

Local services:

```bash
docker compose -f docker/docker-compose.yml up -d
```

## MVP Principles

1. AI assists; backend decides.
2. Study plans are saved before calendar events exist.
3. Calendar synchronization is always explicit.
4. AI-generated plans remain editable.
5. External course systems are hidden behind provider abstractions.
