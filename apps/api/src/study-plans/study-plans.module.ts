import { Module } from "@nestjs/common";
import { CoursesModule } from "../courses/courses.module.js";
import { StudyPlansController } from "./study-plans.controller.js";
import { StudyPlansService } from "./study-plans.service.js";

@Module({
  imports: [CoursesModule],
  controllers: [StudyPlansController],
  providers: [StudyPlansService],
  exports: [StudyPlansService],
})
export class StudyPlansModule {}
