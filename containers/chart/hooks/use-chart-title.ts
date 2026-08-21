import { useChartStore } from "../store/use-chart-store";

export function useChartTitle() {
  const title = useChartStore((state) => state.chartTitle);
  const subtitle = useChartStore((state) => state.chartSubtitle);

  const updateTitle = useChartStore((state) => state.updateChartTitle);
  const updateSubtitle = useChartStore((state) => state.updateChartSubtitle);

  return {
    title,
    subtitle,
    updateTitle,
    updateSubtitle,
  };
}