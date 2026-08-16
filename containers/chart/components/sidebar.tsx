"use client";

import { Braces, SlidersHorizontal } from "lucide-react";
import DataPanel from "./data-panel";
import DesignPanel from "./design-panel";
import { TabbedSidebar, TabItem } from "@/components/tabbed-siderbar";

const SIDEBAR_TABS: TabItem[] = [
  {
    id: "data",
    label: "Data",
    icon: <Braces className="size-4" />,
    content: <DataPanel />,
  },
  {
    id: "design",
    label: "Design",
    icon: <SlidersHorizontal className="size-4" />,
    content: <DesignPanel />,
  },
];

export function Sidebar() {
  return <TabbedSidebar tabs={SIDEBAR_TABS} defaultValue="data" className="w-[20%]" />;
}