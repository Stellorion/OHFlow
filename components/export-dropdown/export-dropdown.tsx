"use client";

import { Maximize2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { ExportDropdownProps } from "./types/export";
import { ExportOptions } from "./components/export-options";
import { ThemeSelection } from "./components/theme-selection";
import { DimensionInputs } from "./components/dimension-inputs";
import { DimensionPresets } from "./components/dimension-presets";
import { ExportButton } from "./components/export-button";

export function ExportDropdown({
  chartRef,
  fileName = "chart",
}: ExportDropdownProps) {
  return (
    <DropdownMenu>
      <ExportButton chartRef={chartRef} />

      <DropdownMenuContent align="end" className="w-72 p-3 space-y-2">
        <ExportOptions chartRef={chartRef} fileName={fileName} />

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="space-y-2">

          <DropdownMenuLabel className="px-1 text-xs font-semibold text-muted-foreground flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Maximize2 className="size-3.5" /> Canvas Resolution
            </span>
          </DropdownMenuLabel>

          <DimensionPresets />
          <DimensionInputs />

        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        
        <ThemeSelection />

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
