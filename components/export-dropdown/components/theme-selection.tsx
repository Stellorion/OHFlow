"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useExportStore } from "../store/use-export-store";
import { ExportTheme } from "../types/export";

export function ThemeSelection() {
  const { exportTheme, setExportTheme } = useExportStore();

  return (
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
  );
}
