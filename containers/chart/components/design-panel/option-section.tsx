"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OptionSection() {
  return (
    <Card>
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>Options</CardTitle>
        </CardHeader>
      </div>
    </Card>
  );
}
