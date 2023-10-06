"use client";
import { useBoundScheduleStore, useScheduleStore } from "@/app/store";
import { DEFAULT_THEME, LESSON_TYPE_VOCAB } from "@/const/const";
import { LessonType } from "@/types/Schedule";
import { Themes } from "@/types/Themes";
import Block from "@uiw/react-color-block";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const ColorPickers = () => {
  const theme = useBoundScheduleStore((state) => state.theme);
  const setTheme = useScheduleStore((state) => state.setTheme);
  const [tempTheme, setTempTheme] = useState<Themes>(DEFAULT_THEME);
  useEffect(() => {
    if (theme && tempTheme === DEFAULT_THEME) setTempTheme(theme);
  }, [theme, tempTheme]);
  useEffect(() => {
    if (tempTheme === DEFAULT_THEME) return;
    setTheme(tempTheme);
  }, [tempTheme, setTheme]);
  return (
    <div className="space-y-2">
      {Object.keys(LESSON_TYPE_VOCAB).map((type) => (
        <ColorPicker
          setTempTheme={setTempTheme}
          tempTheme={tempTheme}
          type={type}
          key={type}
        />
      ))}
      <Button
        className="w-full"
        onClick={() => {
          setTheme(DEFAULT_THEME);
          setTempTheme({ ...DEFAULT_THEME });
        }}
      >
        Reset to default
      </Button>
    </div>
  );
};
const ColorPicker = ({
  tempTheme,
  setTempTheme,
  type,
}: {
  tempTheme: Themes;
  setTempTheme: React.Dispatch<React.SetStateAction<Themes>>;
  type: string;
}) => {
  if (!(type in LESSON_TYPE_VOCAB)) return;
  const _type = type as unknown as LessonType;
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className="flex justify-between w-full border rounded-md p-2">
          <p>
            {`${LESSON_TYPE_VOCAB[_type]}: `}
            <strong style={{ color: tempTheme[_type] }} className="font-normal">
              {tempTheme[_type]}
            </strong>
          </p>
          <div
            className="w-6 h-6 rounded-full"
            style={{ background: tempTheme[_type] }}
          ></div>
        </div>
      </PopoverTrigger>
      <PopoverContent asChild>
        <Block
          color={tempTheme[_type]}
          onChange={(color) => {
            setTempTheme((prev) => ({ ...prev, [_type]: color.hex }));
          }}
          className="mt-2"
        />
      </PopoverContent>
    </Popover>
  );
};
