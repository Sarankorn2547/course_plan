import type {
  Course,
  CreateStudyPlanRequest,
  StudyPlanResult,
  StudySession,
  UserAvailability,
} from "@thaimooc/contracts";

const sessionId = (chapterId: string, index: number) => `${chapterId}-session-${index}`;

export class SchedulingEngine {
  generate(course: Course, request: CreateStudyPlanRequest): StudyPlanResult {
    const startDate = new Date(request.startDate);
    const deadline = new Date(request.deadline);
    const slots = this.expandAvailability(
      request.availability,
      startDate,
      deadline,
    );
    const availableMinutes = slots.reduce(
      (total, slot) => total + this.minutesBetween(slot.startAt, slot.endAt),
      0,
    );

    if (availableMinutes < course.totalMinutes) {
      return {
        code: "PLAN_NOT_FEASIBLE",
        explanation:
          "Available study time before the deadline is lower than the course requirement.",
        requiredMinutes: course.totalMinutes,
        availableMinutes,
      };
    }

    const sessions: StudySession[] = [];
    let slotIndex = 0;

    [...course.chapters]
      .sort((a, b) => a.order - b.order)
      .forEach((chapter) => {
        let remaining = chapter.estimatedMinutes;
        let part = 1;

        while (remaining > 0) {
          const slot = slots[slotIndex];
          const slotMinutes = this.minutesBetween(slot.cursorAt, slot.endAt);
          const minutes = Math.min(remaining, slotMinutes);
          const endAt = new Date(slot.cursorAt.getTime() + minutes * 60_000);

          sessions.push({
            id: sessionId(chapter.id, part),
            studyPlanId: "draft",
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            startAt: slot.cursorAt.toISOString(),
            endAt: endAt.toISOString(),
            calendarEventId: null,
          });

          slot.cursorAt = endAt;
          remaining -= minutes;
          part += 1;

          if (this.minutesBetween(slot.cursorAt, slot.endAt) === 0) {
            slotIndex += 1;
          }
        }
      });

    return {
      id: `plan-${course.id}-${Date.now()}`,
      userId: request.userId,
      courseId: course.id,
      startDate: startDate.toISOString(),
      deadline: deadline.toISOString(),
      status: "DRAFT",
      createdBy: request.createdBy,
      sessions,
    };
  }

  private expandAvailability(
    availability: UserAvailability[],
    startDate: Date,
    deadline: Date,
  ) {
    const slots: Array<{ startAt: Date; endAt: Date; cursorAt: Date }> = [];
    const cursor = new Date(startDate);
    cursor.setHours(0, 0, 0, 0);

    while (cursor <= deadline) {
      const weekday = cursor.getDay();
      availability
        .filter((slot) => slot.weekday === weekday)
        .forEach((slot) => {
          const startAt = this.withTime(cursor, slot.startTime);
          const endAt = this.withTime(cursor, slot.endTime);
          if (endAt > startDate && startAt < deadline && endAt > startAt) {
            const clippedStart = startAt < startDate ? startDate : startAt;
            const clippedEnd = endAt > deadline ? deadline : endAt;
            slots.push({
              startAt: clippedStart,
              endAt: clippedEnd,
              cursorAt: new Date(clippedStart),
            });
          }
        });
      cursor.setDate(cursor.getDate() + 1);
    }

    return slots.sort((a, b) => a.startAt.getTime() - b.startAt.getTime());
  }

  private withTime(date: Date, time: string) {
    const [hours = "0", minutes = "0"] = time.split(":");
    const value = new Date(date);
    value.setHours(Number(hours), Number(minutes), 0, 0);
    return value;
  }

  private minutesBetween(startAt: Date, endAt: Date) {
    return Math.max(0, Math.floor((endAt.getTime() - startAt.getTime()) / 60_000));
  }
}
