import { Module } from "@nestjs/common";
import { CoursesController } from "./courses.controller.js";
import { CoursesRepository, COURSE_PROVIDER } from "./courses.repository.js";
import { CoursesService } from "./courses.service.js";
import { MockCourseProvider } from "./providers/mock-course-provider.js";

@Module({
  controllers: [CoursesController],
  providers: [
    CoursesService,
    CoursesRepository,
    MockCourseProvider,
    {
      provide: COURSE_PROVIDER,
      useExisting: MockCourseProvider,
    },
  ],
  exports: [CoursesService],
})
export class CoursesModule {}
