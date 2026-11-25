"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User } from "lucide-react";
import { AuthCard } from "@/components/account/AuthCard";
import { GoogleButton } from "@/components/account/GoogleButton";
import { FormField } from "@/components/shared/FormField";
import { Button } from "@/components/shared/Button";

export function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthCard
      id="login"
      title="Login"
      doodle="star-1"
      icon={<User className="h-8 w-8" strokeWidth={1.5} />}
      footer={
        <p>
          New to Pedal Pals?{" "}
          <Link
            href="/account/register"
            className="font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
          >
            Create an account
          </Link>{" "}
          to track orders and more.
        </p>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <FormField
          id="login-email"
          label="Email Address"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
        />
        <FormField
          id="login-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Your password"
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="cursor-pointer rounded-full p-2 text-ink/60 transition-colors hover:text-ink"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          }
        />

        <div className="flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-2 font-sans text-sm text-ink/80">
            <input
              type="checkbox"
              className="h-4 w-4 accent-brand-amber"
            />
            Remember me
          </label>
          <button
            type="button"
            className="cursor-pointer font-sans text-sm font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" variant="ink" size="lg" className="w-full rounded-md">
          Login
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-ink/15" />
        <span className="font-sans text-xs uppercase tracking-wide text-ink/50">
          or continue with
        </span>
        <span className="h-px flex-1 bg-ink/15" />
      </div>

      <GoogleButton />
    </AuthCard>
  );
}
