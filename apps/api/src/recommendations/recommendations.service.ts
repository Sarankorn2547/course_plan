import { Injectable } from "@nestjs/common";
import type { Course } from "@thaimooc/contracts";
import { CoursesService } from "../courses/courses.service.js";

@Injectable()
export class RecommendationsService {
  constructor(private readonly coursesService: CoursesService) {}

  async recommend(goal: string, skillLevel?: string): Promise<Course[]> {
    const courses = await this.coursesService.searchCourses({ q: goal });
    const normalizedSkill = skillLevel?.toUpperCase();
    const filtered = normalizedSkill
      ? courses.filter((course) => course.difficulty === normalizedSkill)
      : courses;
    return (filtered.length > 0 ? filtered : courses).slice(0, 3);
  }
}
