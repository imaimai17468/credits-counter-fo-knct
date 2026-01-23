import { type Course, CourseSchema } from "@/entities/credits/course";
import {
  DEPARTMENT_INFO,
  type Department,
} from "@/entities/credits/department";
import { parseCSV } from "./parseCSV";

/**
 * 指定学科の授業データを読み込む
 * @param department - 学科コード (M/E/D/J/C)
 * @param year - 年度（例: "2023", "2024"）
 * @returns 授業データの配列
 */
export function loadCourses(
  department: Department,
  year: string = "2023",
): Course[] {
  const fileName = DEPARTMENT_INFO[department].csvFile;
  const rows = parseCSV(fileName, year);

  return rows.map((row, index) => {
    // CSVフォーマット: 教科名,学年,科目,区分,単位数
    const [subjectName, gradeStr, category, type, creditsStr] = row;

    const course = {
      subjectName,
      grade: Number.parseInt(gradeStr, 10),
      category,
      type,
      credits: Number.parseInt(creditsStr, 10),
    };

    // Zodバリデーション
    try {
      return CourseSchema.parse(course);
    } catch (error) {
      console.error(
        `Failed to parse course at row ${index + 1} in ${fileName}:`,
        { course, row, error },
      );
      throw error;
    }
  });
}

/**
 * 全学科の授業データを読み込む
 * @param year - 年度（例: "2023", "2024"）
 * @returns 学科ごとの授業データマップ
 */
export function loadAllCourses(
  year: string = "2023",
): Record<Department, Course[]> {
  const departments: Department[] = ["M", "E", "D", "J", "C"];

  return departments.reduce(
    (acc, dept) => {
      acc[dept] = loadCourses(dept, year);
      return acc;
    },
    {} as Record<Department, Course[]>,
  );
}
