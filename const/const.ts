import { LessonType } from "@/types/Schedule";
import { Themes } from "@/types/Themes";

export const TIMETABLERANGE = [
  100800, 104400, 108000, 111600, 115200, 118800, 122400, 126000, 129600,
  133200, 136800, 140400,
];
export const LESSON_LENGTH = 5700;

export const LESSON_TYPE_VOCAB: Record<LessonType, string> = {
  Лк: "Лекції",
  Пз: "Практичні",
  Лб: "Лабораторні",
  Екз: "Екзамени",
  Зал: "Заліки",
  Конс: "Консультації",
};
export const LESSON_TYPE_VOCAB2: Record<LessonType, string> = {
  Лк: "Лекція",
  Пз: "Практичне заняття",
  Лб: "Лабораторна робота",
  Екз: "Екзамен",
  Зал: "Залік",
  Конс: "Консультація",
};

export const LESSONS_START_TIME = [
  103500, 109800, 116100, 123000, 129300, 135600,
];
export const PAIRS_NUMBERS = ["1", "2", "3", "4", "5", "6"] as const;

export const DEFAULT_THEME: Themes = {
  Лб: "#9809EC",
  Лк: "#EC7909",
  Пз: "#B1EC09",
  Екз: "#E83333",
  Зал: "#E8E233",
  Конс: "#E8A333",
};
