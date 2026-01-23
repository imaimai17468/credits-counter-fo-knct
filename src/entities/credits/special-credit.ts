import { z } from "zod";

/**
 * 特別学修データ
 */
export const SpecialCreditSchema = z.object({
  /** 項目（例: 日本漢字能力検定1級） */
  item: z.string(),
  /** 表記（例: 漢字検定:1級） */
  display: z.string(),
  /** 単位数 */
  credits: z.number().int().positive(),
});

export type SpecialCredit = z.infer<typeof SpecialCreditSchema>;
