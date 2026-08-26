import { Injectable } from "@nestjs/common";
import type { Course, SearchCoursesQuery } from "@thaimooc/contracts";
import type { CourseProvider } from "./course-provider.js";

const courses: Course[] = [
  {
    id: "mock-python-foundations",
    provider: "mock-thaimooc",
    title: "Python Programming Foundations",
    description:
      "Learn Python syntax, control flow, functions, data structures, and practical scripting for beginners.",
    difficulty: "BEGINNER",
    category: "Programming",
    totalMinutes: 360,
    courseUrl: "https://thaimooc.org/course/mock-python-foundations",
    chapters: [
      { id: "py-1", courseId: "mock-python-foundations", order: 1, title: "Getting Started with Python", estimatedMinutes: 60 },
      { id: "py-2", courseId: "mock-python-foundations", order: 2, title: "Control Flow", estimatedMinutes: 75 },
      { id: "py-3", courseId: "mock-python-foundations", order: 3, title: "Functions and Modules", estimatedMinutes: 90 },
      { id: "py-4", courseId: "mock-python-foundations", order: 4, title: "Data Structures", estimatedMinutes: 90 },
      { id: "py-5", courseId: "mock-python-foundations", order: 5, title: "Final Practice Project", estimatedMinutes: 45 },
    ],
  },
  {
    id: "mock-data-literacy",
    provider: "mock-thaimooc",
    title: "Data Literacy for Everyday Decisions",
    description:
      "Build confidence reading charts, interpreting statistics, and communicating data-driven insights.",
    difficulty: "BEGINNER",
    category: "Data",
    totalMinutes: 300,
    courseUrl: "https://thaimooc.org/course/mock-data-literacy",
    chapters: [
      { id: "dl-1", courseId: "mock-data-literacy", order: 1, title: "Understanding Data Types", estimatedMinutes: 45 },
      { id: "dl-2", courseId: "mock-data-literacy", order: 2, title: "Reading Visualizations", estimatedMinutes: 75 },
      { id: "dl-3", courseId: "mock-data-literacy", order: 3, title: "Basic Statistics", estimatedMinutes: 90 },
      { id: "dl-4", courseId: "mock-data-literacy", order: 4, title: "Communicating with Data", estimatedMinutes: 90 },
    ],
  },
  {
    id: "mock-ai-education",
    provider: "mock-thaimooc",
    title: "AI for Educators",
    description:
      "Apply generative AI tools to lesson planning, feedback, assessment design, and classroom workflows.",
    difficulty: "INTERMEDIATE",
    category: "Education Technology",
    totalMinutes: 420,
    courseUrl: "https://thaimooc.org/course/mock-ai-education",
    chapters: [
      { id: "aie-1", courseId: "mock-ai-education", order: 1, title: "AI Capabilities and Limits", estimatedMinutes: 75 },
      { id: "aie-2", courseId: "mock-ai-education", order: 2, title: "Prompting for Lesson Design", estimatedMinutes: 90 },
      { id: "aie-3", courseId: "mock-ai-education", order: 3, title: "Feedback and Assessment", estimatedMinutes: 105 },
      { id: "aie-4", courseId: "mock-ai-education", order: 4, title: "Ethics and Classroom Policy", estimatedMinutes: 90 },
      { id: "aie-5", courseId: "mock-ai-education", order: 5, title: "Implementation Plan", estimatedMinutes: 60 },
    ],
  },
];

@Injectable()
export class MockCourseProvider implements CourseProvider {
  async searchCourses(query: SearchCoursesQuery): Promise<Course[]> {
    const text = query.q?.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesText =
        !text ||
        [course.title, course.description, course.category]
          .join(" ")
          .toLowerCase()
          .includes(text);
      const matchesDifficulty =
        !query.difficulty || course.difficulty === query.difficulty;
      const matchesCategory =
        !query.category ||
        course.category.toLowerCase() === query.category.toLowerCase();
      return matchesText && matchesDifficulty && matchesCategory;
    });
  }

  async getCourse(id: string): Promise<Course | null> {
    return courses.find((course) => course.id === id) ?? null;
  }
}
