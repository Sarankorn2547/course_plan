import { Body, Controller, Post } from "@nestjs/common";
import type { CreateStudyPlanRequest } from "@thaimooc/contracts";
import { StudyPlansService } from "./study-plans.service.js";

@Controller("study-plans")
export class StudyPlansController {
  constructor(private readonly studyPlansService: StudyPlansService) {}

  @Post("generate")
  generatePlan(@Body() request: CreateStudyPlanRequest) {
    return this.studyPlansService.generatePlan(request);
  }
}
