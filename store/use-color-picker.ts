import { create } from "zustand";
import { CanvasColorStore } from "@/types/color-dropdown";

export const useColorPicker = create<CanvasColorStore>((set) => ({
  canvasColor: "#ffffff",
  setCanvasColor: (color) => set({ canvasColor: color }),

  gridColor: "#e2e8f0",
  setGridColor: (color) => set({ gridColor: color }),

  axisColor: "#64748b",
  setAxisColor: (color) => set({ axisColor: color }),
}));

