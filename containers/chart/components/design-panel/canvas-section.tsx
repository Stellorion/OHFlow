"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useColorPicker } from "@/store/use-color-picker";
import { ColorDropdown } from "@/components/color-dropdown";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator"
import { BG_COLOR_PALETTE } from "../../store/color-constants";
import { AXIS_GRID_PALETTE } from "../../store/chart-constants";

export default function CanvasSection() {
  const canvasColor = useColorPicker((state) => state.canvasColor);
  const setCanvasColor = useColorPicker((state) => state.setCanvasColor);

  const gridColor = useColorPicker((state) => state.gridColor);
  const setGridColor = useColorPicker((state) => state.setGridColor);

  const axisColor = useColorPicker((state) => state.axisColor);
  const setAxisColor = useColorPicker((state) => state.setAxisColor);

  return (
    <Card>
      <div className="flex flex-col gap-3 justify-between">
        <CardHeader>
          <CardTitle>Canvas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <Label>Background</Label>
            <ColorDropdown
              value={canvasColor}
              onChange={setCanvasColor}
              palette={BG_COLOR_PALETTE}
            />
          </div>
          <Separator />
          <div className="flex justify-between">
            <Label>Axis</Label>
            <ColorDropdown
              value={gridColor}
              onChange={setGridColor}
              palette={AXIS_GRID_PALETTE}
            />
          </div>
          <Separator />
          <div className="flex justify-between">
            <Label>Grid</Label>
            <ColorDropdown
              value={axisColor}
              onChange={setAxisColor}
              palette={AXIS_GRID_PALETTE}
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
