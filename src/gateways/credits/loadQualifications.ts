import type { Department } from "@/entities/credits/department";
import {
  type Qualification,
  QualificationSchema,
} from "@/entities/credits/qualification";
import { parseCSV } from "./parseCSV";

/**
 * 学科別資格データを読み込む
 * @param department - 学科コード (M/E/D/J/C)
 * @param year - 年度（例: "2023", "2024"）
 * @returns 資格データの配列
 */
export function loadQualifications(
  department: Department,
  year: string = "2023",
): Qualification[] {
  const fileName = `sikaku_${department.toLowerCase()}.csv`;
  const rows = parseCSV(fileName, year);

  return rows.map((row, index) => {
    // CSVフォーマット: 項目,表記,単位数
    const [item, display, creditsStr] = row;

    const qualification = {
      item,
      display,
      credits: Number.parseInt(creditsStr, 10),
    };

    // Zodバリデーション
    try {
      return QualificationSchema.parse(qualification);
    } catch (error) {
      console.error(
        `Failed to parse qualification at row ${index + 1} in ${fileName}:`,
        { qualification, row, error },
      );
      throw error;
    }
  });
}

/**
 * 全学科の資格データを読み込む
 * @param year - 年度（例: "2023", "2024"）
 * @returns 学科ごとの資格データマップ
 */
export function loadAllQualifications(
  year: string = "2023",
): Record<Department, Qualification[]> {
  const departments: Department[] = ["M", "E", "D", "J", "C"];

  return departments.reduce(
    (acc, dept) => {
      acc[dept] = loadQualifications(dept, year);
      return acc;
    },
    {} as Record<Department, Qualification[]>,
  );
}
