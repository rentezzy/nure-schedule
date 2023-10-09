"use client";
import { TIMETABLERANGE } from "@/const/const";
import { useTabContext } from "@/hooks/useTabContext";
import { DateTime, Interval } from "luxon";
import { useCallback, useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { useTimeTableStore } from "./tableTime/tabletimeStore";

export const TimeDisplayDayOfWeek = ({ day }: { day: number }) => {
  const week = useTimeTableStore((state) => state.week);
  const dayTime = DateTime.now()
    .plus({ week })
    .startOf("week")
    .plus({ day })
    .setLocale("uk");
  return (
    <div
      className={`text-center text-sm h-full flex items-center flex-col justify-center ${
        dayTime.hasSame(DateTime.now(), "day") ? "text-blue-600" : null
      }`}
    >
      <p className="leading-none">{dayTime.toFormat("d")}</p>
      <p className="leading-none">{dayTime.toFormat("ccc")}</p>
    </div>
  );
};
export const TimeDisplayMonth = () => {
  const week = useTimeTableStore((state) => state.week);
  const weekTime = DateTime.now()
    .plus({ week })
    .startOf("week")
    .setLocale("uk");
  return (
    <div className={`text-center text-md first-letter:uppercase`}>
      <p>{weekTime.toFormat("LLLL")}</p>
    </div>
  );
};

export const TimeDisplayCurrentDay = ({
  day,
  offset,
}: {
  day: number;
  offset: number;
}) => {
  const week = useTimeTableStore((state) => state.week);
  const [pixels, setPixels] = useState(offset);
  const minutesToPixel = useTabContext();
  const startHour = DateTime.fromSeconds(TIMETABLERANGE[0])
    .startOf("hour")
    .toFormat("H");
  const currentDayStart = DateTime.now()
    .plus({ week })
    .startOf("week")
    .plus({ day, hour: +startHour });
  const currentDayEnd = DateTime.now()
    .plus({ week })
    .startOf("week")
    .plus({ day, hour: +startHour + TIMETABLERANGE.length - 0.5 });

  const changePixels = useCallback(() => {
    const timeFromStart =
      DateTime.now().toSeconds() - currentDayStart.toSeconds();
    setPixels(
      minutesToPixel
        ? minutesToPixel(Math.floor(timeFromStart / 60)) + offset - 1
        : offset - 1
    );
  }, [currentDayStart, minutesToPixel, offset]);
  useEffect(() => {
    const currentDayInterval = Interval.fromDateTimes(
      currentDayStart,
      currentDayEnd
    );
    if (!currentDayInterval.contains(DateTime.now())) return;
    changePixels();
    const interval = setInterval(() => {
      changePixels();
    }, 1000);
    return () => clearInterval(interval);
  }, [changePixels, currentDayEnd, currentDayStart]);

  const currentDayInterval = Interval.fromDateTimes(
    currentDayStart,
    currentDayEnd
  );
  if (!currentDayInterval.contains(DateTime.now())) return;
  return (
    <Separator
      className="absolute w-full left-0 right-0 bg-blue-600 z-10"
      style={{ top: pixels }}
    />
  );
};
