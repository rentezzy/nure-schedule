import { DateTime } from "luxon";
import { Lesson } from "./../types/Schedule";
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
