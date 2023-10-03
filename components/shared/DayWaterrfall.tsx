import { Lesson } from "@/types/Schedule";

export const DayWaterrfall = ({
  day,
  lessons,
}: {
  day: number;
  lessons: Lesson[];
}) => {
  return (
    <div>
      <p>day:{day}</p>
      {lessons.map((lesson) => (
        <p className="border" key={lesson.id}>
          {lesson.subject.title}
        </p>
      ))}
    </div>
  );
};
