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
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChartData } from "../../hooks/use-chart-data";

export default function DataSection() {
  const { data, series, addRow, removeRow, updateCell } = useChartData();

  return (
    <Card className="pb-0">
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
      <CardContent className="px-0">
        <div className="rounded-md border-t">
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
                    <Input
                      value={row.category ?? ""}
                      onChange={(e) =>
                        updateCell(row.id, "category", e.target.value)
                      }
                      className="w-18 h-8 text-sm"
                      placeholder="Category"
                    />
                  </TableCell>

                  {series.map((s) => (
                    <TableCell key={s.id}>
                      <Input
                        type="number"
                        value={row[s.id] ?? 0}
                        onChange={(e) =>
                          updateCell(
                            row.id,
                            s.id,
                            e.target.value === "" ? "" : Number(e.target.value),
                          )
                        }
                        className="h-8 text-sm font-mono"
                      />
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
