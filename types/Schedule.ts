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
export type LessonType = "Пз" | "Лб" | "Лк";
export type Lesson = {
  id: string;
  start_time: number;
  end_time: number;
  auditory: string;
  number_pair: number;
  type: LessonType;
  updatedAt: string;
  groups: Group[];
  teachers: Teacher[];
  subject: Subject;
};
