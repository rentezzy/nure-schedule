export type Group = {
  id: string;
  name: string;
};
export type Teacher = {
  id: string;
  full_name: string;
  short_name: string;
};
export type Auditores = {
  id: string;
  name: string;
};
export type Subject = {
  id: string;
  brief: string;
  title: string;
};
export type LessonType = "Пз" | "Лб" | "Лк" | "Екз" | "Конс" | "Зал";
export type Lesson = {
  id: string;
  start_time: number;
  end_time: number;
  auditory: string;
  number_pair: LessonNumber;
  type: LessonType;
  updatedAt: string;
  groups: Group[];
  teachers: Teacher[];
  subject: Subject;
};
export type LessonNumber = "1" | "2" | "3" | "4" | "5" | "6";
