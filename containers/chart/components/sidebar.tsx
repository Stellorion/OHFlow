import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Braces, SlidersHorizontal } from "lucide-react";

export function TabsDemo() {
  return (
    <Tabs defaultValue="data" className="w-1/5">
      <TabsList className="w-full">
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
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="design">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports"></TabsContent>
    </Tabs>
  );
}
