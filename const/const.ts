import { Lesson, LessonType } from "@/types/Schedule";
import { Themes } from "@/types/Themes";

export const TIMETABLERANGE = [
  100800, 104400, 108000, 111600, 115200, 118800, 122400, 126000, 129600,
  133200, 136800, 140400,
];
export const LESSON_LENGTH = 5700;

export const LESSON_TYPE_VOCAB: Record<LessonType, string> = {
  Лб: "Лабораторні",
  Лк: "Лекції",
  Пз: "Практичні",
};

export const LESSONS_START_TIME = [
  103500, 109800, 116100, 123000, 129300, 135600,
];
export const PAIRS_NUMBERS = ["1", "2", "3", "4", "5", "6"] as const;

export const DEFAULT_THEME: Themes = {
  Лб: "#9809EC",
  Лк: "#EC7909",
  Пз: "#B1EC09",
};
export const MOCK_LESSON: Lesson[] = [
  {
    id: "507",
    start_time: 1694772600,
    end_time: 1694778300,
    auditory: "320",
    number_pair: "4",
    type: "Лб",
    updatedAt: "2023-09-03T09:12:27.440Z",
    groups: [
      {
        id: "10304333",
        name: "КІУКІ-22-7",
      },
    ],
    teachers: [
      {
        id: "9073341",
        full_name: "Мірошник Анатолій Миколайович",
        short_name: "Мірошник А. М.",
      },
    ],
    subject: {
      id: "4306890",
      brief: "КЛоГ",
      title: "Комп'ютерна логіка",
    },
  },
];
