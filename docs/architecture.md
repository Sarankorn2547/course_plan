# ThaiMOOC AI Learning Planner Architecture

The MVP is a modular monolith with a Next.js frontend, NestJS REST API, shared
TypeScript contracts, and a Prisma/PostgreSQL persistence package.

## Boundaries

- AI only reasons and selects backend tools.
- Course discovery goes through `CourseProvider`.
- Study plan scheduling is deterministic and returns `PLAN_NOT_FEASIBLE` when
  availability cannot satisfy the deadline.
- Calendar sync must be requested explicitly after a plan is reviewed.

## Provider Strategy

`CourseProvider` is the API boundary for catalog data. The MVP binds
`MockCourseProvider`; a future ThaiMOOC implementation should implement the same
interface without changing recommendation or planning callers.

## API Surface

- `GET /courses`
- `GET /courses/:id`
- `POST /recommendations`
- `POST /study-plans/generate`
- `POST /ai/chat`
- `GET /calendar/status`
