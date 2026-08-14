"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useChartStore } from "../store/use-chart-store";

export default function GraphPreview() {
  const { series, data } = useChartStore();
  const cardRef = useRef<HTMLDivElement>(null);

  const chartConfig = series.reduce((acc, item) => {
    acc[item.id] = { label: item.label, color: item.color };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  // --- Export Handler ---
  const handleExportPNG = async () => {
    if (!cardRef.current) return;

    try {
      // 1. Convert DOM node to PNG Data URL
      const dataUrl = await toPng(cardRef.current, { cacheBust: true });

      // 2. Create invisible anchor element to trigger download
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export image:", err);
    }
  };

  return (
    <Card ref={cardRef} className="w-full h-full flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Chart Preview</CardTitle>

        {/* Export Button */}
        <Button onClick={handleExportPNG} variant="outline" size="sm" className="gap-1.5">
          <Download className="size-4" />
          Export PNG
        </Button>
      </CardHeader>

      <CardContent className="flex-1 min-h-0">
        <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="category" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />

            {series.map((item) => (
              <Bar
                key={item.id}
                dataKey={item.id}
                fill={item.color}
                radius={4}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}