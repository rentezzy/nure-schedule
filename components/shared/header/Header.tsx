import { Sidebar } from "../Sidebar";
import { TimeDisplayMonth } from "../TimeDisplay";
import { NavigationLeft, NavigationRight } from "./Navigation";

export const Header = () => {
  return (
    <header className="flex justify-between p-4 items-center border-b-2 border-black/25 h-[8vh] box-border">
      <div className="flex gap-2">
        <Sidebar />
        <NavigationLeft />
      </div>
      <div>
        <TimeDisplayMonth />
      </div>
      <div>
        <NavigationRight />
      </div>
    </header>
  );
};
