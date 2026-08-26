import type { Course, SearchCoursesQuery } from "@thaimooc/contracts";

export interface CourseProvider {
  searchCourses(query: SearchCoursesQuery): Promise<Course[]>;
  getCourse(id: string): Promise<Course | null>;
}
