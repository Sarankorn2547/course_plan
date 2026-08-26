import { Body, Controller, Post } from "@nestjs/common";
import type { AssistantRequest } from "@thaimooc/contracts";
import { AiService } from "./ai.service.js";

@Controller("ai")
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post("chat")
  chat(@Body() request: AssistantRequest) {
    return this.aiService.respond(request);
  }
}
