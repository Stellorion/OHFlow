"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartColumn, ChartLine, ChartArea, ChartPie } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CHART_TYPES = [
  { id: "bar", label: "Bar", icon: ChartColumn },
  { id: "line", label: "Line", icon: ChartLine },
  { id: "area", label: "Area", icon: ChartArea },
  { id: "pie", label: "Pie", icon: ChartPie },
] as const;


export default function DesignPanel() {
  return (
    <div className="flex flex-col gap-4">
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
                className="flex flex-col h-auto py-2.5 size-15"
              >
                <Icon className="size-5" />
                <span>{label}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Titles</CardTitle>
        </CardHeader>
        <CardContent className={"flex-col "}>
          <h3>Title</h3>
          <Input></Input>
          <h3>Subtitle</h3>
          <Input></Input>
        </CardContent>
      </Card>

      <Card>
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle>Options</CardTitle>
          </CardHeader>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle>Canvas</CardTitle>
          </CardHeader>
        </div>
      </Card>
    </div>
  );
}
