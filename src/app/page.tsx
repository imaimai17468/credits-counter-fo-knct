import { Suspense } from "react";
import { CreditsCounter } from "@/components/features/credits-counter/CreditsCounter";
import { YearSelector } from "@/components/features/credits-counter/YearSelector";
import {
  getAvailableYears,
  loadActivityCredits,
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
  const activityCredits = loadActivityCredits(year);

  return (
    <CreditsCounter
      year={year}
      coursesMap={coursesMap}
      specialCredits={specialCredits}
      qualificationsMap={qualificationsMap}
      activityCredits={activityCredits}
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

  // URLパラメータから年度を取得、デフォルトは2021（令和3年度以前）
  const selectedYear =
    params.year && availableYears.includes(params.year)
      ? params.year
      : availableYears.includes("2021")
        ? "2021"
        : availableYears[availableYears.length - 1] || "2021";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "木更津高専単位カウンター",
    description:
      "木更津工業高等専門学校の卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れるだけで、一般科目・専門科目・特別学修の単位を自動計算します。",
    url: "https://credits-counter-fo-knct.vercel.app",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    inLanguage: "ja",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground">
            卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れてください。
          </p>
        </div>

        <div>
          <YearSelector
            availableYears={availableYears}
            selectedYear={selectedYear}
          />
          <div className="mt-1 space-y-0.5 text-muted-foreground text-xs">
            <p>※ 令和6年度からカリキュラムが変更されました</p>
            <p>※ 令和4,5年度と令和3年度では特別学修の内容が異なります</p>
          </div>
        </div>

        <Suspense fallback={<LoadingState />}>
          <CreditsCounterData year={selectedYear} />
        </Suspense>
      </div>
    </>
  );
}
