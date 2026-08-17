"use client";

import { Button } from "@/components/ui/button";
import { MobileViewNavProps } from "@/types/nav";

export default function MobileViewNav<T extends string>({
  items,
  activeTab,
  onTabChange,
  className = "",
}: MobileViewNavProps<T>) {
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 lg:hidden w-full p-2 bg-background border-t z-50 grid grid-cols-${items.length} ${className}`}
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
    >
      {items.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <Button
            key={item.id}
            variant={isActive ? "default" : "ghost"}
            className="flex flex-col items-center gap-1 h-auto py-2"
            onClick={() => onTabChange(item.id)}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Button>
        );
      })}
    </nav>
  );
}