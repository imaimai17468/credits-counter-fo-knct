"use client";

import type { Course } from "@/entities/credits/course";
import type { Department } from "@/entities/credits/department";
import type { Qualification } from "@/entities/credits/qualification";
import type { SpecialCredit } from "@/entities/credits/special-credit";
import type { CreditsAction, CreditsState } from "../useCreditsState";
import { calculateCredits } from "./calculateCredits";
import { CourseTable } from "./course-table/CourseTable";
import { CreditsCalculator } from "./credits-calculator/CreditsCalculator";
import { QuickActionButtons } from "./quick-action-buttons/QuickActionButtons";
import { SpecialCreditsSection } from "./special-credits-section/SpecialCreditsSection";

type DepartmentTabProps = {
  department: Department;
  courses: Course[];
  specialCredits: SpecialCredit[];
  qualifications: Qualification[];
  state: CreditsState;
  dispatch: React.Dispatch<CreditsAction>;
};

export function DepartmentTab({
  department,
  courses,
  specialCredits,
  qualifications,
  state,
  dispatch,
}: DepartmentTabProps) {
  const calculationResult = calculateCredits(
    courses,
    specialCredits,
    qualifications,
    {
      department,
      checkedCourses: state.checkedCourses,
      checkedSpecialCredits: state.checkedSpecialCredits,
      checkedQualifications: state.checkedQualifications,
    },
  );

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
        <p className="text-red-800 text-sm dark:text-red-100">
          <strong>注意:</strong>
          このツールは参考用です。正確な単位計算は学生課または担任教員にご確認ください。
        </p>
      </div>

      <CreditsCalculator result={calculationResult} />

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">授業一覧</h3>
        <QuickActionButtons courses={courses} dispatch={dispatch} />
        <CourseTable
          courses={courses}
          checkedCourses={state.checkedCourses}
          dispatch={dispatch}
        />
      </div>

      <SpecialCreditsSection
        specialCredits={specialCredits}
        qualifications={qualifications}
        checkedSpecialCredits={state.checkedSpecialCredits}
        checkedQualifications={state.checkedQualifications}
        dispatch={dispatch}
      />
    </div>
  );
}
