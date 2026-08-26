export type CourseDifficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type StudyPlanStatus = "DRAFT" | "READY" | "ACTIVE" | "COMPLETED";
export type StudyPlanCreator = "AI" | "MANUAL";
export type AiIntent =
  | "GENERAL_QUESTION"
  | "COURSE_SEARCH"
  | "COURSE_RECOMMENDATION"
  | "CREATE_PLAN"
  | "MODIFY_PLAN"
  | "CALENDAR_SYNC";

export interface CourseChapter {
  id: string;
  courseId: string;
  order: number;
  title: string;
  estimatedMinutes: number;
}

export interface Course {
  id: string;
  provider: "mock-thaimooc" | "thaimooc";
  title: string;
  description: string;
  difficulty: CourseDifficulty;
  category: string;
  totalMinutes: number;
  courseUrl: string;
  chapters: CourseChapter[];
}

export interface UserAvailability {
  weekday: number;
  startTime: string;
  endTime: string;
}

export interface StudySession {
  id: string;
  studyPlanId: string;
  chapterId: string;
  chapterTitle: string;
  startAt: string;
  endAt: string;
  calendarEventId?: string | null;
}

export interface StudyPlan {
  id: string;
  userId: string;
  courseId: string;
  startDate: string;
  deadline: string;
  status: StudyPlanStatus;
  createdBy: StudyPlanCreator;
  sessions: StudySession[];
}

export interface SearchCoursesQuery {
  q?: string;
  difficulty?: CourseDifficulty;
  category?: string;
}

export interface CreateStudyPlanRequest {
  userId: string;
  courseId: string;
  startDate: string;
  deadline: string;
  availability: UserAvailability[];
  createdBy: StudyPlanCreator;
}

export interface PlanNotFeasible {
  code: "PLAN_NOT_FEASIBLE";
  explanation: string;
  requiredMinutes: number;
  availableMinutes: number;
}

export type StudyPlanResult = StudyPlan | PlanNotFeasible;

export interface AssistantMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AssistantRequest {
  userId: string;
  messages: AssistantMessage[];
}

export interface AssistantResponse {
  intent: AiIntent;
  content: string;
  courseRecommendations?: Course[];
}
