"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import type { ActivityCredit } from "@/entities/credits/activity-credit";
import { GRADUATION_REQUIREMENTS } from "@/entities/credits/course";
import { DEPARTMENT_INFO } from "@/entities/credits/department";
import type { Qualification } from "@/entities/credits/qualification";
import type { SpecialCredit } from "@/entities/credits/special-credit";
import type { CreditsAction } from "../../useCreditsState";

type SpecialCreditsSectionProps = {
  specialCredits: SpecialCredit[];
  qualifications: Qualification[];
  activityCredits: ActivityCredit[];
  checkedSpecialCredits: Set<string>;
  checkedQualifications: Set<string>;
  checkedActivityCredits: Set<string>;
  dispatch: React.Dispatch<CreditsAction>;
};

export function SpecialCreditsSection({
  specialCredits,
  qualifications,
  activityCredits,
  checkedSpecialCredits,
  checkedQualifications,
  checkedActivityCredits,
  dispatch,
}: SpecialCreditsSectionProps) {
  const specialCreditsCheckedCount = specialCredits.filter((c) =>
    checkedSpecialCredits.has(c.item),
  ).length;
  const qualificationsCheckedCount = qualifications.filter((q) =>
    checkedQualifications.has(q.item),
  ).length;
  const activityCreditsCheckedCount = activityCredits.filter((a) =>
    checkedActivityCredits.has(a.name),
  ).length;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">特別学修・資格認定</h3>

      <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
        <p className="text-sm text-yellow-800 dark:text-yellow-100">
          <strong>注意:</strong> 特別学修と資格認定の合計は最大
          {GRADUATION_REQUIREMENTS.MAX_SPECIAL_LEARNING}
          単位まで認定されます。
        </p>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["activity", "special", "qualification"]}
      >
        <AccordionItem value="activity">
          <AccordionTrigger>
            特別学修（活動） ({activityCreditsCheckedCount} /{" "}
            {activityCredits.length} 選択)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {activityCredits.map((activity, index) => {
                const id = `activity-${activity.name}-${index}`;
                return (
                  <div
                    key={`${activity.name}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <Checkbox
                      id={id}
                      checked={checkedActivityCredits.has(activity.name)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          dispatch({
                            type: "CHECK_ACTIVITY_CREDIT",
                            name: activity.name,
                          });
                        } else {
                          dispatch({
                            type: "UNCHECK_ACTIVITY_CREDIT",
                            name: activity.name,
                          });
                        }
                      }}
                      aria-label={`${activity.displayName}を選択`}
                    />
                    <label htmlFor={id} className="cursor-pointer text-sm">
                      {activity.displayName}{" "}
                      <span className="text-muted-foreground">
                        ({activity.credits}単位 - {activity.targetGrade} -
                        所属教員:{" "}
                        {DEPARTMENT_INFO[activity.targetDepartment].shortName})
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="special">
          <AccordionTrigger>
            特別学修（資格）共通 ({specialCreditsCheckedCount} /{" "}
            {specialCredits.length} 選択)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {specialCredits.map((credit, index) => {
                const id = `special-${credit.item}-${index}`;
                return (
                  <div
                    key={`${credit.item}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <Checkbox
                      id={id}
                      checked={checkedSpecialCredits.has(credit.item)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          dispatch({
                            type: "CHECK_SPECIAL_CREDIT",
                            item: credit.item,
                          });
                        } else {
                          dispatch({
                            type: "UNCHECK_SPECIAL_CREDIT",
                            item: credit.item,
                          });
                        }
                      }}
                      aria-label={`${credit.display}を選択`}
                    />
                    <label htmlFor={id} className="cursor-pointer text-sm">
                      {credit.display}{" "}
                      <span className="text-muted-foreground">
                        ({credit.credits}単位)
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="qualification">
          <AccordionTrigger>
            特別学修（資格）学科固有 ({qualificationsCheckedCount} /{" "}
            {qualifications.length} 選択)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {qualifications.map((qualification, index) => {
                const id = `qualification-${qualification.item}-${index}`;
                return (
                  <div
                    key={`${qualification.item}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <Checkbox
                      id={id}
                      checked={checkedQualifications.has(qualification.item)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          dispatch({
                            type: "CHECK_QUALIFICATION",
                            item: qualification.item,
                          });
                        } else {
                          dispatch({
                            type: "UNCHECK_QUALIFICATION",
                            item: qualification.item,
                          });
                        }
                      }}
                      aria-label={`${qualification.display}を選択`}
                    />
                    <label htmlFor={id} className="cursor-pointer text-sm">
                      {qualification.display}{" "}
                      <span className="text-muted-foreground">
                        ({qualification.credits}単位)
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
