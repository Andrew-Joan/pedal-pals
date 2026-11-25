"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { AuthCard } from "@/components/account/AuthCard";
import { FormField } from "@/components/shared/FormField";
import { Button } from "@/components/shared/Button";

export function CreateAccountCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthCard
      id="create-account"
      title="Create Account"
      doodle="scribble-1"
      icon={<UserPlus className="h-8 w-8" strokeWidth={1.5} />}
      footer={
        <p>
          Already have an account?{" "}
          <Link
            href="/account"
            className="font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
          >
            Login instead
          </Link>
        </p>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <FormField
          id="signup-name"
          label="Full Name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
        />
        <FormField
          id="signup-email"
          label="Email Address"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
        />
        <FormField
          id="signup-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Create a password"
          hint="Minimum 8 characters • include a number & symbol"
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
        <FormField
          id="signup-confirm-password"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Re-enter password"
          trailing={
            <button
              type="button"
              onClick={() => setShowConfirmPassword((value) => !value)}
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
              className="cursor-pointer rounded-full p-2 text-ink/60 transition-colors hover:text-ink"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          }
        />

        <label className="flex cursor-pointer items-start gap-2 font-sans text-sm text-ink/80">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-brand-amber"
          />
          <span>
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
            >
              Terms
            </Link>{" "}
            &amp;{" "}
            <Link
              href="/privacy"
              className="font-semibold text-brand-amber underline underline-offset-4 hover:text-ink"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        <Button type="submit" variant="ink" size="lg" className="w-full">
          Sign Up
        </Button>
      </form>
    </AuthCard>
  );
}
