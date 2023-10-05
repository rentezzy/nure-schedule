"use client";

import { useBoundScheduleStore } from "@/app/store";
import { TableTimeDisplay } from "./TableTimeDisplay";
//TODO: FIND AMOUNT OF WEEKS TO END OF SEMESTER
export const TableTime = () => {
  const group = useBoundScheduleStore((state) => state.currentGroup);

  if (!group) return <div>Choose a group</div>;
  return (
    <div>
      <TableTimeDisplay id={group.id} />
    </div>
  );
};
