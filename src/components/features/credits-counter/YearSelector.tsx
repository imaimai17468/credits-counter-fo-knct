"use client";

import { useRouter } from "next/navigation";
import { useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type YearSelectorProps = {
  availableYears: string[];
  selectedYear: string;
};

export function YearSelector({
  availableYears,
  selectedYear,
}: YearSelectorProps) {
  const id = useId();
  const router = useRouter();

  const handleYearChange = (year: string) => {
    // URLパラメータで年度を指定
    router.push(`/?year=${year}`);
  };

  // 年度のラベルを生成
  const getYearLabel = (year: string) => {
    switch (year) {
      case "2023":
        return "令和4,5年度";
      case "2024":
        return "令和6年度 (2024) 以降";
      default: {
        // その他の年度は自動計算
        const reiwa = Number.parseInt(year, 10) - 2018;
        return `令和${reiwa}年度 (${year})`;
      }
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-medium text-sm">
        入学年度
      </label>
      <Select value={selectedYear} onValueChange={handleYearChange}>
        <SelectTrigger id={id} className="w-[220px]">
          <SelectValue placeholder="年度を選択" />
        </SelectTrigger>
        <SelectContent>
          {availableYears.map((year) => (
            <SelectItem key={year} value={year}>
              {getYearLabel(year)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
