"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useExportStore } from "../store/use-export-store";

const MIN_WIDTH_DIMENSION = 320;
const MAX_WIDTH_DIMENSION = 4096;

const MIN_HEIGHT_DIMENSION = 200;
const MAX_HEIGHT_DIMENSION = 2160;

export function DimensionInputs() {
  const { exportWidth, setExportWidth, exportHeight, setExportHeight } =
    useExportStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const clampValue = (val: number, min: number, max: number) => {
    if (isNaN(val) || val < min) return min;
    if (val > max) return max;
    return val;
  };

  const handleBlurWidth = () => {
    setExportWidth(clampValue(exportWidth, MIN_WIDTH_DIMENSION, MAX_WIDTH_DIMENSION));
  };

  const handleBlurHeight = () => {
    setExportHeight(clampValue(exportHeight, MIN_HEIGHT_DIMENSION, MAX_HEIGHT_DIMENSION));
  };

  return (
    <div className="grid grid-cols-2 gap-2 px-1 pt-1">
      <div className="space-y-1">
        <Label className="text-[10px] text-muted-foreground">Width (px)</Label>
        <Input
          type="number"
          value={exportWidth === 0 ? "" : exportWidth}
          onKeyDown={handleKeyDown}
          onBlur={handleBlurWidth}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              setExportWidth(0);
              return;
            }
            const num = Number(val);
            if (num > MAX_WIDTH_DIMENSION) {
              setExportWidth(MAX_WIDTH_DIMENSION);
            } else {
              setExportWidth(num);
            }
          }}
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
          onBlur={handleBlurHeight}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              setExportHeight(0);
              return;
            }
            const num = Number(val);
            if (num > MAX_HEIGHT_DIMENSION) {
              setExportHeight(MAX_HEIGHT_DIMENSION);
            } else {
              setExportHeight(num);
            }
          }}
          className="h-7 text-xs"
          min={MIN_HEIGHT_DIMENSION}
          max={MAX_HEIGHT_DIMENSION}
        />
      </div>
    </div>
  );
}