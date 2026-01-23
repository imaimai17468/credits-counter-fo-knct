"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import type { Course } from "@/entities/credits/course";

type CourseTableRowProps = {
  course: Course;
  checked: boolean;
  onToggle: (checked: boolean) => void;
};

export function CourseTableRow({
  course,
  checked,
  onToggle,
}: CourseTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={checked}
          onCheckedChange={onToggle}
          aria-label={`${course.subjectName}を選択`}
        />
      </TableCell>
      <TableCell>{course.subjectName}</TableCell>
      <TableCell className="text-center">{course.grade}</TableCell>
      <TableCell className="text-center">{course.category}</TableCell>
      <TableCell className="text-center">{course.type}</TableCell>
      <TableCell className="text-center">{course.credits}</TableCell>
    </TableRow>
  );
}
