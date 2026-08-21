"use client";

import { Button } from "@/components/ui/button";
import {
  useExportDimensions,
  EXPORT_PRESETS,
} from "../hooks/use-export-dimensions";

export function DimensionPresets() {
  const { applyPreset, isPresetActive } = useExportDimensions();

  return (
    <div className="flex gap-1 px-1">
      {EXPORT_PRESETS.map((preset) => (
        <Button
          key={preset.label}
          variant={
            isPresetActive(preset.width, preset.height) ? "default" : "outline"
          }
          size="sm"
          className="h-7 text-xs flex-1 px-1"
          onClick={() => applyPreset(preset.width, preset.height)}
        >
          {preset.label}
        </Button>
      ))}
    </div>
  );
}
