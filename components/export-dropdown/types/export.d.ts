export type ExportFormat = "png" | "svg" | "pdf";
export type ExportTheme = "light" | "dark" | "system";

export interface ExportableCardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  fileName?: string;
  children: ReactNode;
  headerAction?: ReactNode;
  className?: string;
  style?: CSSProperties;
  contentClassName?: string;
}

export interface ExportStore {
  exportFormat: ExportFormat;
  setExportFormat: (format: ExportFormat) => void;
  exportWidth: number;
  setExportWidth: (width: number) => void;
  exportHeight: number;
  setExportHeight: (height: number) => void;
  isExporting: boolean;
  setIsExporting: (isExporting: boolean) => void;
}

export interface ExportOptions {
  chartRef: RefObject<HTMLDivElement | null>;
  fileName?: string;
}

export type ExportDropdownProps = ExportOptions;