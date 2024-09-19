'use client';
import { Calendar, CheckList, Header } from '@/features/Top/components';

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex h-screen w-full flex-col">
        <Header />
        <Calendar />
        <CheckList />
      </div>
    </main>
  );
}
