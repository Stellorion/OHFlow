"use client";

import {
  Download,
  FileImage,
  FileCode,
  Printer,
  Loader2,
  Sun,
  Moon,
  Monitor,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useExport } from "./hooks/use-export";
import { useExportStore } from "./store/use-export-store";
import { ExportDropdownProps, ExportTheme, } from "./types/export";


export function ExportDropdown({ chartRef, fileName = "chart" }: ExportDropdownProps) {
  const { isExporting, exportPNG, exportSVG, printChart } = useExport({
    chartRef,
    fileName,
  });

  const {
    exportWidth,
    setExportWidth,
    exportHeight,
    setExportHeight,
    exportTheme,
    setExportTheme,
  } = useExportStore();

  const handlePreset = (width: number, height: number) => {
    setExportWidth(width);
    setExportHeight(height);
  };

  return (
    <DropdownMenu>
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

      <DropdownMenuContent align="end" className="w-72 p-3 space-y-2">
        {/* Export Action Buttons */}
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

        <DropdownMenuSeparator />

        {/* Dimension Controls */}
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuLabel className="px-1 text-xs font-semibold text-muted-foreground flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Maximize2 className="size-3.5" /> Canvas Resolution
            </span>
          </DropdownMenuLabel>

          {/* Preset Buttons */}
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

          {/* Custom Width & Height Inputs */}
          <div className="grid grid-cols-2 gap-2 px-1 pt-1">
            <div className="space-y-1">
              <Label className="text-[10px] text-muted-foreground">Width (px)</Label>
              <Input
                type="number"
                value={exportWidth}
                onChange={(e) => setExportWidth(Number(e.target.value) || 0)}
                className="h-7 text-xs"
                min={300}
                max={4096}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] text-muted-foreground">Height (px)</Label>
              <Input
                type="number"
                value={exportHeight}
                onChange={(e) => setExportHeight(Number(e.target.value) || 0)}
                className="h-7 text-xs"
                min={300}
                max={4096}
              />
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Theme Selection Controls */}
        <DropdownMenuGroup className="space-y-1.5">
          <DropdownMenuLabel className="px-1 text-xs font-semibold text-muted-foreground">
            Export Theme
          </DropdownMenuLabel>

          <div className="grid grid-cols-3 gap-1 px-1">
            {(["system", "light", "dark"] as ExportTheme[]).map((theme) => {
              const isActive = exportTheme === theme;
              return (
                <Button
                  key={theme}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className="h-7 text-xs capitalize flex items-center justify-center gap-1 px-1"
                  onClick={() => setExportTheme(theme)}
                >
                  {theme === "system" && <Monitor className="size-3" />}
                  {theme === "light" && <Sun className="size-3" />}
                  {theme === "dark" && <Moon className="size-3" />}
                  {theme}
                </Button>
              );
            })}
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}