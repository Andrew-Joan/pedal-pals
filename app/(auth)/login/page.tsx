import type { Metadata } from "next";
import { AuthHero } from "@/components/auth/AuthHero";
import { LoginCard } from "@/components/auth/LoginCard";

export const metadata: Metadata = {
  title: "Login | Pedal Pals",
  description:
    "Log in to your Pedal Pals account to track orders, save addresses, and join the community.",
};

export default function LoginPage() {
  return (
    <AuthHero
      title="MY ACCOUNT"
      subtitle="Welcome back, rider!"
      image="/images/auth-login.jpg"
      imageAlt="Pedal Pals riders on a forest trail at sunset"
    >
      <LoginCard />
    </AuthHero>
  );
}
