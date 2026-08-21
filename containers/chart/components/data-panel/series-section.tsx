"use client";

import { Plus, Trash2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useChartSeries } from "../../hooks/use-chart-series";
import { SERIES_COLOR_PALETTE } from "../../store/chart-constants";
import { ColorDropdown } from "@/components/color-dropdown";

export default function SeriesSection() {
  const {
    series,
    addSeries,
    removeSeries,
    updateSeriesLabel,
    updateSeriesColor,
  } = useChartSeries();

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
            <ColorDropdown
              value={item.color}
              onChange={(color) => updateSeriesColor(item.id, color)}
              palette={SERIES_COLOR_PALETTE}
            />

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
