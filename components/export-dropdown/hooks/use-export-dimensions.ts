import { useExportStore } from "../store/use-export-store";

export const MIN_WIDTH_DIMENSION = 320;
export const MAX_WIDTH_DIMENSION = 4096;

export const MIN_HEIGHT_DIMENSION = 200;
export const MAX_HEIGHT_DIMENSION = 2160;

export const EXPORT_PRESETS = [
  { label: "720p", width: 1280, height: 720 },
  { label: "1080p", width: 1920, height: 1080 },
  { label: "4K", width: 3840, height: 2160 },
] as const;

export function useExportDimensions() {
  const exportWidth = useExportStore((state) => state.exportWidth);
  const setExportWidth = useExportStore((state) => state.setExportWidth);
  const exportHeight = useExportStore((state) => state.exportHeight);
  const setExportHeight = useExportStore((state) => state.setExportHeight);

  const clamp = (val: number, min: number, max: number) => {
    if (isNaN(val) || val < min) return min;
    if (val > max) return max;
    return val;
  };

  const updateWidth = (val: string) => {
    if (val === "") {
      setExportWidth(0);
      return;
    }
    setExportWidth(Number(val));
  };

  const updateHeight = (val: string) => {
    if (val === "") {
      setExportHeight(0);
      return;
    }
    setExportHeight(Number(val));
  };

  const clampWidthOnBlur = () => {
    setExportWidth(
      clamp(exportWidth, MIN_WIDTH_DIMENSION, MAX_WIDTH_DIMENSION),
    );
  };

  const clampHeightOnBlur = () => {
    setExportHeight(
      clamp(exportHeight, MIN_HEIGHT_DIMENSION, MAX_HEIGHT_DIMENSION),
    );
  };

  const applyPreset = (width: number, height: number) => {
    setExportWidth(width);
    setExportHeight(height);
  };

  const isPresetActive = (width: number, height: number) => {
    return exportWidth === width && exportHeight === height;
  };

  return {
    exportWidth,
    exportHeight,
    updateWidth,
    updateHeight,
    clampWidthOnBlur,
    clampHeightOnBlur,
    applyPreset,
    isPresetActive,
  };
}
