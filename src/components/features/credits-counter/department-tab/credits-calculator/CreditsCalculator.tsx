"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GRADUATION_REQUIREMENTS } from "@/entities/credits/course";
import type { CreditsCalculationResult } from "@/entities/credits/student-credits";

type CreditsCalculatorProps = {
  result: CreditsCalculationResult;
};

export function CreditsCalculator({ result }: CreditsCalculatorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>単位計算結果</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <p className="text-muted-foreground text-sm">合計単位数</p>
              <p className="font-bold font-mono text-lg tabular-nums transition-all duration-300">
                {result.totalCredits}/{GRADUATION_REQUIREMENTS.TOTAL}{" "}
                <span
                  className={`text-sm ${
                    result.remainingTotal === 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  残り{result.remainingTotal}単位
                </span>
              </p>
            </div>
            <Progress
              value={
                (result.totalCredits / GRADUATION_REQUIREMENTS.TOTAL) * 100
              }
              className="h-2 transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <p className="text-muted-foreground text-sm">一般科目</p>
              <p className="font-bold font-mono text-lg tabular-nums transition-all duration-300">
                {result.generalCredits}/{GRADUATION_REQUIREMENTS.GENERAL}{" "}
                <span
                  className={`text-sm ${
                    result.remainingGeneral === 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  残り{result.remainingGeneral}単位
                </span>
              </p>
            </div>
            <Progress
              value={
                (result.generalCredits / GRADUATION_REQUIREMENTS.GENERAL) * 100
              }
              className="h-2 transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <p className="text-muted-foreground text-sm">専門科目</p>
              <p className="font-bold font-mono text-lg tabular-nums transition-all duration-300">
                {result.specializedCredits}/{GRADUATION_REQUIREMENTS.SPECIALTY}{" "}
                <span
                  className={`text-sm ${
                    result.remainingSpecialized === 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  残り{result.remainingSpecialized}単位
                </span>
              </p>
            </div>
            <Progress
              value={
                (result.specializedCredits /
                  GRADUATION_REQUIREMENTS.SPECIALTY) *
                100
              }
              className="h-2 transition-all"
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-muted-foreground text-sm">必修科目</p>
              <p className="font-bold font-mono text-lg tabular-nums">
                {result.requiredCredits} 単位
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">選択科目</p>
              <p className="font-bold font-mono text-lg tabular-nums">
                {result.electiveCredits} 単位
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                特別学修（最大{GRADUATION_REQUIREMENTS.MAX_SPECIAL_LEARNING}
                単位）
              </p>
              <p className="font-bold font-mono text-lg tabular-nums">
                {result.specialLearningCredits} 単位
              </p>
            </div>
          </div>
        </div>

        {result.isGraduationRequirementMet && (
          <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
            <p className="font-semibold text-green-800 dark:text-green-100">
              卒業要件を満たしています
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
