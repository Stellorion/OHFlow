import { useColorPicker } from "@/store/use-color-picker";
import { DARK_BG_PALETTE } from "@/containers/chart/store/color-constants";

export function useExportTheme() {
  const canvasColor = useColorPicker((state) => state.canvasColor);

  const currentBg = typeof canvasColor === "string" 
    ? canvasColor.toUpperCase() 
    : "";

  const isDarkBg = DARK_BG_PALETTE.some(
    (hex) => hex.toUpperCase() === currentBg
  );

  const textColor = isDarkBg ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)";
  const borderColor = isDarkBg ? "oklch(0.708 0 0)" : "oklch(0.556 0 0)";

  return { textColor, borderColor };
}