"use client";

import GraphPreview from "@/containers/chart/components/chart-preview";
import { Sidebar } from "@/containers/chart/components/sidebar";

export default function ChartBarMultiple() {
  return (
    <div className="flex gap-5 px-5 pt-5 h-[calc(100vh-5rem)]">
      <Sidebar />
      <GraphPreview />
    </div>
  );
}
