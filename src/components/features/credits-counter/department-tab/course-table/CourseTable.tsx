"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Course } from "@/entities/credits/course";
import type { CreditsAction } from "../../useCreditsState";
import { CourseTableRow } from "./course-table-row/CourseTableRow";

type CourseTableProps = {
  courses: Course[];
  checkedCourses: Set<string>;
  dispatch: React.Dispatch<CreditsAction>;
};

export function CourseTable({
  courses,
  checkedCourses,
  dispatch,
}: CourseTableProps) {
  // Group courses by grade
  const coursesByGrade = courses.reduce(
    (acc, course) => {
      const grade = course.grade;
      if (!acc[grade]) {
        acc[grade] = [];
      }
      acc[grade].push(course);
      return acc;
    },
    {} as Record<number, Course[]>,
  );

  const grades = Object.keys(coursesByGrade)
    .map(Number)
    .sort((a, b) => a - b);

  // State to manage collapsed/expanded groups (all expanded by default)
  const [collapsedGrades, setCollapsedGrades] = useState<Set<number>>(
    new Set(),
  );

  const toggleGrade = (grade: number) => {
    setCollapsedGrades((prev) => {
      const next = new Set(prev);
      if (next.has(grade)) {
        next.delete(grade);
      } else {
        next.add(grade);
      }
      return next;
    });
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>教科名</TableHead>
            <TableHead className="w-20 text-center">学年</TableHead>
            <TableHead className="w-24 text-center">科目</TableHead>
            <TableHead className="w-24 text-center">区分</TableHead>
            <TableHead className="w-24 text-center">単位数</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grade) => {
            const gradeCourses = coursesByGrade[grade];
            const checkedCount = gradeCourses.filter((c) =>
              checkedCourses.has(c.subjectName),
            ).length;

            const isCollapsed = collapsedGrades.has(grade);
            const allChecked = gradeCourses.every((c) =>
              checkedCourses.has(c.subjectName),
            );
            const someChecked =
              checkedCount > 0 && checkedCount < gradeCourses.length;

            return (
              <React.Fragment key={grade}>
                <TableRow className="bg-muted/50 transition-colors hover:bg-muted/70">
                  <td colSpan={6} className="px-4 py-3 font-semibold text-sm">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <Checkbox
                        checked={allChecked}
                        className={
                          someChecked
                            ? "data-[state=checked]:bg-primary/50"
                            : ""
                        }
                        onCheckedChange={(checked) => {
                          if (checked) {
                            dispatch({
                              type: "CHECK_GRADE_COURSES",
                              courses: gradeCourses,
                            });
                          } else {
                            dispatch({
                              type: "UNCHECK_GRADE_COURSES",
                              courses: gradeCourses,
                            });
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${grade}年次科目を全選択/全解除`}
                      />
                      <button
                        type="button"
                        className="flex cursor-pointer items-center gap-2 text-left"
                        onClick={() => toggleGrade(grade)}
                        aria-expanded={!isCollapsed}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`h-4 w-4 transition-transform ${
                            isCollapsed ? "-rotate-90" : ""
                          }`}
                          role="img"
                          aria-label={
                            isCollapsed
                              ? "グループを展開"
                              : "グループを折りたたむ"
                          }
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                        {grade}年次科目 ({checkedCount} / {gradeCourses.length}{" "}
                        選択)
                      </button>
                      <div className="ml-auto flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch({
                              type: "CHECK_GRADE_REQUIRED_COURSES",
                              courses: gradeCourses,
                            });
                          }}
                        >
                          必修のみ
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch({
                              type: "CHECK_GRADE_GENERAL_REQUIRED_COURSES",
                              courses: gradeCourses,
                            });
                          }}
                        >
                          一般必修
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch({
                              type: "CHECK_GRADE_SPECIALIZED_REQUIRED_COURSES",
                              courses: gradeCourses,
                            });
                          }}
                        >
                          専門必修
                        </Button>
                      </div>
                    </div>
                  </td>
                </TableRow>
                {!isCollapsed &&
                  gradeCourses.map((course, index) => (
                    <CourseTableRow
                      key={`${course.subjectName}-${course.grade}-${index}`}
                      course={course}
                      checked={checkedCourses.has(course.subjectName)}
                      onToggle={(checked) => {
                        if (checked) {
                          dispatch({
                            type: "CHECK_COURSE",
                            subjectName: course.subjectName,
                          });
                        } else {
                          dispatch({
                            type: "UNCHECK_COURSE",
                            subjectName: course.subjectName,
                          });
                        }
                      }}
                    />
                  ))}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
