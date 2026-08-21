"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChartOptionsStore } from "../../store/use-options-store";
import { LegendPosition } from "../../types/chart-types";

export default function OptionSection() {
  const {
    showLegend,
    setShowLegend,
    legendPosition,
    setLegendPosition,
    showValueLabels,
    setShowValueLabels,
    showGridLines,
    setShowGridLines,
    isStacked,
    setIsStacked,
  } = useChartOptionsStore();

  return (
    <Card>
      <div className="flex flex-col justify-between gap-3">
        <CardHeader>
          <CardTitle>Options</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Label>Legend</Label>
            <Switch
              id="show-legend"
              checked={showLegend}
              onCheckedChange={setShowLegend}
            />
          </div>
          <Separator />

          <div className="flex justify-between">
            <Label>Legend Position</Label>
            <Select
              value={legendPosition}
              onValueChange={(value) =>
                setLegendPosition(value as LegendPosition)
              }
            >
              <SelectTrigger id="legend-position" className="w-28 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bottom">Bottom</SelectItem>
                <SelectItem value="top">Top</SelectItem>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />

          <div className="flex justify-between">
            <Label>Value Labels</Label>
            <Switch
              id="show-labels"
              checked={showValueLabels}
              onCheckedChange={setShowValueLabels}
            />
          </div>
          <Separator />

          <div className="flex justify-between">
            <Label>Grid Lines</Label>
            <Switch
              id="show-grid-lines"
              checked={showGridLines}
              onCheckedChange={setShowGridLines}
            />
          </div>
          <Separator />

          <div className="flex justify-between">
            <Label>Stacked</Label>
            <Switch
              id="is-stacked"
              checked={isStacked}
              onCheckedChange={setIsStacked}
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
