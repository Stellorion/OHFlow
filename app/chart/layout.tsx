'use client';

import { ReactNode } from 'react';
import { TabsDemo } from '@/containers/chart/components/sidebar';

export default function ChartLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-5 pt-5 h-[calc(100vh-6rem)]">
      <TabsDemo />
      <main className="flex-1 pl-8">
        {children}
      </main>
    </div>
  );
}