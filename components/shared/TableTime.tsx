"use client";

import { useBoundScheduleStore } from "@/app/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { TableTimeDisplay } from "./TableTimeDisplay";
//TODO: FIND AMOUNT OF WEEKS TO END OF SEMESTER
export const TableTime = () => {
  const group = useBoundScheduleStore((state) => state.currentGroup);
  const [week, setWeek] = useState(0);
  const nextWeek = () => {
    if (week > 9) return;
    setWeek((prev) => prev + 1);
  };
  const prevWeek = () => {
    if (week < 1) return;
    setWeek((prev) => prev - 1);
  };
  if (!group) return <div>Choose a group</div>;
  return (
    <div>
      <div className="flex justify-between">
        <Button onClick={prevWeek} disabled={week < 1} variant="outline">
          <ChevronLeft />
        </Button>
        <Button onClick={nextWeek} disabled={week > 9} variant="outline">
          <ChevronRight />
        </Button>
      </div>
      <TableTimeDisplay id={group.id} week={week} />
    </div>
  );
};
