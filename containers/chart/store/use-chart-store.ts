import { create } from "zustand";
import { ChartStore } from "../types/chart-types";

export const useChartStore = create<ChartStore>((set) => ({
  chartType: "bar",
  setChartType: (chartType) => set({ chartType }),

  chartTitle: "Phones vs Desktop",
  updateChartTitle: (id, newLabel) =>
    set((state) => ({
      series: state.series.map((s) =>
        s.id === id ? { ...s, label: newLabel } : s,
      ),
    })),


  chartSubtitle: "I don't know",
  updateChartSubtitle: (id, newLabel) =>
    set((state) => ({
      series: state.series.map((s) =>
        s.id === id ? { ...s, label: newLabel } : s,
      ),
    })),


  series: [
    { id: "desktop", label: "Desktop", color: "var(--chart-1)" },
    { id: "mobile", label: "Mobile", color: "var(--chart-2)" },
  ],
  data: [
    { id: "1", category: "January", desktop: 186, mobile: 80 },
    { id: "2", category: "February", desktop: 305, mobile: 200 },
  ],

  addSeries: (label) =>
    set((state) => {
      const id = crypto.randomUUID();
      return {
        series: [
          ...state.series,
          { id, label, color: `var(--chart-${state.series.length + 1})` },
        ],
      };
    }),

  removeSeries: (id) =>
    set((state) => ({
      series: state.series.filter((s) => s.id !== id),
    })),

  updateSeriesLabel: (id, newLabel) =>
    set((state) => ({
      series: state.series.map((s) =>
        s.id === id ? { ...s, label: newLabel } : s,
      ),
    })),

  updateSeriesColor: (id, newColor) =>
    set((state) => ({
      series: state.series.map((s) =>
        s.id === id ? { ...s, color: newColor } : s,
      ),
    })),

  addRow: () =>
    set((state) => ({
      data: [
        ...state.data,
        { id: String(Date.now()), category: "New Item", desktop: 0, mobile: 0 },
      ],
    })),

  removeRow: (id) =>
    set((state) => ({
      data: state.data.filter((s) => s.id !== id),
    })),

  updateCell: (rowId, key, value) =>
    set((state) => ({
      data: state.data.map((row) =>
        row.id === rowId ? { ...row, [key]: value } : row,
      ),
    })),
}));
