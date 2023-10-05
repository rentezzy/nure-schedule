"use client";
import { parseSchedule } from "@/lib/parseSchedule";
import { api } from "@/lib/utils";
import { Lesson } from "@/types/Schedule";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { DayWaterrfall } from "../dayWaterfall/DayWaterrfall";
import { useTimeTableStore } from "./tabletimeStore";
export const TableTimeDisplay = ({ id }: { id: string }) => {
  const week = useTimeTableStore((state) => state.week);
  const startWeek = DateTime.now().plus({ week }).startOf("week").toSeconds();
  const endWeek = Math.trunc(
    DateTime.now().plus({ week }).endOf("week").toSeconds()
  );
  const { data, status } = useQuery({
    queryKey: ["schedule", id, startWeek, endWeek, week],
    queryFn: async () => {
      const res = await fetch(
        api(
          `schedule?type=group&id=${id}&start_time=${startWeek}&end_time=${endWeek}`
        )
      );
      if (res.status !== 200) throw new Error("Error");
      const scheduleRaw = (await res.json()) as Lesson[];
      return parseSchedule(scheduleRaw, week);
    },
  });
  if (!data || status === "error") return <div>No lessons</div>;
  return (
    <div className="grid grid-cols-7 pl-[80px] absolute z-10 h-full w-full">
      {data.map((lessons, index) => (
        <DayWaterrfall day={index} lessons={lessons} key={index} />
      ))}
    </div>
  );
};
