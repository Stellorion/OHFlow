"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function OptionSection() {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-3">
        <CardHeader>
          <CardTitle>Options</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Legend</Label>
          <Label>Legend Position</Label>
          <Label>Value Labels</Label>
          <Label>Grid Lines</Label>
          <Label>Stacked</Label>
        </CardContent>
      </div>
    </Card>
  );
}
