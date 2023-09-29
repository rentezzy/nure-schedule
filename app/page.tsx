import { ComboBox } from "@/components/shared/ComboBox";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Group } from "@/types/Schedule";

export default async function Home() {
  const res = await fetch("https://nure-dev.pp.ua/api/groups");
  const groups = (await res.json()) as Group[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
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
    </main>
  );
}
