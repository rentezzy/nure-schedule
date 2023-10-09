import { TIMETABLERANGE } from "@/const/const";
import { DateTime } from "luxon";
import { Separator } from "../ui/separator";

export const TimeGrid = () => {
  return (
    <div className="h-full w-full flex flex-col justify-around absolute px-2 z-0">
      {TIMETABLERANGE.map((time) => (
        <div key={time} className="flex items-center gap-4">
          <p className="w-max">
            {DateTime.fromSeconds(time).toFormat("HH:mm")}
          </p>
          <Separator className="basis-[95%] flex-grow" />
        </div>
      ))}
    </div>
  );
};
