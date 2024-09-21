'use client';
import { Calendar, CheckItemList, Header } from '@/features/Top/components';

export default function Home() {
  return (
    <main>
      <div className="flex h-screen w-full flex-col p-4">
        <Header />
        <Calendar />
        <CheckItemList />
      </div>
    </main>
  );
}
