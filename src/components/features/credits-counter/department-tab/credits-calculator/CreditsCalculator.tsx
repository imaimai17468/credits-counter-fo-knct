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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">合計単位数</p>
            <p className="font-bold font-mono text-2xl tabular-nums transition-all duration-300">
              {result.totalCredits} / {GRADUATION_REQUIREMENTS.TOTAL}
            </p>
            <Progress
              value={
                (result.totalCredits / GRADUATION_REQUIREMENTS.TOTAL) * 100
              }
              className="h-2 transition-all"
            />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">一般科目</p>
            <p className="font-bold font-mono text-2xl tabular-nums transition-all duration-300">
              {result.generalCredits} / {GRADUATION_REQUIREMENTS.GENERAL}
            </p>
            <Progress
              value={
                (result.generalCredits / GRADUATION_REQUIREMENTS.GENERAL) * 100
              }
              className="h-2 transition-all"
            />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">専門科目</p>
            <p className="font-bold font-mono text-2xl tabular-nums transition-all duration-300">
              {result.specializedCredits} / {GRADUATION_REQUIREMENTS.SPECIALTY}
            </p>
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
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground text-sm">必修科目</p>
              <p className="font-mono font-semibold text-lg tabular-nums">
                {result.requiredCredits} 単位
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">選択科目</p>
              <p className="font-mono font-semibold text-lg tabular-nums">
                {result.electiveCredits} 単位
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                特別学修（最大{GRADUATION_REQUIREMENTS.MAX_SPECIAL_LEARNING}
                単位）
              </p>
              <p className="font-mono font-semibold text-lg tabular-nums">
                {result.specialLearningCredits} 単位
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="mb-2 text-muted-foreground text-sm">残り必要単位数</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div>
              <p className="text-sm">合計</p>
              <p
                className={`font-bold font-mono text-xl tabular-nums ${
                  result.remainingTotal === 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result.remainingTotal} 単位
              </p>
            </div>
            <div>
              <p className="text-sm">一般</p>
              <p
                className={`font-bold font-mono text-xl tabular-nums ${
                  result.remainingGeneral === 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result.remainingGeneral} 単位
              </p>
            </div>
            <div>
              <p className="text-sm">専門</p>
              <p
                className={`font-bold font-mono text-xl tabular-nums ${
                  result.remainingSpecialized === 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result.remainingSpecialized} 単位
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
