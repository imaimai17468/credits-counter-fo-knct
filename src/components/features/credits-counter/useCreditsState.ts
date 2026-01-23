"use client";

import { useReducer } from "react";
import type { Course } from "@/entities/credits/course";

/**
 * チェック状態の型
 */
export type CreditsState = {
  checkedCourses: Set<string>;
  checkedSpecialCredits: Set<string>;
  checkedQualifications: Set<string>;
};

/**
 * アクション型
 */
export type CreditsAction =
  | { type: "CHECK_COURSE"; subjectName: string }
  | { type: "UNCHECK_COURSE"; subjectName: string }
  | { type: "CHECK_ALL_COURSES"; courses: Course[] }
  | { type: "UNCHECK_ALL_COURSES" }
  | { type: "CHECK_REQUIRED_COURSES"; courses: Course[] }
  | { type: "CHECK_GENERAL_REQUIRED_COURSES"; courses: Course[] }
  | { type: "CHECK_SPECIALIZED_REQUIRED_COURSES"; courses: Course[] }
  | { type: "CHECK_GRADE_COURSES"; courses: Course[] }
  | { type: "UNCHECK_GRADE_COURSES"; courses: Course[] }
  | { type: "CHECK_GRADE_REQUIRED_COURSES"; courses: Course[] }
  | { type: "CHECK_GRADE_GENERAL_REQUIRED_COURSES"; courses: Course[] }
  | { type: "CHECK_GRADE_SPECIALIZED_REQUIRED_COURSES"; courses: Course[] }
  | { type: "CHECK_SPECIAL_CREDIT"; item: string }
  | { type: "UNCHECK_SPECIAL_CREDIT"; item: string }
  | { type: "CHECK_QUALIFICATION"; item: string }
  | { type: "UNCHECK_QUALIFICATION"; item: string }
  | { type: "RESTORE_STATE"; state: CreditsState };

/**
 * Reducer関数
 */
function creditsReducer(
  state: CreditsState,
  action: CreditsAction,
): CreditsState {
  switch (action.type) {
    case "CHECK_COURSE": {
      const newCheckedCourses = new Set(state.checkedCourses);
      newCheckedCourses.add(action.subjectName);
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "UNCHECK_COURSE": {
      const newCheckedCourses = new Set(state.checkedCourses);
      newCheckedCourses.delete(action.subjectName);
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "CHECK_ALL_COURSES": {
      const allSubjectNames = action.courses.map((c) => c.subjectName);
      return { ...state, checkedCourses: new Set(allSubjectNames) };
    }

    case "UNCHECK_ALL_COURSES": {
      return { ...state, checkedCourses: new Set() };
    }

    case "CHECK_REQUIRED_COURSES": {
      const requiredCourses = action.courses
        .filter((c) => c.type === "必修")
        .map((c) => c.subjectName);
      return { ...state, checkedCourses: new Set(requiredCourses) };
    }

    case "CHECK_GENERAL_REQUIRED_COURSES": {
      const generalRequiredCourses = action.courses
        .filter((c) => c.category === "一般" && c.type === "必修")
        .map((c) => c.subjectName);
      return { ...state, checkedCourses: new Set(generalRequiredCourses) };
    }

    case "CHECK_SPECIALIZED_REQUIRED_COURSES": {
      const specializedRequiredCourses = action.courses
        .filter((c) => c.category === "専門" && c.type === "必修")
        .map((c) => c.subjectName);
      return { ...state, checkedCourses: new Set(specializedRequiredCourses) };
    }

    case "CHECK_SPECIAL_CREDIT": {
      const newCheckedSpecialCredits = new Set(state.checkedSpecialCredits);
      newCheckedSpecialCredits.add(action.item);
      return { ...state, checkedSpecialCredits: newCheckedSpecialCredits };
    }

    case "UNCHECK_SPECIAL_CREDIT": {
      const newCheckedSpecialCredits = new Set(state.checkedSpecialCredits);
      newCheckedSpecialCredits.delete(action.item);
      return { ...state, checkedSpecialCredits: newCheckedSpecialCredits };
    }

    case "CHECK_QUALIFICATION": {
      const newCheckedQualifications = new Set(state.checkedQualifications);
      newCheckedQualifications.add(action.item);
      return { ...state, checkedQualifications: newCheckedQualifications };
    }

    case "UNCHECK_QUALIFICATION": {
      const newCheckedQualifications = new Set(state.checkedQualifications);
      newCheckedQualifications.delete(action.item);
      return { ...state, checkedQualifications: newCheckedQualifications };
    }

    case "CHECK_GRADE_COURSES": {
      const newCheckedCourses = new Set(state.checkedCourses);
      action.courses.forEach((c) => newCheckedCourses.add(c.subjectName));
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "UNCHECK_GRADE_COURSES": {
      const newCheckedCourses = new Set(state.checkedCourses);
      action.courses.forEach((c) => newCheckedCourses.delete(c.subjectName));
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "CHECK_GRADE_REQUIRED_COURSES": {
      const newCheckedCourses = new Set(state.checkedCourses);
      // Remove all courses from this grade first
      action.courses.forEach((c) => newCheckedCourses.delete(c.subjectName));
      // Add only required courses from this grade
      action.courses
        .filter((c) => c.type === "必修")
        .forEach((c) => newCheckedCourses.add(c.subjectName));
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "CHECK_GRADE_GENERAL_REQUIRED_COURSES": {
      const newCheckedCourses = new Set(state.checkedCourses);
      // Remove all courses from this grade first
      action.courses.forEach((c) => newCheckedCourses.delete(c.subjectName));
      // Add only general required courses from this grade
      action.courses
        .filter((c) => c.category === "一般" && c.type === "必修")
        .forEach((c) => newCheckedCourses.add(c.subjectName));
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "CHECK_GRADE_SPECIALIZED_REQUIRED_COURSES": {
      const newCheckedCourses = new Set(state.checkedCourses);
      // Remove all courses from this grade first
      action.courses.forEach((c) => newCheckedCourses.delete(c.subjectName));
      // Add only specialized required courses from this grade
      action.courses
        .filter((c) => c.category === "専門" && c.type === "必修")
        .forEach((c) => newCheckedCourses.add(c.subjectName));
      return { ...state, checkedCourses: newCheckedCourses };
    }

    case "RESTORE_STATE": {
      return action.state;
    }

    default:
      return state;
  }
}

/**
 * 初期状態
 */
const initialState: CreditsState = {
  checkedCourses: new Set(),
  checkedSpecialCredits: new Set(),
  checkedQualifications: new Set(),
};

/**
 * カスタムフック: 単位チェック状態を管理
 */
export function useCreditsState() {
  return useReducer(creditsReducer, initialState);
}
