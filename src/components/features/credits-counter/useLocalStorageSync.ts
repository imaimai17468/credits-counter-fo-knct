"use client";

import { useEffect } from "react";
import type { Department } from "@/entities/credits/department";
import type { CreditsAction, CreditsState } from "./useCreditsState";

/**
 * localStorage のキーを生成
 */
function getStorageKey(year: string, department: Department): string {
  return `credits-counter-${year}-${department}`;
}

/**
 * Set を配列に変換してJSON対応させる
 */
function serializeState(state: CreditsState): string {
  return JSON.stringify({
    checkedCourses: Array.from(state.checkedCourses),
    checkedSpecialCredits: Array.from(state.checkedSpecialCredits),
    checkedQualifications: Array.from(state.checkedQualifications),
    checkedActivityCredits: Array.from(state.checkedActivityCredits),
  });
}

/**
 * JSON を CreditsState に復元
 */
function deserializeState(json: string): CreditsState {
  const parsed = JSON.parse(json);
  return {
    checkedCourses: new Set(parsed.checkedCourses || []),
    checkedSpecialCredits: new Set(parsed.checkedSpecialCredits || []),
    checkedQualifications: new Set(parsed.checkedQualifications || []),
    checkedActivityCredits: new Set(parsed.checkedActivityCredits || []),
  };
}

/**
 * カスタムフック: localStorage と状態を同期
 */
export function useLocalStorageSync(
  year: string,
  department: Department,
  state: CreditsState,
  dispatch: React.Dispatch<CreditsAction>,
) {
  // 初回マウント時にlocalStorageから復元
  useEffect(() => {
    const key = getStorageKey(year, department);
    const stored = localStorage.getItem(key);

    if (stored) {
      try {
        const restoredState = deserializeState(stored);
        dispatch({ type: "RESTORE_STATE", state: restoredState });
      } catch (error) {
        console.error("Failed to restore state from localStorage:", error);
      }
    }
  }, [year, department, dispatch]);

  // 状態が変更されたらlocalStorageに保存
  useEffect(() => {
    const key = getStorageKey(year, department);
    localStorage.setItem(key, serializeState(state));
  }, [year, department, state]);
}
