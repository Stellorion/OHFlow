"use client";

import { Button } from "@/components/ui/button";
import { useExportStore } from "../store/use-export-store";

export function DimensionPresets() {
  const { exportWidth, setExportWidth, setExportHeight } = useExportStore();

  const handlePreset = (width: number, height: number) => {
    setExportWidth(width);
    setExportHeight(height);
  };

  return (
    <div className="flex gap-1 px-1">
      <Button
        variant={exportWidth === 1280 ? "default" : "outline"}
        size="sm"
        className="h-7 text-xs flex-1 px-1"
        onClick={() => handlePreset(1280, 720)}
      >
        720p
      </Button>
      <Button
        variant={exportWidth === 1920 ? "default" : "outline"}
        size="sm"
        className="h-7 text-xs flex-1 px-1"
        onClick={() => handlePreset(1920, 1080)}
      >
        1080p
      </Button>
      <Button
        variant={exportWidth === 3840 ? "default" : "outline"}
        size="sm"
        className="h-7 text-xs flex-1 px-1"
        onClick={() => handlePreset(3840, 2160)}
      >
        4K
      </Button>
    </div>
  );
}
