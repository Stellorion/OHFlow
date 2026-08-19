import { create } from "zustand";
import { CanvasColorStore } from "@/types/color-picker";

export const useColorPicker = create<CanvasColorStore>((set) => ({
  canvasColor: "#ffffff",
  setCanvasColor: (color) => set({ canvasColor: color }),

  cursorColor: "rgba(0, 0, 0, 0.05)",
  setCursorColor: (color) => set({ cursorColor: color }),
}));

