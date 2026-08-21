"use client";

import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useExport } from "../hooks/use-export";
import { ExportDropdownProps } from "../types/export";
import { useExportTheme } from "../hooks/use-export-theme";

export function ExportButton({
  chartRef,
  fileName = "chart",
}: ExportDropdownProps) {
  const { isExporting } = useExport({
    chartRef,
    fileName,
  });

  const { textColor, borderColor } = useExportTheme();

  return (
    <DropdownMenuTrigger
      render={
        <Button
          variant="outline"
          size="sm"
          disabled={isExporting}
          className="gap-2 transition-colors duration-150"
          data-export-ignore
          style={{
            color: textColor,
            borderColor: borderColor,
          }}
        >
          {isExporting ? (
            <Loader2
              className="size-4 animate-spin"
              style={{ color: textColor }}
            />
          ) : (
            <Download className="size-4" style={{ color: textColor }} />
          )}
          Export
        </Button>
      }
    />
  );
}
