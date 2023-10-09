"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { useTimeTableStore } from "../tableTime/tabletimeStore";
export const NavigationLeft = () => {
  const { week, prevWeek } = useTimeTableStore();
  return (
    <>
      <Button onClick={prevWeek} disabled={week < 1} variant="outline">
        <ChevronLeft />
      </Button>
    </>
  );
};
export const NavigationRight = () => {
  const { week, nextWeek } = useTimeTableStore();
  return (
    <>
      <Button onClick={nextWeek} disabled={week > 9} variant="outline">
        <ChevronRight />
      </Button>
    </>
  );
};
