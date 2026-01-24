import { z } from "zod";

/**
 * 特別学修（活動）のスキーマ
 */
export const ActivityCreditSchema = z.object({
  /** 項目名（正式名称） */
  name: z.string().min(1),
  /** 表記（略称） */
  displayName: z.string().min(1),
  /** 単位数 */
  credits: z.number().int().positive(),
  /** 対象学科 */
  targetDepartment: z.enum(["M", "E", "D", "J", "C"]),
  /** 対象学年（例：全学年、3年生以上、4年生以上） */
  targetGrade: z.string(),
});

/**
 * 特別学修（活動）の型
 */
export type ActivityCredit = z.infer<typeof ActivityCreditSchema>;
