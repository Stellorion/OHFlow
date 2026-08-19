"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useChartStore } from "../store/use-chart-store";
import { ExportableCard } from "@/components/exportable-card";
import { useColorPicker } from "@/store/use-color-picker";

export default function ChartPreview() {
  const { chartTitle, chartSubtitle } = useChartStore();
  const { series, data } = useChartStore();

  const { canvasColor, gridColor, axisColor } = useColorPicker();

  const chartConfig = series.reduce(
    (acc, item) => {
      acc[item.id] = { label: item.label, color: item.color };
      return acc;
    },
    {} as Record<string, { label: string; color: string }>
  );

  return (
    <ExportableCard 
      style={{ backgroundColor: canvasColor }}
      title={chartTitle} 
      subtitle={chartSubtitle} 
      fileName="chart-export"
    >
      <ChartContainer config={chartConfig} className="w-full h-full min-h-75">
        <BarChart
          accessibilityLayer
          data={data}
        >
          <CartesianGrid vertical={false} stroke={gridColor} />
          <XAxis 
            dataKey="category" 
            tickLine={false} 
            axisLine={false} 
            tick={{ fill: axisColor }}
          />
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
    </ExportableCard>
  );
}