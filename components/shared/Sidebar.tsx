import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { api } from "@/lib/utils";
import { Group } from "@/types/Schedule";
import { SidebarOpen } from "lucide-react";
import { ComboBox } from "./ComboBox";
export const Sidebar = async () => {
  const res = await fetch(api("groups"));
  const groups = (await res.json()) as Group[];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-2">
          <SidebarOpen />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]" side="left">
        <SheetHeader>
          <SheetTitle>NURE Schedule</SheetTitle>
          <SheetDescription>Here you can choose your group</SheetDescription>
        </SheetHeader>
        <div className="py-2">
          <ComboBox items={groups} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
