"use client";

import { useBoundScheduleStore } from "@/app/store";
import { TableTimeDisplay } from "./TableTimeDisplay";
import { TimeGrid } from "../TimeGrid";
import { useRef } from "react";
import { TabHeightProvider } from "./TabHeightContext";
//TODO: FIND AMOUNT OF WEEKS TO END OF SEMESTER
export const TableTime = () => {
  const group = useBoundScheduleStore((state) => state.currentGroup);
  const childRef = useRef<HTMLDivElement>(null);
  if (!group) return <div>Choose a group</div>;
  return (
    <TabHeightProvider childRef={childRef}>
      <div className="h-full relative" ref={childRef}>
        <TimeGrid />
        {/* <TableTimeDisplay id={group.id} /> */}
      </div>
    </TabHeightProvider>
  );
};
