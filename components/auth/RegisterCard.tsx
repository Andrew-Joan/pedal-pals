"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { PasswordField } from "@/components/auth/PasswordField";
import { FormField } from "@/components/shared/FormField";
import { Button } from "@/components/shared/Button";
import { routes } from "@/lib/routes";

const linkClass =
  "font-semibold text-brand-amber underline underline-offset-4 hover:text-ink";

export function RegisterCard() {
  return (
    <AuthCard
      title="Create Account"
      frame="register"
      doodle="scribble-1"
      icon={<UserPlus className="h-8 w-8" strokeWidth={1.5} />}
      footer={
        <p>
          Already have an account?{" "}
          <Link href={routes.login} className={linkClass}>
            Login instead
          </Link>
        </p>
      }
    >
      {/* Not connected yet. Submitting is wired up when Auth.js is added. */}
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
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
        <PasswordField
          id="signup-password"
          label="Password"
          autoComplete="new-password"
          placeholder="Create a password"
          hint="Minimum 8 characters • include a number & symbol"
        />
        <PasswordField
          id="signup-confirm-password"
          label="Confirm Password"
          autoComplete="new-password"
          placeholder="Re-enter password"
        />

        <label className="flex cursor-pointer items-start gap-2 font-sans text-sm text-ink/80">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-brand-amber"
          />
          <span>
            I agree to the{" "}
            <Link href={routes.terms} className={linkClass}>
              Terms
            </Link>{" "}
            &amp;{" "}
            <Link href={routes.privacy} className={linkClass}>
              Privacy Policy
            </Link>
          </span>
        </label>

        <Button
          type="submit"
          variant="ink"
          size="lg"
          className="w-full rounded-md"
        >
          Sign Up
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-ink/80" />
        <span className="font-sans text-xs uppercase tracking-wide">
          or sign up with
        </span>
        <span className="h-px flex-1 bg-ink/80" />
      </div>

      <GoogleButton label="Sign up with Google" />
    </AuthCard>
  );
}
