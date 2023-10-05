import {
  LESSONS_START_TIME,
  LESSON_LENGTH,
  TIMETABLERANGE,
} from "@/const/const";
import { useTabContext } from "@/hooks/useTabContext";

type LessonNumber = 1 | 2 | 3 | 4 | 5 | 6;
export const LessonPlaceholder = ({
  children,
  number,
}: {
  children: React.ReactNode;
  number: number;
}) => {
  const minutesToPixel = useTabContext();
  if (!minutesToPixel) return;
  const marginTop = Math.round(minutesToPixel(getMarginTop(number)));
  const height = Math.round(minutesToPixel(LESSON_LENGTH / 60));
  return (
    <div
      className={`border border-red-500`}
      style={{
        marginTop,
        height,
      }}
    >
      {children}
    </div>
  );
};
function getMarginTop(number: number) {
  const marginTop =
    number === 1
      ? LESSONS_START_TIME[0] - TIMETABLERANGE[0]
      : LESSONS_START_TIME[number - 1] -
        (LESSONS_START_TIME[number - 2] + LESSON_LENGTH);
  console.log(marginTop / 60);
  return marginTop / 60;
}
