import { Injectable } from "@nestjs/common";
import type { CreateStudyPlanRequest } from "@thaimooc/contracts";
import { CoursesService } from "../courses/courses.service.js";
import { SchedulingEngine } from "./scheduling-engine.js";

@Injectable()
export class StudyPlansService {
  private readonly schedulingEngine = new SchedulingEngine();

  constructor(private readonly coursesService: CoursesService) {}

  async generatePlan(request: CreateStudyPlanRequest) {
    const course = await this.coursesService.getCourse(request.courseId);
    return this.schedulingEngine.generate(course, request);
  }
}
