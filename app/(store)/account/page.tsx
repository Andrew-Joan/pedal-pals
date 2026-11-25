import type { Metadata } from "next";
import { AccountHero } from "@/components/account/AccountHero";
import { LoginCard } from "@/components/account/LoginCard";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Login | Pedal Pals",
  description:
    "Log in to your Pedal Pals account to track orders, save addresses, and join the community.",
};

export default function AccountPage() {
  return (
    <>
      <AccountHero
        image="/images/auth-login.jpg"
        imageAlt="Pedal Pals rider at sunset"
      >
        <div className="mx-auto w-full max-w-lg">
          <LoginCard />
        </div>
      </AccountHero>
      <Footer variant="slim" />
    </>
  );
}
