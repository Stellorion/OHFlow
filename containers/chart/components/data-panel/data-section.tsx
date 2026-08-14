"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChartStore } from "../../store/use-chart-store";

export default function DataSection() {
  const addRow = useChartStore((state) => state.addRow);
  const removeRow = useChartStore((state) => state.removeRow);
  const updateCell = useChartStore((state) => state.updateCell);

  const series = useChartStore((state) => state.series);
  const data = useChartStore((state) => state.data);

  return (
    <Card>
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>Data</CardTitle>
        </CardHeader>
        <Button
          onClick={() => addRow()}
          variant="ghost"
          size="sm"
          className="mr-3"
        >
          <Plus />
          Row
        </Button>
      </div>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>

                {series.map((s) => (
                  <TableHead key={s.id} className="min-w-25">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="size-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="truncate">{s.label}</span>
                    </div>
                  </TableHead>
                ))}

                <TableHead className="w-12.5 text-right" />
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger>
                        <Input
                          value={row.category ?? ""}
                          onChange={(e) =>
                            updateCell(row.id, "category", e.target.value)
                          }
                          className="w-18 h-8 text-sm"
                          placeholder="Category"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{row.category}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>

                  {series.map((s) => (
                    <TableCell key={s.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Input
                            type="number"
                            value={row[s.id] ?? 0}
                            onChange={(e) =>
                              updateCell(
                                row.id,
                                s.id,
                                e.target.value === ""
                                  ? ""
                                  : Number(e.target.value),
                              )
                            }
                            className="h-8 text-sm font-mono"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{row[s.id] ?? 0}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>
                  ))}

                  <TableCell>
                    <Button
                      onClick={() => removeRow(row.id)}
                      variant="ghost"
                      size="icon"
                      className="hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
