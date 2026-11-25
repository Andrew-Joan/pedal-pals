import { Header } from "@/components/shared/Header";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
