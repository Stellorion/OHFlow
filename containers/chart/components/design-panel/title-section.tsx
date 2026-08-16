"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChartStore } from "../../store/use-chart-store";

export default function TitleSection() {
  const title = useChartStore((state) => state.chartTitle);
  const subtitle = useChartStore((state) => state.chartSubtitle);

  const updateTitle = useChartStore((state) => state.updateChartTitle);
  const updateSubtitle = useChartStore((state) => state.updateChartSubtitle);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Titles</CardTitle>
      </CardHeader>

      <CardContent className={"flex flex-col gap-3"}>

        <div className="flex flex-col gap-1">
          <Label>Title</Label>
          <Input value={title} onChange={(e) => updateTitle(e.target.value)}></Input>
        </div>

        <div className="flex flex-col gap-1">
          <Label>Subtitle</Label>
          <Input value={subtitle} onChange={(e) => updateSubtitle(e.target.value)}></Input>
        </div>

      </CardContent>
    </Card>
  );
}
