import { ChartColumn, ChartLine, ChartArea, ChartPie } from "lucide-react";

export const SERIES_COLOR_PALETTE = [
  "#2563eb", // Blue
  "#2d6a4f", // Hunter Green
  "#10b981", // Emerald
  "#06b6d4", // Cyan
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#ec4899", // Pink
  "#8338EC", // Purple
  "#7F0799", // Indigo
  "#FFC07F", // Light Caramel
  "#99582a", // Chocolate Brown
  "#212529", // Shadow Grey
  "#495057", // Iron Grey
  "#adb5bd", // Pale Slate
  "#dee2e6", // Alabaster Grey
];

export const AXIS_GRID_PALETTE = [
  "#e2e8f0", // Soft Gray
  "#cbd5e1", // Slate Gray
  "#94a3b8", // Medium Gray
  "#64748b", // Dark Slate
  "#334155", // Deep Charcoal
  "#1e293b", // Near Black
  "#ffffff", // Pure White
];

export const CHART_TYPES = [
  { id: "bar",  label: "Bar",  icon: ChartColumn },
  { id: "line", label: "Line", icon: ChartLine },
  { id: "area", label: "Area", icon: ChartArea },
  { id: "pie",  label: "Pie",  icon: ChartPie },
] as const;