import fs from "node:fs";
import path from "node:path";
import {
  type ActivityCredit,
  ActivityCreditSchema,
} from "@/entities/credits/activity-credit";

/**
 * 特別学修（活動）データを読み込む
 * @param year - 年度（例: "2023", "2024"）
 * @returns 特別学修（活動）データの配列
 */
export function loadActivityCredits(year: string = "2024"): ActivityCredit[] {
  // 2023年度（令和4,5年度）には活動系データは存在しない
  if (year === "2023" || year === "2021") {
    return [];
  }
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "credits",
    "tokubetu_katsudou_2025.csv",
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Activity credits CSV file not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").filter((line) => line.trim() !== "");

  // ヘッダー行を除外
  const dataLines = lines.slice(1);

  const rows = dataLines.map((line) =>
    line.split(",").map((cell) => cell.trim()),
  );

  return rows.map((row) => {
    // CSVフォーマット: 項目,表記,単位数,対象学科,対象学年
    const [name, displayName, creditsStr, targetDepartment, targetGrade] = row;

    const activityCredit = {
      name,
      displayName,
      credits: Number.parseInt(creditsStr, 10),
      targetDepartment,
      targetGrade,
    };

    // Zodバリデーション
    return ActivityCreditSchema.parse(activityCredit);
  });
}
