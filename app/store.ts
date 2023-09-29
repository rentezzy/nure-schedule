import { useEffect, useState } from "react";

import { Group } from "@/types/Schedule";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type States = {
  currentGroup: Group | null;
};
type Actions = {
  setCurrentGroup: (group: Group) => void;
};
interface Store extends States, Actions {}

const initialStates: States = {
  currentGroup: null,
};

export const useScheduleStore = create<Store>()(
  persist(
    (set) => ({
      currentGroup: null,
      setCurrentGroup(group: Group) {
        set({
          currentGroup: group,
        });
      },
    }),
    {
      name: "nure-schedule",
    }
  )
);
export const useBoundScheduleStore = <T extends keyof States>(
  selector: (state: States) => States[T]
): States[T] => {
  const [state, setState] = useState(selector(initialStates));
  const zustandState = useScheduleStore((persistedState) =>
    selector(persistedState)
  );

  useEffect(() => {
    setState(zustandState);
  }, [zustandState]);

  return state;
};
