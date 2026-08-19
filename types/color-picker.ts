export interface ColorPickerProps {
  label?: string;
  color: string;
  onChange: (color: string) => void;
  className?: string;
}

export interface CanvasColorStore {
  canvasColor: string;
  setCanvasColor: (color: string) => void;

  cursorColor: string;
  setCursorColor: (color: string) => void;
}
