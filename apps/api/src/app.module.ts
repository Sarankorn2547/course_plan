import { Module } from "@nestjs/common";
import { AiModule } from "./ai/ai.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { CalendarModule } from "./calendar/calendar.module.js";
import { CoursesModule } from "./courses/courses.module.js";
import { RecommendationsModule } from "./recommendations/recommendations.module.js";
import { StudyPlansModule } from "./study-plans/study-plans.module.js";
import { StudySessionsModule } from "./study-sessions/study-sessions.module.js";
import { UsersModule } from "./users/users.module.js";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CoursesModule,
    StudyPlansModule,
    StudySessionsModule,
    CalendarModule,
    RecommendationsModule,
    AiModule,
  ],
})
export class AppModule {}
