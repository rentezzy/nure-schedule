import { useBoundScheduleStore } from "@/app/store";
import { DEFAULT_THEME } from "@/const/const";
import { hexShade } from "@/lib/hexEditor";
import { Lesson } from "@/types/Schedule";
import { Themes } from "@/types/Themes";
import { DateTime } from "luxon";
import { LessonPopover } from "./LessonPopover";

export const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const state = useBoundScheduleStore((state) => state.theme);
  const startTime = DateTime.fromSeconds(+lesson.start_time).toFormat("HH:mm");
  const endTime = DateTime.fromSeconds(+lesson.end_time).toFormat("HH:mm");
  let themes: Themes = state ? state : DEFAULT_THEME;
  return (
    <LessonPopover lesson={lesson}>
      <div
        className="w-full h-full border rounded-md p-1 overflow-hidden cursor-pointer hover:opacity-90 hover:scale-[1.01] transition-all"
        style={{
          backgroundColor: themes[lesson.type],
          borderColor: hexShade(themes[lesson.type], -60),
        }}
      >
        <div className="flex justify-between flex-wrap">
          <h5>{lesson.subject.brief}</h5>
          <p>{lesson.auditory}</p>
        </div>
        <p>{lesson.type}</p>
        <p>
          {startTime} - {endTime}
        </p>
      </div>
    </LessonPopover>
  );
};
