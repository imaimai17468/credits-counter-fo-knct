"use client";

import { Button } from "@/components/ui/button";
import type { Course } from "@/entities/credits/course";
import type { CreditsAction } from "../../useCreditsState";

type QuickActionButtonsProps = {
  courses: Course[];
  dispatch: React.Dispatch<CreditsAction>;
};

export function QuickActionButtons({
  courses,
  dispatch,
}: QuickActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="default"
        size="sm"
        onClick={() => dispatch({ type: "CHECK_ALL_COURSES", courses })}
      >
        全選択
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => dispatch({ type: "UNCHECK_ALL_COURSES" })}
      >
        全解除
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => dispatch({ type: "CHECK_REQUIRED_COURSES", courses })}
      >
        必修のみ
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() =>
          dispatch({ type: "CHECK_GENERAL_REQUIRED_COURSES", courses })
        }
      >
        一般必修
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() =>
          dispatch({ type: "CHECK_SPECIALIZED_REQUIRED_COURSES", courses })
        }
      >
        専門必修
      </Button>
    </div>
  );
}
