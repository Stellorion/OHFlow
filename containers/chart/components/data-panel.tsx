"use client";

import SeriesSection from "./data-panel/series-section";
import DataSection from "./data-panel/data-section";

export default function DataPanel() {
  return (
    <div className="flex flex-col gap-4">
      <SeriesSection />
      <DataSection />
    </div>
  );
}
