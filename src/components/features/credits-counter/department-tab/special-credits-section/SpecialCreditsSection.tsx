"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { GRADUATION_REQUIREMENTS } from "@/entities/credits/course";
import type { Qualification } from "@/entities/credits/qualification";
import type { SpecialCredit } from "@/entities/credits/special-credit";
import type { CreditsAction } from "../../useCreditsState";

type SpecialCreditsSectionProps = {
  specialCredits: SpecialCredit[];
  qualifications: Qualification[];
  checkedSpecialCredits: Set<string>;
  checkedQualifications: Set<string>;
  dispatch: React.Dispatch<CreditsAction>;
};

export function SpecialCreditsSection({
  specialCredits,
  qualifications,
  checkedSpecialCredits,
  checkedQualifications,
  dispatch,
}: SpecialCreditsSectionProps) {
  const specialCreditsCheckedCount = specialCredits.filter((c) =>
    checkedSpecialCredits.has(c.item),
  ).length;
  const qualificationsCheckedCount = qualifications.filter((q) =>
    checkedQualifications.has(q.item),
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

      <Accordion type="multiple" defaultValue={["special", "qualification"]}>
        <AccordionItem value="special">
          <AccordionTrigger>
            共通特別学修 ({specialCreditsCheckedCount} / {specialCredits.length}{" "}
            選択)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {specialCredits.map((credit, index) => (
                <div
                  key={`${credit.item}-${index}`}
                  className="flex items-center gap-2"
                >
                  <Checkbox
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
                  <span className="text-sm">
                    {credit.display}{" "}
                    <span className="text-muted-foreground">
                      ({credit.credits}単位)
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="qualification">
          <AccordionTrigger>
            学科固有資格 ({qualificationsCheckedCount} / {qualifications.length}{" "}
            選択)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {qualifications.map((qualification, index) => (
                <div
                  key={`${qualification.item}-${index}`}
                  className="flex items-center gap-2"
                >
                  <Checkbox
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
                  <span className="text-sm">
                    {qualification.display}{" "}
                    <span className="text-muted-foreground">
                      ({qualification.credits}単位)
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
