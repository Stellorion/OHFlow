"use client";

import { useRef } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useChartStore } from "../store/use-chart-store";
import { ExportDropdown } from "@/components/export-dropdown/export-dropdown";

export default function GraphPreview() {
  const { series, data } = useChartStore();
  const cardRef = useRef<HTMLDivElement>(null);

  const chartConfig = series.reduce(
    (acc, item) => {
      acc[item.id] = { label: item.label, color: item.color };
      return acc;
    },
    {} as Record<string, { label: string; color: string }>,
  );

  return (
    <Card ref={cardRef} className="w-full h-full flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Chart Preview</CardTitle>
        <ExportDropdown chartRef={cardRef} />
      </CardHeader>

      <CardContent className="flex-1 min-h-0 w-full h-full">
        <ChartContainer
          config={chartConfig}
          className="w-full h-full min-h-75"
        >
          <BarChart
            accessibilityLayer
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
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
