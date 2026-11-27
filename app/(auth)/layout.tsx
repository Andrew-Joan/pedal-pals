import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

// Login and register share one frame: header on top, slim footer at the bottom.
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer variant="slim" />
    </div>
  );
}
