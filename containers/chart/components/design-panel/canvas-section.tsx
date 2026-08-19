"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useColorPicker } from "@/store/use-color-picker";
import ColorPicker from "@/components/color-picker";
import { Label } from "@/components/ui/label";

export default function CanvasSection() {
  const canvasColor = useColorPicker((state) => state.canvasColor);
  const setCanvasColor = useColorPicker((state) => state.setCanvasColor);

  return (
    <Card>
      <div className="flex flex-col gap-3 justify-between">
        <CardHeader>
          <CardTitle>Canvas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <Label>Background</Label>
            <ColorPicker 
              color={canvasColor} 
              onChange={setCanvasColor}
            />
          </div>
          <div className="flex justify-between">
            <Label>Axis</Label>
          </div>
          <div className="flex justify-between">
            <Label>Grid</Label>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
