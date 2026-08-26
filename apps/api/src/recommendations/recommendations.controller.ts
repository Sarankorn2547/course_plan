import { Body, Controller, Post } from "@nestjs/common";
import { RecommendationsService } from "./recommendations.service.js";

@Controller("recommendations")
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Post()
  recommend(@Body() body: { goal: string; skillLevel?: string }) {
    return this.recommendationsService.recommend(body.goal, body.skillLevel);
  }
}
