import { Injectable } from "@nestjs/common";
import type { AssistantRequest, AssistantResponse } from "@thaimooc/contracts";
import { RecommendationsService } from "../recommendations/recommendations.service.js";

@Injectable()
export class AiService {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  async respond(request: AssistantRequest): Promise<AssistantResponse> {
    const latest = request.messages.at(-1)?.content ?? "";
    const intent = this.classifyIntent(latest);

    if (intent === "COURSE_RECOMMENDATION" || intent === "COURSE_SEARCH") {
      const courseRecommendations = await this.recommendationsService.recommend(latest);
      return {
        intent,
        content:
          courseRecommendations.length > 0
            ? "I found ThaiMOOC courses that match your goal. Pick one when you want to create a study plan."
            : "I could not find a matching course yet. Tell me the topic or skill you want to learn.",
        courseRecommendations,
      };
    }

    if (intent === "CREATE_PLAN") {
      return {
        intent,
        content:
          "To create a study plan, I need the course, your available study times, current skill level, and deadline.",
      };
    }

    if (intent === "CALENDAR_SYNC") {
      return {
        intent,
        content:
          "Calendar sync is explicit. I can help after you review and save the study plan.",
      };
    }

    return {
      intent,
      content:
        "I can help you find ThaiMOOC courses, recommend a course, or create an editable study plan.",
    };
  }

  private classifyIntent(text: string): AssistantResponse["intent"] {
    const normalized = text.toLowerCase();
    if (/(sync|calendar|google calendar)/.test(normalized)) return "CALENDAR_SYNC";
    if (/(plan|schedule|deadline|study)/.test(normalized)) return "CREATE_PLAN";
    if (/(recommend|best|suggest|should i take)/.test(normalized)) return "COURSE_RECOMMENDATION";
    if (/(learn|course|search|find)/.test(normalized)) return "COURSE_SEARCH";
    return "GENERAL_QUESTION";
  }
}
