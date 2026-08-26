import { Injectable, NotFoundException } from "@nestjs/common";
import type { SearchCoursesQuery } from "@thaimooc/contracts";
import { CoursesRepository } from "./courses.repository.js";

@Injectable()
export class CoursesService {
  constructor(private readonly coursesRepository: CoursesRepository) {}

  searchCourses(query: SearchCoursesQuery) {
    return this.coursesRepository.search(query);
  }

  async getCourse(id: string) {
    const course = await this.coursesRepository.findById(id);
    if (!course) {
      throw new NotFoundException(`Course ${id} not found`);
    }
    return course;
  }
}
