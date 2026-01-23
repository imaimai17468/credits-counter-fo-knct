import { Suspense } from "react";
import { CreditsCounter } from "@/components/features/credits-counter/CreditsCounter";
import {
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

async function CreditsCounterData() {
  const coursesMap = loadAllCourses();
  const specialCredits = loadSpecialCredits();
  const qualificationsMap = loadAllQualifications();

  return (
    <CreditsCounter
      coursesMap={coursesMap}
      specialCredits={specialCredits}
      qualificationsMap={qualificationsMap}
    />
  );
}

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground">
          卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れてください。
        </p>
      </div>

      <Suspense fallback={<LoadingState />}>
        <CreditsCounterData />
      </Suspense>
    </div>
  );
}
