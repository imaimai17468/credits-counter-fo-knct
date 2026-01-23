import { z } from "zod";

/**
 * 学科コード
 * M: 機械工学科, E: 電気電子工学科, D: 電子制御工学科, J: 情報工学科, C: 環境都市工学科
 */
export const DepartmentSchema = z.enum(["M", "E", "D", "J", "C"]);

export type Department = z.infer<typeof DepartmentSchema>;

/**
 * 学科情報マップ
 */
export const DEPARTMENT_INFO: Record<
  Department,
  { code: Department; name: string; csvFile: string }
> = {
  M: { code: "M", name: "機械工学科", csvFile: "11.csv" },
  E: { code: "E", name: "電気電子工学科", csvFile: "12.csv" },
  D: { code: "D", name: "電子制御工学科", csvFile: "13.csv" },
  J: { code: "J", name: "情報工学科", csvFile: "14.csv" },
  C: { code: "C", name: "環境都市工学科", csvFile: "15.csv" },
};

/**
 * 全学科リスト
 */
export const ALL_DEPARTMENTS: Department[] = ["M", "E", "D", "J", "C"];
