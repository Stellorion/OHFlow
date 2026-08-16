"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CHART_TYPES } from "../../store/chart-constants";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function TypeSection() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Chart Type</CardTitle>
        </CardHeader>
        <CardContent className={"flex justify-between"}>
          <ToggleGroup variant="outline" defaultValue={["bar"]}>
            {CHART_TYPES.map(({ id, label, icon: Icon }) => (
              <ToggleGroupItem
                key={id}
                value={id}
                variant="outline"
                className="flex flex-col h-auto py-2.5 size-17.5"
              >
                <Icon className="size-5" />
                <span>{label}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardContent>
      </Card>
    </div>
  );
}
