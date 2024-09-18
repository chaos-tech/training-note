'use client';
import { Calendar, CheckList, Header } from '@/features/Top/components';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-4">
      <div className="w-full">
        <Header />
        <Calendar />
        <CheckList />
      </div>
    </main>
  );
}
