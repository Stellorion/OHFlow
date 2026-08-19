"use client";

import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useExport } from "../hooks/use-export";
import { ExportDropdownProps } from "../types/export";
import { useColorPicker } from "@/store/use-color-picker";
import { DARK_BG_PALETTE } from "@/containers/chart/store/color-constants";

export function ExportButton({
  chartRef,
  fileName = "chart",
}: ExportDropdownProps) {
  const { isExporting } = useExport({
    chartRef,
    fileName,
  });

  const canvasColor = useColorPicker((state) => state.canvasColor);

  const currentBg = typeof canvasColor === "string" 
    ? canvasColor.toUpperCase() 
    : "";

  const isDarkBg = DARK_BG_PALETTE.some((hex) => hex.toUpperCase() === currentBg);

  const textColor = isDarkBg ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)";
  const borderColor = isDarkBg ? "oklch(0.708 0 0)" : "oklch(0.556 0 0)";

  return (
    <DropdownMenuTrigger>
      <Button
        variant="outline"
        size="sm"
        disabled={isExporting}
        className="gap-2"
        data-export-ignore
        style={{
          color: textColor,
          borderColor: borderColor,
        }}
      >
        {isExporting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Download className="size-4" />
        )}
        Export
      </Button>
    </DropdownMenuTrigger>
  );
}
