import { create } from "zustand";
import { ExportStore } from "../types/export";

export const useExportStore = create<ExportStore>((set) => ({
  exportFormat: "png",
  setExportFormat: (format) => set({ exportFormat: format }),
  
  exportWidth: 1200,
  setExportWidth: (width) => set({ exportWidth: width }),

  exportHeight: 800,
  setExportHeight: (height) => set({ exportHeight: height }),

  isExporting: false,
  setIsExporting: (isExporting) => set({ isExporting }),
}));