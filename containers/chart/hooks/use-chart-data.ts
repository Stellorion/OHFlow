import { useChartStore } from "../store/use-chart-store";

export function useChartData() {
  const data = useChartStore((state) => state.data);
  const series = useChartStore((state) => state.series);
  const addRow = useChartStore((state) => state.addRow);
  const removeRow = useChartStore((state) => state.removeRow);
  const updateCell = useChartStore((state) => state.updateCell);

  return {
    data,
    series,
    addRow,
    removeRow,
    updateCell,
  };
}