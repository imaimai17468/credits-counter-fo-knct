import { Suspense } from "react";
import { CreditsCounter } from "@/components/features/credits-counter/CreditsCounter";
import { YearSelector } from "@/components/features/credits-counter/YearSelector";
import {
  getAvailableYears,
  loadAllCourses,
  loadAllQualifications,
  loadSpecialCredits,
} from "@/gateways/credits";

function LoadingState() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <p className="text-muted-foreground">読み込み中...</p>
    </div>
  );
}

type CreditsCounterDataProps = {
  year: string;
};

async function CreditsCounterData({ year }: CreditsCounterDataProps) {
  // 指定された年度のカリキュラムデータを読み込む
  const coursesMap = loadAllCourses(year);
  const specialCredits = loadSpecialCredits(year);
  const qualificationsMap = loadAllQualifications(year);

  return (
    <CreditsCounter
      year={year}
      coursesMap={coursesMap}
      specialCredits={specialCredits}
      qualificationsMap={qualificationsMap}
    />
  );
}

type HomeProps = {
  searchParams: Promise<{ year?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  // 利用可能な年度一覧を取得
  const availableYears = getAvailableYears();

  // URLパラメータから年度を取得、デフォルトは最新年度
  const selectedYear =
    params.year && availableYears.includes(params.year)
      ? params.year
      : availableYears[0] || "2024";

  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground">
          卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れてください。
        </p>
      </div>

      <YearSelector
        availableYears={availableYears}
        selectedYear={selectedYear}
      />

      <Suspense fallback={<LoadingState />}>
        <CreditsCounterData year={selectedYear} />
      </Suspense>
    </div>
  );
}
