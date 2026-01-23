import type { Course } from "./course";
import type { Department } from "./department";
import type { Qualification } from "./qualification";
import type { SpecialCredit } from "./special-credit";

/**
 * 学生のチェック状態を管理する型
 */
export type StudentCredits = {
  /** 選択学科 */
  department: Department;
  /** チェックした授業のSet（教科名をキーとして使用） */
  checkedCourses: Set<string>;
  /** チェックした特別学修のSet（項目をキーとして使用） */
  checkedSpecialCredits: Set<string>;
  /** チェックした資格のSet（項目をキーとして使用） */
  checkedQualifications: Set<string>;
};

/**
 * 単位計算結果
 */
export type CreditsCalculationResult = {
  /** 合計単位数 */
  totalCredits: number;
  /** 一般科目単位数 */
  generalCredits: number;
  /** 専門科目単位数 */
  specializedCredits: number;
  /** 必修科目単位数 */
  requiredCredits: number;
  /** 選択科目単位数 */
  electiveCredits: number;
  /** 特別学修単位数（最大10単位制限適用済み） */
  specialLearningCredits: number;
  /** 残り必要単位数（合計） */
  remainingTotal: number;
  /** 残り必要単位数（一般） */
  remainingGeneral: number;
  /** 残り必要単位数（専門） */
  remainingSpecialized: number;
  /** 卒業要件を満たしているか */
  isGraduationRequirementMet: boolean;
};

/**
 * 学科データ（授業、特別学修、資格をまとめた型）
 */
export type DepartmentData = {
  department: Department;
  courses: Course[];
  specialCredits: SpecialCredit[];
  qualifications: Qualification[];
};
