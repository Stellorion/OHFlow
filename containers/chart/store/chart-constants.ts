import { ChartColumn, ChartLine, ChartArea, ChartPie } from "lucide-react";

export const COLOR_PALETTE = [
  "#2563eb", // Blue
  "#3b82f6", // Light Blue
  "#10b981", // Emerald
  "#06b6d4", // Cyan
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#ec4899", // Pink
  "#8b5cf6", // Purple
  "#6366f1", // Indigo
  "#212529", // Shadow Grey
  "#495057", // Iron Grey
  "#adb5bd", // Pale Slate
  "#dee2e6", // Alabaster Grey
] as const;

export const CHART_TYPES = [
  { id: "bar", label: "Bar", icon: ChartColumn },
  { id: "line", label: "Line", icon: ChartLine },
  { id: "area", label: "Area", icon: ChartArea },
  { id: "pie", label: "Pie", icon: ChartPie },
] as const;