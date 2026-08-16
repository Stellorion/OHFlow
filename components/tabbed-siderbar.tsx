"use client";

import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
}

interface TabbedSidebarProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
}

export function TabbedSidebar({
  tabs,
  defaultValue,
  className = "w-full md:w-80",
}: TabbedSidebarProps) {
  const initialTab = defaultValue || tabs[0]?.id;

  return (
    <Tabs defaultValue={initialTab} className={className}>
      <TabsList className="w-full grid grid-flow-col auto-cols-fr">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="gap-2">
            {tab.icon}
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="flex-1 min-h-0 mt-0">
          <Card className="h-full flex flex-col overflow-hidden">
            <CardContent className="flex-1 overflow-y-auto p-4 text-sm text-muted-foreground">
              {tab.content}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}