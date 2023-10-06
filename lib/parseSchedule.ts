import { DateTime } from "luxon";
import { Lesson, LessonNumber } from "./../types/Schedule";
export const parseSchedule = (lessons: Lesson[], week: number) => {
  const currentWeekStart = DateTime.now()
    .plus({ week })
    .startOf("week")
    .toSeconds();
  const readySchedule: Array<Lesson[]> = [[], [], [], [], [], [], []];
  for (let lesson of lessons) {
    const startDay = Math.floor(
      (+lesson.start_time - currentWeekStart) / 86400
    );
    readySchedule[startDay].push(lesson);
  }
  return readySchedule;
};
export const parseDaySchedule = (lessons: Lesson[]) => {
  const result: Partial<Record<LessonNumber, Lesson[]>> = {};

  for (let lesson of lessons) {
    const element = result[lesson.number_pair];
    if (!element) {
      result[lesson.number_pair] = [lesson];
    } else {
      element.push(lesson);
    }
  }

  return result;
};
