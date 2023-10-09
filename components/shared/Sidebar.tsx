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
import { Separator } from "../ui/separator";
import { ColorPickers } from "./ColorPickers";
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
          <Separator />
        </SheetHeader>
        <div className="flex flex-col justify-between h-[92vh]">
          <section>
            <SheetDescription className="my-2">Обрати групу</SheetDescription>
            <div className="mb-3">
              <ComboBox items={groups} />
            </div>
          </section>
          <section>
            <Separator />
            <SheetDescription className="my-2">
              Кастомізувати тему
            </SheetDescription>
            <ColorPickers />
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};
