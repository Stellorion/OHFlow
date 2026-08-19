"use client";

import { HexColorInput, HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ColorPickerProps } from "@/types/color-picker";

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button className="rounded-md size-6 border" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3">
          <HexColorPicker color={color} onChange={onChange} />
          <div className="flex items-center gap-2">
            <span className="text-lg">#</span>
            <HexColorInput
              color={color}
              onChange={onChange}
              className="w-46 border-2 p-1 rounded-md uppercase"
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
