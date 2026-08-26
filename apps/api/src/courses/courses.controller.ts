import { Controller, Get, Param, Query } from "@nestjs/common";
import type { CourseDifficulty } from "@thaimooc/contracts";
import { CoursesService } from "./courses.service.js";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  searchCourses(
    @Query("q") q?: string,
    @Query("difficulty") difficulty?: CourseDifficulty,
    @Query("category") category?: string,
  ) {
    return this.coursesService.searchCourses({ q, difficulty, category });
  }

  @Get(":id")
  getCourse(@Param("id") id: string) {
    return this.coursesService.getCourse(id);
  }
}
