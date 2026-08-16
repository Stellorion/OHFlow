"use client";

import {
  FileImage,
  FileCode,
  Printer,
} from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useExport } from "../hooks/use-export";
import { ExportDropdownProps } from "../types/export";

export function ExportOptions({
  chartRef,
  fileName = "chart",
}: ExportDropdownProps) {
  const { exportPNG, exportSVG, printChart } = useExport({
    chartRef,
    fileName,
  });

  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="px-1 text-xs font-semibold text-muted-foreground">
        Export Options
      </DropdownMenuLabel>

      <DropdownMenuItem onClick={exportPNG} className="gap-2 cursor-pointer">
        <FileImage className="size-4" />
        PNG Image
      </DropdownMenuItem>

      <DropdownMenuItem onClick={exportSVG} className="gap-2 cursor-pointer">
        <FileCode className="size-4" />
        SVG Vector
      </DropdownMenuItem>

      <DropdownMenuItem onClick={printChart} className="gap-2 cursor-pointer">
        <Printer className="size-4" />
        Print / PDF
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}
