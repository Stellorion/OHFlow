import { useChartStore } from "../store/use-chart-store";

export function useChartSeries() {
  const series = useChartStore((state) => state.series);
  const addSeries = useChartStore((state) => state.addSeries);
  const removeSeries = useChartStore((state) => state.removeSeries);
  const updateSeriesLabel = useChartStore((state) => state.updateSeriesLabel);
  const updateSeriesColor = useChartStore((state) => state.updateSeriesColor);

  return {
    series,
    addSeries,
    removeSeries,
    updateSeriesLabel,
    updateSeriesColor,
  };
}