"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function TitleSection() {
  return (
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
  );
}
