import { ReactNode } from "react";

export interface MobileNavItem<T extends string> {
  id: T;
  label: string;
  icon: ReactNode;
}

export interface MobileViewNavProps<T extends string> {
  items: readonly MobileNavItem<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  className?: string;
}