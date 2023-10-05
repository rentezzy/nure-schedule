import { DateTime } from "luxon";
import { Separator } from "../ui/separator";

const times = [
  100800, 104400, 108000, 111600, 115200, 118800, 122400, 126000, 129600,
  133200, 136800, 140400,
];

export const TimeGrid = () => {
  return (
    <div className="h-full w-full flex flex-col justify-around absolute p-2">
      {times.map((time) => (
        <div key={time} className="flex mb-2 items-center gap-4">
          <p className="w-max">
            {DateTime.fromSeconds(time).toFormat("HH:mm")}
          </p>
          <Separator className="basis-[95%] flex-grow" />
        </div>
      ))}
    </div>
  );
};
