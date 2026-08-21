import { useColorPicker } from "@/store/use-color-picker";

export function useChartColors() {
  const canvasColor = useColorPicker((state) => state.canvasColor);
  const setCanvasColor = useColorPicker((state) => state.setCanvasColor);

  const gridColor = useColorPicker((state) => state.gridColor);
  const setGridColor = useColorPicker((state) => state.setGridColor);

  const axisColor = useColorPicker((state) => state.axisColor);
  const setAxisColor = useColorPicker((state) => state.setAxisColor);

  return {
    canvasColor,
    setCanvasColor,
    gridColor,
    setGridColor,
    axisColor,
    setAxisColor,
  };
}
