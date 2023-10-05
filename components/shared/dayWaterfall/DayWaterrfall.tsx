import { useTabContext } from "@/hooks/useTabContext";
import { Lesson } from "@/types/Schedule";
import { LessonPlaceholder } from "./LessonPlaceholder";

export const DayWaterrfall = ({
  day,
  lessons,
}: {
  day: number;
  lessons: Lesson[];
}) => {
  const minutesToPixel = useTabContext();
  if (!minutesToPixel) return;
  const headerHeight = minutesToPixel(30);
  return (
    <div className="border-l">
      <h3 className="text-center" style={{ height: headerHeight }}>
        day:{day}
      </h3>
      <div className="px-1">
        <LessonPlaceholder number={1}>
          <p className="border bg-red-600">first pair</p>
        </LessonPlaceholder>
        <LessonPlaceholder number={2}>
          <p className="border bg-red-600">second pair</p>
        </LessonPlaceholder>
        <LessonPlaceholder number={3}>
          <p className="border bg-red-600">third pair</p>
        </LessonPlaceholder>
        <LessonPlaceholder number={4}>
          <p className="border bg-red-600">fourth pair</p>
        </LessonPlaceholder>
        <LessonPlaceholder number={5}>
          <p className="border bg-red-600">fiveth pair</p>
        </LessonPlaceholder>
        <LessonPlaceholder number={6}>
          <p className="border bg-red-600 h-full">sixth pair</p>
        </LessonPlaceholder>
        {/* {lessons.map((lesson) => (
          <LessonPlaceholder number={2} key={lesson.id}>
            <p className="border bg-red-600">{lesson.subject.title}</p>
          </LessonPlaceholder>
        ))} */}
      </div>
    </div>
  );
};
