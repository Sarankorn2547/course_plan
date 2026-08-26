import { Module } from "@nestjs/common";
import { RecommendationsModule } from "../recommendations/recommendations.module.js";
import { AiController } from "./ai.controller.js";
import { AiService } from "./ai.service.js";

@Module({
  imports: [RecommendationsModule],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
