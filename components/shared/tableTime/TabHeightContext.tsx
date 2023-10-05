"use client";
import { TIMETABLERANGE } from "@/const/const";
import { createContext, useEffect, useState } from "react";

export const TabHeightContext = createContext<
  null | ((minutes: number) => number)
>(null);
export const TabHeightProvider = ({
  children,
  childRef,
}: {
  children: React.ReactNode;
  childRef: React.RefObject<HTMLDivElement>;
}) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!childRef || !childRef.current) return;

    setHeight(childRef.current.offsetHeight);
  }, [childRef]);

  const minuteToPixel = (minute: number) => {
    return (height / (TIMETABLERANGE.length * 60)) * minute;
  };
  return (
    <TabHeightContext.Provider value={minuteToPixel}>
      {children}
    </TabHeightContext.Provider>
  );
};
