"use client";

import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { ColorDropdownProps } from "@/types/color-dropdown";

export function ColorDropdown({
  value,
  onChange,
  palette,
}: ColorDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger
        type="button"
        className="size-7 shrink-0 rounded-md border transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
        style={{ backgroundColor: value }}
      />
      <PopoverContent className="w-auto p-3 flex flex-col gap-2" align="start">
        <Label className="text-muted-foreground">Select Color</Label>
        <div className="grid grid-cols-5 gap-2">
          {palette.map((color) => {
            return (
              <Button
                key={color}
                type="button"
                onClick={() => onChange(color)}
                className="size-6 rounded-full border border-border flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}