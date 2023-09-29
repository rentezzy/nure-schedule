"use client";

import { useBoundScheduleStore } from "@/app/store";
import { TableTimeDisplay } from "./TableTimeDisplay";

export const TableTime = () => {
  const group = useBoundScheduleStore((state) => state.currentGroup);
  if (!group) return <div>choose a group</div>;
  return <TableTimeDisplay id={group.id} />;
};
