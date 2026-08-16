import { toPng, toSvg } from "html-to-image";
import { useExportStore } from "../store/use-export-store";
import { ExportFormat, ExportOptions } from "../types/export";

export function useExport({ chartRef, fileName = "chart" }: ExportOptions) {
  const {
    isExporting,
    setIsExporting,
    setExportFormat,
    exportTheme,
    exportWidth,
    exportHeight,
  } = useExportStore();

  const filterNonExportable = (node: HTMLElement) => {
    return !node.hasAttribute?.("data-export-ignore");
  };

  const isDarkMode = () => {
    if (exportTheme === "dark") return true;
    if (exportTheme === "light") return false;
    return document.documentElement.classList.contains("dark");
  };

  const getExportOptions = () => {
    const isDark = isDarkMode();
    const bounds = chartRef.current?.getBoundingClientRect();

    const currentWidth = bounds?.width || 1;
    const currentHeight = bounds?.height || 1;

    const scaleX = exportWidth / currentWidth;
    const scaleY = exportHeight / currentHeight;

    return {
      canvasWidth: exportWidth,
      canvasHeight: exportHeight,

      width: exportWidth,
      height: exportHeight,

      filter: filterNonExportable,
      cacheBust: true,

      backgroundColor: isDark ? "#09090b" : "#ffffff",
      style: {
        width: `${currentWidth}px`,
        height: `${currentHeight}px`,

        transform: `scale(${scaleX}, ${scaleY})`,
        transformOrigin: "top left",

        backgroundColor: isDark ? "#09090b" : "#ffffff",
        color: isDark ? "#f4f4f5" : "#09090b",
        colorScheme: isDark ? "dark" : "light",
      },
    };
  };

  const exportToFile = async (format: ExportFormat) => {
    if (!chartRef.current) return;

    try {
      setIsExporting(true);
      setExportFormat(format);
      const options = getExportOptions();

      let dataUrl = "";
      if (format === "png") {
        dataUrl = await toPng(chartRef.current, options);
      } else if (format === "svg") {
        dataUrl = await toSvg(chartRef.current, options);
      }

      if (dataUrl) {
        const link = document.createElement("a");
        link.download = `${fileName}.${format}`;
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.error(`Failed to export ${format.toUpperCase()}:`, err);
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = async () => {
    if (!chartRef.current) return;

    try {
      setIsExporting(true);
      setExportFormat("pdf");

      const options = getExportOptions();
      const dataUrl = await toPng(chartRef.current, options);

      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Print ${fileName}</title>
              <style>
                @page {
                  size: landscape;
                  margin: 0;
                }
                body {
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  background-color: ${options.backgroundColor};
                }
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              </style>
            </head>
            <body>
              <img src="${dataUrl}" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    } catch (err) {
      console.error("Failed to prepare chart print layout:", err);
    } finally {
      setIsExporting(false);
    }
  };

  return {
    isExporting,
    exportPNG: () => exportToFile("png"),
    exportSVG: () => exportToFile("svg"),
    printChart: handlePrint,
  };
}
export { type ExportOptions };
