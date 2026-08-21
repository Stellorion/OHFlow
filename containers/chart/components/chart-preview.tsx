"use client";

import {
  Bar,
  Line,
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useChartStore } from "../store/use-chart-store";
import { ExportableCard } from "@/components/exportable-card";
import { useColorPicker } from "@/store/use-color-picker";
import { useChartConfig } from "../hooks/use-chart-config";
import { useChartOptions } from "../hooks/use-chart-options";
import { getContrastTextColor } from "../utils/contrast-color";

export default function ChartPreview() {
  const { chartTitle, chartSubtitle, series, data } = useChartStore();
  const { canvasColor, gridColor, axisColor } = useColorPicker();

  const chartConfig = useChartConfig();

  const { showLegend, legendProps, showValueLabels, showGridLines, isStacked } =
    useChartOptions();

  return (
    <ExportableCard
      style={{ backgroundColor: canvasColor }}
      title={chartTitle}
      subtitle={chartSubtitle}
      fileName="chart-export"
    >
      <ChartContainer config={chartConfig} className="w-full h-full min-h-75">
        <BarChart accessibilityLayer data={data}>
          {showGridLines && (
            <CartesianGrid vertical={false} stroke={gridColor} />
          )}

          <XAxis
            dataKey="category"
            tickLine={false}
            axisLine={false}
            fontSize={16}
            tick={{ fill: axisColor }}
          />

          <YAxis tickLine={false} axisLine={false} tick={{ fill: axisColor }} />

          {showLegend && (
            <ChartLegend
              {...legendProps}
              content={<ChartLegendContent className={legendProps.className} />}
              className="text-base"
              style={{ color: axisColor }}
            />
          )}

          <ChartTooltip
            content={<ChartTooltipContent indicator="dot" />}
            cursor={{
              style: {
                opacity: 0.25,
                mixBlendMode: "multiply",
              },
            }}
          />
          {series.map((item) => (
            <Bar
              key={item.id}
              dataKey={item.id}
              stackId={isStacked ? "a" : item.id}
              fill={item.color}
              radius={4}
            >
              {showValueLabels && (
                <LabelList
                  dataKey={item.id}
                  position={isStacked ? "center" : "top"}
                  offset={isStacked ? 0 : 12}
                  fontSize={14}
                  style={{
                    fill: isStacked
                      ? getContrastTextColor(item.color)
                      : axisColor,
                  }}
                />
              )}
            </Bar>
          ))}
        </BarChart>
      </ChartContainer>
    </ExportableCard>
  );
}
