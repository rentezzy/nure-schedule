import { useBoundScheduleStore } from "@/app/store";
import { DEFAULT_THEME } from "@/const/const";
import { hexShade } from "@/lib/hexEditor";
import { Lesson } from "@/types/Schedule";
import { Themes } from "@/types/Themes";
import { DateTime } from "luxon";

export const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const state = useBoundScheduleStore((state) => state.theme);
  const startTime = DateTime.fromSeconds(+lesson.start_time).toFormat("HH:mm");
  const endTime = DateTime.fromSeconds(+lesson.end_time).toFormat("HH:mm");
  let themes: Themes = state ? (state as Themes) : DEFAULT_THEME;
  return (
    <div
      className="w-full h-full border rounded-md p-1 overflow-hidden"
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
  );
};
