"use client";

import MobileViewNav from "@/components/mobile/mobile-view-nav";
import { useLayoutStore } from "@/store/use-layout-store";
import { SlidersHorizontal, View } from "lucide-react";

import ChartPreview from "@/containers/chart/components/chart-preview";
import { Sidebar } from "@/containers/chart/components/sidebar";

const NAV_ITEMS = [
  { id: "preview", label: "Preview", icon: <View className="h-4 w-4" /> },
  { id: "controls", label: "Controls", icon: <SlidersHorizontal className="h-4 w-4" /> },
] as const;

export default function ChartLandingPage() {
  const activeTab = useLayoutStore((state) => state.activeTab)
  const setActiveTab = useLayoutStore((state) => state.setActiveTab);

  return (
    <div className="flex gap-5 px-5 pt-5 h-[calc(100vh-5rem)]">
      <div className={`w-full lg:w-[20%] overflow-y-auto pb-18 lg:pb-0 ${activeTab === "controls" ? "block" : "hidden lg:block"}`}>
        <Sidebar />
      </div>
      <div className={`w-full flex-1 overflow-y-auto pb-18 lg:pb-0 ${activeTab === "preview" ? "block" : "hidden lg:block"}`}>
        <ChartPreview />
      </div>
      <MobileViewNav
        items={NAV_ITEMS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}
