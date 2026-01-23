"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Course } from "@/entities/credits/course";
import {
  ALL_DEPARTMENTS,
  DEPARTMENT_INFO,
  type Department,
} from "@/entities/credits/department";
import type { Qualification } from "@/entities/credits/qualification";
import type { SpecialCredit } from "@/entities/credits/special-credit";
import { BackToTopButton } from "./BackToTopButton";
import { DepartmentTab } from "./department-tab/DepartmentTab";
import { useCreditsState } from "./useCreditsState";
import { useLocalStorageSync } from "./useLocalStorageSync";

type CreditsCounterProps = {
  year: string;
  coursesMap: Record<Department, Course[]>;
  specialCredits: SpecialCredit[];
  qualificationsMap: Record<Department, Qualification[]>;
};

export function CreditsCounter({
  year,
  coursesMap,
  specialCredits,
  qualificationsMap,
}: CreditsCounterProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>("M");
  const [state, dispatch] = useCreditsState();

  // localStorage同期（年度を含めたキー）
  useLocalStorageSync(year, selectedDepartment, state, dispatch);

  return (
    <>
      <div className="w-full">
        <Tabs
          value={selectedDepartment}
          onValueChange={(value) => setSelectedDepartment(value as Department)}
        >
          <TabsList className="grid w-full grid-cols-5">
            {ALL_DEPARTMENTS.map((dept) => (
              <TabsTrigger key={dept} value={dept}>
                {DEPARTMENT_INFO[dept].name}
              </TabsTrigger>
            ))}
          </TabsList>

          {ALL_DEPARTMENTS.map((dept) => (
            <TabsContent key={dept} value={dept}>
              <DepartmentTab
                department={dept}
                courses={coursesMap[dept]}
                specialCredits={specialCredits}
                qualifications={qualificationsMap[dept]}
                state={state}
                dispatch={dispatch}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <BackToTopButton />
    </>
  );
}
