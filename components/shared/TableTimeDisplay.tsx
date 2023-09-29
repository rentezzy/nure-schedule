"use client";
import { api } from "@/lib/utils";
import { DateTime } from "luxon";
import { useQuery } from "@tanstack/react-query";
import { Lesson } from "@/types/Schedule";
export const TableTimeDisplay = ({ id }: { id: string }) => {
  const startWeek = DateTime.now().startOf("week").toSeconds();
  const endWeek = Math.trunc(DateTime.now().endOf("week").toSeconds());
  const { data, status } = useQuery({
    queryKey: ["schedule", id],
    queryFn: async () => {
      const res = await fetch(
        api(
          `schedule?type=group&id=${id}&start_time=${startWeek}&end_time=${endWeek}`
        )
      );
      if (res.status !== 200) throw new Error("Error");
      return (await res.json()) as Lesson[];
    },
  });
  if (!data || status === "error") return <div>No lessons</div>;
  return (
    <div>
      {data.map((lesson) => (
        <p key={lesson.id}>{lesson.subject.title}</p>
      ))}
    </div>
  );
};
