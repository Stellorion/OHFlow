export type ChartType = "bar" | "line" | "area" | "pie";

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
  chartTitle: string;
  updateChartTitle: (Label: string) => void;
  chartSubtitle: string;
  updateChartSubtitle: (Label: string) => void;
  
  series: Series[];
  addSeries: (label: string) => void;
  removeSeries: (id: string) => void;
  updateSeriesLabel: (id: string, newLabel: string) => void;
  updateSeriesColor: (id: string, newColor: string) => void;

  data: DataRow[];
  addRow: () => void;
  removeRow: (id: string) => void;
  updateCell: (rowId: string, key: string, value: string | number) => void;
}

export type LegendPosition = "top" | "bottom" | "left" | "right";

export interface ChartOptionsStore {
  showLegend: boolean;
  setShowLegend: (show: boolean) => void;
  
  legendPosition: LegendPosition;
  setLegendPosition: (position: LegendPosition) => void;

  showValueLabels: boolean;
  setShowValueLabels: (show: boolean) => void;

  showGridLines: boolean;
  setShowGridLines: (show: boolean) => void;

  isStacked: boolean;
  setIsStacked: (stacked: boolean) => void;
}