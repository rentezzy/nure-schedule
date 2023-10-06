import { PAIRS_NUMBERS } from "@/const/const";
import { useTabContext } from "@/hooks/useTabContext";
import { parseDaySchedule } from "@/lib/parseSchedule";
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
  const daySchedule = parseDaySchedule(lessons);
  return (
    <div className="border-l">
      <h3 className="text-center" style={{ height: headerHeight }}>
        day:{day}
      </h3>
      <div className="px-1">
        {PAIRS_NUMBERS.map((pairNumber) => {
          const currentLessons = daySchedule[pairNumber];
          return (
            <LessonPlaceholder number={pairNumber} key={pairNumber}>
              <div
                className="grid h-full w-full"
                style={{
                  gridTemplateColumns: gridColums(currentLessons?.length),
                }}
              >
                {currentLessons &&
                  currentLessons.map((lesson, index) =>
                    index > 2 ? null : (
                      <div className="h-full w-full" key={lesson.id}>
                        1
                      </div>
                    )
                  )}
              </div>
            </LessonPlaceholder>
          );
        })}
      </div>
    </div>
  );
};

const gridColums = (length: number | undefined) =>
  `repeat(${length ? (length < 3 ? length : 3) : 1}, 1fr)`;
