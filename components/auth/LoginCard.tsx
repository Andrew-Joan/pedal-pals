"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { PasswordField } from "@/components/auth/PasswordField";
import { FormField } from "@/components/shared/FormField";
import { Button } from "@/components/shared/Button";
import { routes } from "@/lib/routes";

export function LoginCard() {
  return (
    <AuthCard
      title="Login"
      frame="login"
      doodle="star-1"
      icon={<User className="h-8 w-8" strokeWidth={1.5} />}
      footer={
        <p>
          New to Pedal Pals?{" "}
          <Link
            href={routes.register}
            className="font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
          >
            Create an account
          </Link>{" "}
          to track orders and more.
        </p>
      }
    >
      {/* Not connected yet. Submitting is wired up when Auth.js is added. */}
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <FormField
          id="login-email"
          label="Email Address"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
        />
        <PasswordField
          id="login-password"
          label="Password"
          autoComplete="current-password"
          placeholder="Your password"
        />

        <div className="flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-2 font-sans text-sm text-ink/80">
            <input type="checkbox" className="h-4 w-4 accent-brand-amber" />
            Remember me
          </label>
          <button
            type="button"
            className="cursor-pointer font-sans text-sm font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          variant="ink"
          size="lg"
          className="w-full rounded-md"
        >
          Login
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-ink/80" />
        <span className="font-sans text-xs uppercase tracking-wide">
          or continue with
        </span>
        <span className="h-px flex-1 bg-ink/80" />
      </div>

      <GoogleButton />
    </AuthCard>
  );
}
