import { create } from "zustand";
import { ChartOptionsStore } from "../types/chart-types";

export const useChartOptionsStore = create<ChartOptionsStore>((set) => ({
  showLegend: false,
  setShowLegend: (showLegend) => set({ showLegend }),

  legendPosition: "bottom",
  setLegendPosition: (legendPosition) => set({ legendPosition }),

  showValueLabels: false,
  setShowValueLabels: (showValueLabels) => set({ showValueLabels }),

  showGridLines: true,
  setShowGridLines: (showGridLines) => set({ showGridLines }),

  isStacked: false,
  setIsStacked: (isStacked) => set({ isStacked }),
}));
