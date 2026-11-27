import type { Metadata } from "next";
import { AuthHero } from "@/components/auth/AuthHero";
import { RegisterCard } from "@/components/auth/RegisterCard";

export const metadata: Metadata = {
  title: "Create Account | Pedal Pals",
  description:
    "Create a Pedal Pals account to track orders, save addresses, and join the community.",
};

export default function RegisterPage() {
  return (
    <AuthHero
      title="JOIN US"
      subtitle="Create your account and ride with us."
      image="/images/auth-register.jpg"
      imageAlt="Pedal Pals community riding together"
    >
      <RegisterCard />
    </AuthHero>
  );
}
