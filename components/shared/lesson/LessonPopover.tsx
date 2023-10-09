import { useBoundScheduleStore } from "@/app/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DEFAULT_THEME, LESSON_TYPE_VOCAB2 } from "@/const/const";
import { hexShade } from "@/lib/hexEditor";
import { Lesson } from "@/types/Schedule";
import { Themes } from "@/types/Themes";
import { DateTime } from "luxon";

export const LessonPopover = ({
  children,
  lesson,
}: {
  children: React.ReactNode;
  lesson: Lesson;
}) => {
  const state = useBoundScheduleStore((state) => state.theme);
  const startTime = DateTime.fromSeconds(+lesson.start_time).toFormat("HH:mm");
  const endTime = DateTime.fromSeconds(+lesson.end_time).toFormat("HH:mm");
  let themes: Themes = state ? state : DEFAULT_THEME;
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        style={{
          borderColor: hexShade(themes[lesson.type], -60),
        }}
      >
        <DialogHeader>
          <DialogTitle>{lesson.subject.title}</DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="flex justify-between flex-wrap">
          <p>{LESSON_TYPE_VOCAB2[lesson.type]}</p>
          <p>{lesson.auditory}</p>
        </div>
        <div className="flex justify-between">
          <div>
            {lesson.teachers.map((teacher) => (
              <p key={teacher.id}>{teacher.full_name}</p>
            ))}
          </div>
          <p>
            {startTime} - {endTime}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
