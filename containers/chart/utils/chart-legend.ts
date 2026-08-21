import { LegendPosition } from "../types/chart-types";

export function getLegendProps(position: LegendPosition) {
  switch (position) {
    case "top":
      return {
        verticalAlign: "top" as const,
        align: "center" as const,
        layout: "horizontal" as const,
        className: "pb-3 flex-row justify-center",
      };
    case "bottom":
      return {
        verticalAlign: "bottom" as const,
        align: "center" as const,
        layout: "horizontal" as const,
        className: "pt-3 flex-row justify-center",
      };
    case "left":
      return {
        verticalAlign: "middle" as const,
        align: "left" as const,
        layout: "vertical" as const,
        className: "pr-3 flex-col items-start justify-start",
      };
    case "right":
      return {
        verticalAlign: "middle" as const,
        align: "right" as const,
        layout: "vertical" as const,
        className: "pl-3 flex-col items-start justify-start",
      };
  }
}