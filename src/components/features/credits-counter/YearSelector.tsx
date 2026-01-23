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

  // 年度のラベルを生成（最新年度は「以降」、最も古い年度は「以前」）
  const getYearLabel = (year: string, index: number) => {
    const reiwa = Number.parseInt(year, 10) - 2018;
    const baseLabel = `令和${reiwa}年度 (${year})`;

    if (index === 0) {
      return `${baseLabel} 以降`;
    }
    if (index === availableYears.length - 1) {
      return `${baseLabel} 以前`;
    }
    return baseLabel;
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
          {availableYears.map((year, index) => (
            <SelectItem key={year} value={year}>
              {getYearLabel(year, index)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
