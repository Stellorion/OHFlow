export interface ColorDropdownProps {
  value: string;
  onChange: (color: string) => void;
  palette: string[];
  label?: string;
  className?: string;
}

export interface CanvasColorStore {
  canvasColor: string;
  setCanvasColor: (color: string) => void;

  gridColor: string;
  setGridColor: (color: string) => void;

  axisColor: string;
  setAxisColor: (color: string) => void;
}