export type LayoutType = "preview" | "controls";

export interface LayoutStore {
  activeTab: "preview" | "controls";
  setActiveTab: (tab: "preview" | "controls") => void;
}
