import { Module } from "@nestjs/common";
import { CoursesModule } from "../courses/courses.module.js";
import { RecommendationsController } from "./recommendations.controller.js";
import { RecommendationsService } from "./recommendations.service.js";

@Module({
  imports: [CoursesModule],
  controllers: [RecommendationsController],
  providers: [RecommendationsService],
  exports: [RecommendationsService],
})
export class RecommendationsModule {}
