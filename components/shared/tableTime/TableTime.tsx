"use client";

import { useBoundScheduleStore } from "@/app/store";
import { useRef } from "react";
import { TimeGrid } from "../TimeGrid";
import { TabHeightProvider } from "./TabHeightContext";
import { TableTimeDisplay } from "./TableTimeDisplay";
//TODO: FIND AMOUNT OF WEEKS TO END OF SEMESTER
export const TableTime = () => {
  const group = useBoundScheduleStore((state) => state.currentGroup);
  const childRef = useRef<HTMLDivElement>(null);
  if (!group) return <div>Choose a group</div>;
  return (
    <TabHeightProvider childRef={childRef}>
      <div className="h-full relative" ref={childRef}>
        <TableTimeDisplay id={group.id} />
        <TimeGrid />
      </div>
    </TabHeightProvider>
  );
};
