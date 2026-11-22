"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";

interface FooterProps {
  variant?: "slim" | "full";
}

export function Footer({ variant = "slim" }: FooterProps) {
  if (variant === "slim") {
    return (
      <footer className="bg-ink text-cream/70 py-6 border-t border-cream/10 text-xs sm:text-sm">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Pedal Pals. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-brand-amber transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-amber transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/faq"
              className="hover:text-brand-amber transition-colors"
            >
              Help Center
            </Link>
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="bg-ink text-cream pt-16 pb-8 border-t border-cream/10">
      <Container>
        <div className="bg-ink-soft rounded-2xl p-8 sm:p-12 mb-16 border border-cream/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide">
              Join the Pedal Pals community
            </h3>
            <p className="text-cream/80 text-sm sm:text-base mt-2">
              Get weekly ride routes, gear drops, and workshop tips straight to
              your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-ink border border-cream/20 rounded-full px-5 py-3 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-brand-amber min-w-65"
            />
            <Button variant="amber" type="submit">
              Subscribe →
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 font-sans">
          <div>
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase mb-4 text-brand-amber">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <Link
                  href="/shop?category=bikes"
                  className="hover:text-brand-amber transition-colors"
                >
                  Bikes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=components"
                  className="hover:text-brand-amber transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=accessories"
                  className="hover:text-brand-amber transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=apparel"
                  className="hover:text-brand-amber transition-colors"
                >
                  Apparel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase mb-4 text-brand-amber">
              About
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-amber transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-amber transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-brand-amber transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-amber transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase mb-4 text-brand-amber">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-brand-amber transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-brand-amber transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-brand-amber transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="hover:text-brand-amber transition-colors"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase mb-4 text-brand-amber">
              Connect
            </h4>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-ink-soft border border-cream/10 flex items-center justify-center hover:text-brand-amber transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-ink-soft border border-cream/10 flex items-center justify-center hover:text-brand-amber transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-ink-soft border border-cream/10 flex items-center justify-center hover:text-brand-amber transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-cream/60">
              123 Cycling Ave, Jakarta, Indonesia
              <br />
              info@pedalpals.id
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© 2026 Pedal Pals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-brand-amber transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-amber transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
