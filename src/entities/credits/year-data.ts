import type { Course } from "./course";
import type { Department } from "./department";
import type { Qualification } from "./qualification";
import type { SpecialCredit } from "./special-credit";

/**
 * 1年度分のカリキュラムデータ
 */
export type YearData = {
  coursesMap: Record<Department, Course[]>;
  specialCredits: SpecialCredit[];
  qualificationsMap: Record<Department, Qualification[]>;
};
