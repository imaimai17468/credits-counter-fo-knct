import fs from "node:fs";
import path from "node:path";

/**
 * CSVファイルを読み込んで行ごとに解析する共通関数
 * @param fileName - public/data/credits/ 内のファイル名
 * @returns CSVの各行を配列として返す（ヘッダー行を除く）
 */
export function parseCSV(fileName: string): string[][] {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "credits",
    fileName,
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`CSV file not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").filter((line) => line.trim() !== "");

  // ヘッダー行を除外
  const dataLines = lines.slice(1);

  return dataLines.map((line) => line.split(",").map((cell) => cell.trim()));
}
