import { create } from "zustand";
import { LayoutStore } from "@/types/layout";

export const useLayoutStore = create<LayoutStore>((set) => ({
  activeTab: "preview",
  setActiveTab: (activeTab) => set({ activeTab }),
}));
