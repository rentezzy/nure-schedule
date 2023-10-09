import { PAIRS_NUMBERS } from "@/const/const";
import { useTabContext } from "@/hooks/useTabContext";
import { parseDaySchedule } from "@/lib/parseSchedule";
import { Lesson } from "@/types/Schedule";
import { TimeDisplayCurrentDay, TimeDisplayDayOfWeek } from "../TimeDisplay";
import { LessonCard } from "../lesson/LessonCard";
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
    <div className="border-l relative">
      <h3 style={{ height: headerHeight }}>
        <TimeDisplayDayOfWeek day={day} />
      </h3>
      <TimeDisplayCurrentDay day={day} offset={headerHeight} />
      <div className="px-1">
        {PAIRS_NUMBERS.map((pairNumber) => {
          const currentLessons = daySchedule[pairNumber];
          return (
            <LessonPlaceholder number={pairNumber} key={pairNumber}>
              <div
                className="grid h-full w-full gap-1"
                style={{
                  gridTemplateColumns: gridColums(currentLessons?.length),
                }}
              >
                {currentLessons &&
                  currentLessons.map((lesson, index) =>
                    index > 2 ? null : (
                      <LessonCard lesson={lesson} key={lesson.id} />
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
