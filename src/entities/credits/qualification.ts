import { z } from "zod";

/**
 * 資格データ
 */
export const QualificationSchema = z.object({
  /** 項目（例: 機械設計技術者試験3級） */
  item: z.string(),
  /** 表記（例: 機械設計技術者:3級） */
  display: z.string(),
  /** 単位数 */
  credits: z.number().int().positive(),
});

export type Qualification = z.infer<typeof QualificationSchema>;
