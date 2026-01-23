import { z } from "zod";

/**
 * 科目カテゴリ（一般 or 専門）
 */
export const CourseCategorySchema = z.enum(["一般", "専門"]);

export type CourseCategory = z.infer<typeof CourseCategorySchema>;

/**
 * 履修区分（必修 or 選択 or 必修選択 or 必修（留学生））
 */
export const CourseTypeSchema = z.enum([
  "必修",
  "選択",
  "必修選択",
  "必修（留学生）",
]);

export type CourseType = z.infer<typeof CourseTypeSchema>;

/**
 * 授業科目データ
 */
export const CourseSchema = z.object({
  /** 教科名（例: 国語ⅠA） */
  subjectName: z.string(),
  /** 学年（1-5） */
  grade: z.number().int().min(1).max(5),
  /** 科目カテゴリ（一般 or 専門） */
  category: CourseCategorySchema,
  /** 履修区分（必修 or 選択） */
  type: CourseTypeSchema,
  /** 単位数 */
  credits: z.number().int().positive(),
});

export type Course = z.infer<typeof CourseSchema>;

/**
 * 卒業要件定数
 */
export const GRADUATION_REQUIREMENTS = {
  /** 合計必要単位数 */
  TOTAL: 167,
  /** 一般科目必要単位数 */
  GENERAL: 75,
  /** 専門科目必要単位数 */
  SPECIALTY: 82,
  /** 特別学修認定最大単位数 */
  MAX_SPECIAL_LEARNING: 10,
} as const;
