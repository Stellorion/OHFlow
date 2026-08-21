"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useExportDimensions,
  MIN_WIDTH_DIMENSION,
  MAX_WIDTH_DIMENSION,
  MIN_HEIGHT_DIMENSION,
  MAX_HEIGHT_DIMENSION,
} from "../hooks/use-export-dimensions";

export function DimensionInputs() {
  const {
    exportWidth,
    exportHeight,
    updateWidth,
    updateHeight,
    clampWidthOnBlur,
    clampHeightOnBlur,
  } = useExportDimensions();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="grid grid-cols-2 gap-2 px-1 pt-1">
      <div className="space-y-1">
        <Label className="text-[10px] text-muted-foreground">Width (px)</Label>
        <Input
          type="number"
          value={exportWidth === 0 ? "" : exportWidth}
          onKeyDown={handleKeyDown}
          onBlur={clampWidthOnBlur}
          onChange={(e) => updateWidth(e.target.value)}
          className="h-7 text-xs"
          min={MIN_WIDTH_DIMENSION}
          max={MAX_WIDTH_DIMENSION}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-[10px] text-muted-foreground">Height (px)</Label>
        <Input
          type="number"
          value={exportHeight === 0 ? "" : exportHeight}
          onKeyDown={handleKeyDown}
          onBlur={clampHeightOnBlur}
          onChange={(e) => updateHeight(e.target.value)}
          className="h-7 text-xs"
          min={MIN_HEIGHT_DIMENSION}
          max={MAX_HEIGHT_DIMENSION}
        />
      </div>
    </div>
  );
}