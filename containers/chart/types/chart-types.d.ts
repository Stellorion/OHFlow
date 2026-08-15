export type ChartType = "bar" | "line" | "area" | "pie";

export type LegendPosition = "top" | "bottom" | "right";

export interface Series {
  id: string;
  label: string;
  color: string;
}

export interface DataRow {
  id: string;
  category: string;
  [key: string]: string | number;
}

export interface ChartStore {
  chartType: ChartType;
  setChartType: (type: ChartType) => void;
  chartTitle: String;
  updateChartTitle: (id: string, newLabel: string) => void;
  chartSubtitle: String;
  updateChartSubtitle: (id: string, newLabel: string) => void;
  
  series: Series[];
  data: DataRow[];
  addSeries: (label: string) => void;
  removeSeries: (id: string) => void;
  updateSeriesLabel: (id: string, newLabel: string) => void;
  updateSeriesColor: (id: string, newColor: string) => void;
  addRow: () => void;
  removeRow: (id: string) => void;
  updateCell: (rowId: string, key: string, value: string | number) => void;
}