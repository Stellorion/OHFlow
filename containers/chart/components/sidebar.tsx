import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Braces, SlidersHorizontal } from "lucide-react";
import DataPanel from "./data-panel";
import DesignPanel from "./design-panel";

export function Sidebar() {
  return (
    <Tabs defaultValue="data" className="max-w-2/9">
      <TabsList className={"w-full"}>
        <TabsTrigger value="data">
          <Braces />
          Data
        </TabsTrigger>
        <TabsTrigger value="design">
          <SlidersHorizontal />
          Design
        </TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <Card className="h-full">
          <CardContent className="text-sm text-muted-foreground">
            <DataPanel />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="design">
        <Card className="h-full">
          <CardContent className="text-sm text-muted-foreground">
            <DesignPanel />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports"></TabsContent>
    </Tabs>
  );
}
