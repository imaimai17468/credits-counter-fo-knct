import fs from "node:fs";
import path from "node:path";

/**
 * 利用可能な年度一覧を取得
 * public/data/credits/ 配下のディレクトリ名を年度として扱う
 * @returns 年度の配列（降順ソート）
 */
export function getAvailableYears(): string[] {
  const creditsDir = path.join(process.cwd(), "public", "data", "credits");

  try {
    const entries = fs.readdirSync(creditsDir, { withFileTypes: true });
    const years = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((name) => /^\d{4}$/.test(name)) // 4桁の数字のみ
      .sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10)); // 降順

    return years;
  } catch (error) {
    console.error("Failed to read available years:", error);
    return [];
  }
}
