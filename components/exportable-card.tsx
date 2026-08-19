"use client";

import { useRef, ReactNode, CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ExportDropdown } from "@/components/export-dropdown/export-dropdown";
import { ExportableCardProps } from "./export-dropdown/types/export";
import { DARK_BG_PALETTE } from "@/containers/chart/store/chart-constants";

export function ExportableCard({
  title = "Phones vs Desktop",
  subtitle = "Epic Rap Battle",
  fileName = "export",
  children,
  headerAction,
  className = "w-full h-full flex flex-col justify-between",
  style,
  contentClassName = "flex-1 min-h-0 w-full h-full",
}: ExportableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const currentBg = typeof style?.backgroundColor === "string" ? style.backgroundColor.toUpperCase() : "";
  const isDarkBg = DARK_BG_PALETTE.some((hex) => hex.toUpperCase() === currentBg);

  const titleColor = isDarkBg ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)";
  const descriptionColor = isDarkBg ? "oklch(0.556 0 0)" : "oklch(0.708 0 0)";

  return (
    <Card ref={cardRef} className={className} style={style}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          {typeof title === "string" ? <CardTitle className="text-2xl" style={{ color: titleColor}}>{title}</CardTitle> : title}
          {typeof subtitle === "string" ? (<CardDescription className="text-base" style={{ color: descriptionColor}}>{subtitle}</CardDescription>) : (subtitle)}
        </div>
        <div className="flex items-center gap-2">
          {headerAction}
          <ExportDropdown chartRef={cardRef} fileName={fileName} />
        </div>
      </CardHeader>

      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}
