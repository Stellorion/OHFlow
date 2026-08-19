"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CHART_TYPES } from "../../store/chart-constants";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function TypeSection() {
  return (
    <div>
      <Card className="pb-0">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Chart Type</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <ToggleGroup
            variant="outline"
            defaultValue={["bar"]}
            className="grid grid-flow-col auto-cols-fr gap-2 w-full"
          >
            {CHART_TYPES.map(({ id, label, icon: Icon }) => (
              <ToggleGroupItem
                key={id}
                value={id}
                variant="outline"
                className="flex flex-col items-center justify-center w-full h-auto py-3 gap-1.5"
              >
                <Icon className="size-5 sm:size-6" />
                <span className="text-xs sm:text-sm">{label}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardContent>
      </Card>
    </div>
  );
}
