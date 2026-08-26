import { Inject, Injectable } from "@nestjs/common";
import type { SearchCoursesQuery } from "@thaimooc/contracts";
import type { CourseProvider } from "./providers/course-provider.js";

export const COURSE_PROVIDER = Symbol("COURSE_PROVIDER");

@Injectable()
export class CoursesRepository {
  constructor(
    @Inject(COURSE_PROVIDER) private readonly provider: CourseProvider,
  ) {}

  search(query: SearchCoursesQuery) {
    return this.provider.searchCourses(query);
  }

  findById(id: string) {
    return this.provider.getCourse(id);
  }
}
