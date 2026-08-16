"use client";

import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useExport } from "../hooks/use-export";
import { ExportDropdownProps } from "../types/export";

export function ExportButton({
  chartRef,
  fileName = "chart",
}: ExportDropdownProps) {
  const { isExporting } = useExport({
    chartRef,
    fileName,
  });

  return (
    <DropdownMenuTrigger>
      <Button
        variant="outline"
        size="sm"
        disabled={isExporting}
        className="gap-2"
        data-export-ignore
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
