"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useChartStore } from "../../store/use-chart-store";
import { COLOR_PALETTE } from "../../store/chart-constants";

export default function SeriesSection() {
  const addSeries = useChartStore((state) => state.addSeries);
  const removeSeries = useChartStore((state) => state.removeSeries);
  const updateSeriesLabel = useChartStore((state) => state.updateSeriesLabel);
  const updateSeriesColor = useChartStore((state) => state.updateSeriesColor);
  const series = useChartStore((state) => state.series);

  return (
    <Card>
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>Series</CardTitle>
        </CardHeader>
        <Button
          onClick={() => addSeries("New Series")}
          variant="ghost"
          size="sm"
          className="mr-3"
        >
          <Plus />
          Add
        </Button>
      </div>
      <CardContent className="flex flex-col gap-2">
        {series.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger>
                <button
                  type="button"
                  className="size-7 shrink-0 rounded-md border border-border shadow-sm transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
                  style={{ backgroundColor: item.color }}
                  title="Change color"
                />
              </PopoverTrigger>
              <PopoverContent className="w-auto p-3" align="start">
                <div className="text-sm font-medium text-muted-foreground">
                  Select Color
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {COLOR_PALETTE.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => updateSeriesColor(item.id, color)}
                      className="size-6 rounded-full border border-border flex items-center justify-center transition-transform hover:scale-110"
                      style={{ backgroundColor: color }}
                    >
                      {item.color === color && (
                        <span />
                      )}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Input
              value={item.label}
              onChange={(e) => updateSeriesLabel(item.id, e.target.value)}
              className="h-8 text-sm"
            />

            <Button
              onClick={() => removeSeries(item.id)}
              variant="ghost"
              size="sm"
              className="hover:text-destructive"
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
