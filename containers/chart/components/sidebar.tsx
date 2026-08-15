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
    <Tabs defaultValue="data" className="w-[20%]">

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

      <TabsContent value="data" className="flex-1 min-h-0 mt-0">
        <Card className="h-full flex flex-col overflow-hidden">
          <CardContent className="overflow-y-auto p-4">
            <DataPanel />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="design" className="flex-1 min-h-0 mt-0">
        <Card className="h-full flex flex-col overflow-hidden">
          <CardContent className="flex-1 overflow-y-auto p-4 text-sm text-muted-foreground">
            <DesignPanel />
          </CardContent>
        </Card>
      </TabsContent>
      
    </Tabs>
  );
}
