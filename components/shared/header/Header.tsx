import { Sidebar } from "../Sidebar";
import {
  NavigationLeft,
  NavigationMiddle,
  NavigationRight,
} from "./Navigation";

export const Header = () => {
  return (
    <header className="flex justify-between p-4 items-center border-b">
      <div className="flex gap-2">
        <Sidebar />
        <NavigationLeft />
      </div>
      <div>
        <NavigationMiddle />
      </div>
      <div>
        <NavigationRight />
      </div>
    </header>
  );
};
