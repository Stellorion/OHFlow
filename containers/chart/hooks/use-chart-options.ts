import { useChartOptionsStore } from "../store/use-options-store";
import { getLegendProps } from "../utils/chart-legend";

export function useChartOptions() {
  const showLegend = useChartOptionsStore((state) => state.showLegend);
  const legendPosition = useChartOptionsStore((state) => state.legendPosition);
  const showValueLabels = useChartOptionsStore((state) => state.showValueLabels);
  const showGridLines = useChartOptionsStore((state) => state.showGridLines);
  const isStacked = useChartOptionsStore((state) => state.isStacked);

  const legendProps = getLegendProps(legendPosition);

  return {
    showLegend,
    legendPosition,
    legendProps,
    showValueLabels,
    showGridLines,
    isStacked,
  };
}