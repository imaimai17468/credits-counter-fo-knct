import {
  type Course,
  GRADUATION_REQUIREMENTS,
} from "@/entities/credits/course";
import type { Qualification } from "@/entities/credits/qualification";
import type { SpecialCredit } from "@/entities/credits/special-credit";
import type {
  CreditsCalculationResult,
  StudentCredits,
} from "@/entities/credits/student-credits";

/**
 * 単位計算ロジック
 * 既存のcount_credits.jsを移植
 */
export function calculateCredits(
  courses: Course[],
  specialCredits: SpecialCredit[],
  qualifications: Qualification[],
  studentCredits: StudentCredits,
): CreditsCalculationResult {
  // チェックされた授業の単位を計算
  let totalCredits = 0;
  let generalCredits = 0;
  let specializedCredits = 0;
  let requiredCredits = 0;
  let electiveCredits = 0;

  for (const course of courses) {
    if (studentCredits.checkedCourses.has(course.subjectName)) {
      totalCredits += course.credits;

      // カテゴリ別
      if (course.category === "一般") {
        generalCredits += course.credits;
      } else if (course.category === "専門") {
        specializedCredits += course.credits;
      }

      // 履修区分別
      if (course.type === "必修") {
        requiredCredits += course.credits;
      } else if (course.type === "選択") {
        electiveCredits += course.credits;
      }
    }
  }

  // 特別学修の単位を計算（最大10単位制限）
  let specialLearningTotal = 0;

  for (const specialCredit of specialCredits) {
    if (studentCredits.checkedSpecialCredits.has(specialCredit.item)) {
      specialLearningTotal += specialCredit.credits;
    }
  }

  for (const qualification of qualifications) {
    if (studentCredits.checkedQualifications.has(qualification.item)) {
      specialLearningTotal += qualification.credits;
    }
  }

  // 特別学修は最大10単位まで
  const specialLearningCredits = Math.min(
    specialLearningTotal,
    GRADUATION_REQUIREMENTS.MAX_SPECIAL_LEARNING,
  );

  // 特別学修を合計に加算
  totalCredits += specialLearningCredits;

  // 残り必要単位数を計算
  const remainingTotal = Math.max(
    0,
    GRADUATION_REQUIREMENTS.TOTAL - totalCredits,
  );
  const remainingGeneral = Math.max(
    0,
    GRADUATION_REQUIREMENTS.GENERAL - generalCredits,
  );
  const remainingSpecialized = Math.max(
    0,
    GRADUATION_REQUIREMENTS.SPECIALTY - specializedCredits,
  );

  // 卒業要件判定
  const isGraduationRequirementMet =
    totalCredits >= GRADUATION_REQUIREMENTS.TOTAL &&
    generalCredits >= GRADUATION_REQUIREMENTS.GENERAL &&
    specializedCredits >= GRADUATION_REQUIREMENTS.SPECIALTY;

  return {
    totalCredits,
    generalCredits,
    specializedCredits,
    requiredCredits,
    electiveCredits,
    specialLearningCredits,
    remainingTotal,
    remainingGeneral,
    remainingSpecialized,
    isGraduationRequirementMet,
  };
}
