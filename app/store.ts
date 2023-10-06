import { useEffect, useState } from "react";

import { Group } from "@/types/Schedule";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Themes } from "@/types/Themes";
import { DEFAULT_THEME } from "@/const/const";

type States = {
  currentGroup: Group | null;
  theme: Themes;
};
type Actions = {
  setCurrentGroup: (group: Group) => void;
  setTheme: (themes: Partial<Themes>) => void;
};
interface Store extends States, Actions {}

const initialStates: States = {
  currentGroup: null,
  theme: DEFAULT_THEME,
};

export const useScheduleStore = create<Store>()(
  persist(
    (set) => ({
      ...initialStates,
      setCurrentGroup(group) {
        set({
          currentGroup: group,
        });
      },
      setTheme(newThemes) {
        set((state) => ({
          theme: { ...state.theme, ...newThemes },
        }));
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
