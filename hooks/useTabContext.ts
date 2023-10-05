import { TabHeightContext } from "@/components/shared/tableTime/TabHeightContext";
import { useContext } from "react";

export const useTabContext = () => {
  return useContext(TabHeightContext);
};
