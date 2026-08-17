import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
}

export interface TabbedSidebarProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
}