import type { Metadata } from "next";
import { AccountHero } from "@/components/account/AccountHero";
import { CreateAccountCard } from "@/components/account/CreateAccountCard";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Create Account | Pedal Pals",
  description:
    "Create a Pedal Pals account to track orders, save addresses, and join the community.",
};

export default function RegisterPage() {
  return (
    <>
      <AccountHero
        title="JOIN US"
        subtitle="Create your account and ride with us."
        image="/images/auth-register.jpg"
        imageAlt="Pedal Pals community riding together"
      >
        <div className="mx-auto w-full max-w-lg">
          <CreateAccountCard />
        </div>
      </AccountHero>
      <Footer variant="slim" />
    </>
  );
}
