import { useChartStore } from "../store/use-chart-store";

export function useChartConfig() {
  const series = useChartStore((state) => state.series);

  const chartConfig = series.reduce(
    (acc, item) => {
      acc[item.id] = { label: item.label, color: item.color };
      return acc;
    },
    {} as Record<string, { label: string; color: string }>
  );

  return chartConfig;
}