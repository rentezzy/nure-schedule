import { ComboBox } from "@/components/shared/ComboBox";
import { TableTime } from "@/components/shared/TableTime";
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

export default async function Home() {
  const res = await fetch(api("groups"));
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
      <TableTime />
    </main>
  );
}
