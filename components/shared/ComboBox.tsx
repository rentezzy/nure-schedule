"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { List } from "react-virtualized";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Group } from "@/types/Schedule";
import { useBoundScheduleStore, useScheduleStore } from "@/app/store";

//TODO: FIX A LOT OF RERENDERS
export const ComboBox = ({ items }: { items: Group[] }) => {
  const currentGroup = useBoundScheduleStore((state) => state.currentGroup);
  const setCurrentGroup = useScheduleStore((state) => state.setCurrentGroup);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    if (currentGroup && value !== currentGroup.id) setValue(currentGroup.id);
  }, [value, currentGroup]);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? items.find((item) => item.id === value)?.name
            : "Select your group..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 h-[550px] overflow-auto">
        <Command>
          <div className="p-1">
            <Input
              value={search}
              className="focus-visible:ring-0"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></Input>
          </div>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className="p-0">
            <List
              width={250}
              height={500}
              rowHeight={30}
              rowCount={filtered.length}
              rowRenderer={({ index, style }) => {
                const item = filtered[index];
                return (
                  <CommandItem
                    key={item.id}
                    style={style}
                    className=""
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : item.id);
                      setCurrentGroup(item);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === item.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.name}
                  </CommandItem>
                );
              }}
            />
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
