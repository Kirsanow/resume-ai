import { Sidebar } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className={`flex-1`}>{children}</main>
    </div>
  );
}
