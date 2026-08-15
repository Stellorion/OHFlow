"use client";

import TypeSection from "./design-panel/type-section";
import TitleSection from "./design-panel/title-section";
import OptionSection from "./design-panel/option-section";
import CanvasSection from "./design-panel/canvas-section";

export default function DesignPanel() {
  return (
    <div className="flex flex-col gap-4">
      <TypeSection />
      <TitleSection />
      <OptionSection />
      <CanvasSection />
    </div>
  );
}
