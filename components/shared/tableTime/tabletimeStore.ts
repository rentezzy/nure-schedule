import { create } from "zustand";

type States = {
  week: number;
};
type Actions = {
  nextWeek: () => void;
  prevWeek: () => void;
};
interface Store extends States, Actions {}

const initialStates: States = {
  week: 0,
};

export const useTimeTableStore = create<Store>()((set) => ({
  ...initialStates,
  nextWeek() {
    set((state) => ({
      week: state.week > 9 ? state.week : state.week + 1,
    }));
  },
  prevWeek() {
    set((state) => ({
      week: state.week < 1 ? state.week : state.week - 1,
    }));
  },
}));
