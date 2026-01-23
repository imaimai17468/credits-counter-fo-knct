import {
  type SpecialCredit,
  SpecialCreditSchema,
} from "@/entities/credits/special-credit";
import { parseCSV } from "./parseCSV";

/**
 * 共通特別学修データを読み込む
 * @returns 特別学修データの配列
 */
export function loadSpecialCredits(): SpecialCredit[] {
  const fileName = "tokubetu.csv";
  const rows = parseCSV(fileName);

  return rows.map((row) => {
    // CSVフォーマット: 項目,表記,単位数
    const [item, display, creditsStr] = row;

    const specialCredit = {
      item,
      display,
      credits: Number.parseInt(creditsStr, 10),
    };

    // Zodバリデーション
    return SpecialCreditSchema.parse(specialCredit);
  });
}
