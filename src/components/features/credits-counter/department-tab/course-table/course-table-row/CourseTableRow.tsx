"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import type {
  Course,
  CourseCategory,
  CourseType,
} from "@/entities/credits/course";

type CourseTableRowProps = {
  course: Course;
  checked: boolean;
  onToggle: (checked: boolean) => void;
};

function getCourseTypeBadgeVariant(
  type: CourseType,
): "default" | "secondary" | "outline" {
  switch (type) {
    case "必修":
    case "必修（留学生）":
      return "default";
    case "必修選択":
      return "secondary";
    case "選択":
      return "outline";
  }
}

function getCourseCategoryStyles(category: CourseCategory) {
  switch (category) {
    case "一般":
      return {
        variant: "outline" as const,
        className: "border-blue-500 text-blue-700 dark:text-blue-300",
      };
    case "専門":
      return {
        variant: "outline" as const,
        className: "border-purple-500 text-purple-700 dark:text-purple-300",
      };
  }
}

export function CourseTableRow({
  course,
  checked,
  onToggle,
}: CourseTableRowProps) {
  return (
    <TableRow
      onClick={() => onToggle(!checked)}
      className={`cursor-pointer transition-all duration-200 hover:bg-muted/50 active:scale-[0.99] ${
        checked ? "bg-primary/5" : ""
      }`}
    >
      <TableCell onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={checked}
          onCheckedChange={onToggle}
          aria-label={`${course.subjectName}を選択`}
        />
      </TableCell>
      <TableCell>{course.subjectName}</TableCell>
      <TableCell className="text-center">{course.grade}</TableCell>
      <TableCell className="text-center">
        <div className="flex justify-center">
          <Badge
            variant={getCourseCategoryStyles(course.category).variant}
            className={getCourseCategoryStyles(course.category).className}
          >
            {course.category}
          </Badge>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex justify-center">
          <Badge variant={getCourseTypeBadgeVariant(course.type)}>
            {course.type}
          </Badge>
        </div>
      </TableCell>
      <TableCell className="text-center">{course.credits}</TableCell>
    </TableRow>
  );
}
