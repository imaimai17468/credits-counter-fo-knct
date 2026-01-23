"use client";

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
          {courses.map((course, index) => (
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
        </TableBody>
      </Table>
    </div>
  );
}
