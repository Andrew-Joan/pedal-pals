"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { cn } from "cn";
import { routes } from "@/lib/routes";

const navItems = [
  { label: "Shop", href: routes.shop },
  { label: "Brands", href: routes.brands },
  { label: "Services", href: routes.services },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const wishlistCount = 3;
  const cartCount = 2;

  return (
    <header className="bg-ink text-cream sticky top-0 z-50 border-b border-cream/10">
      <Container className="flex items-center justify-between h-20">
        <Link href={routes.home} className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-brand-amber -rotate-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 18L4 8L9 12L12 4L15 12L20 8L22 18H2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-display text-2xl tracking-wider text-cream group-hover:text-brand-amber transition-colors">
                PEDAL PALS
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative py-2 transition-colors hover:text-brand-amber",
                  isActive ? "text-brand-amber font-semibold" : "text-cream/90",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.75 bg-brand-amber rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="text-cream/90 hover:text-brand-amber transition-colors p-1 cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link
            href={routes.wishlist}
            aria-label="Wishlist"
            className="relative text-cream/90 hover:text-brand-amber transition-colors p-1"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-heart text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            href={routes.account}
            aria-label="Account"
            className="text-cream/90 hover:text-brand-amber transition-colors p-1"
          >
            <User className="w-5 h-5" />
          </Link>

          <Link
            href={routes.cart}
            aria-label="Cart"
            className="relative text-cream/90 hover:text-brand-amber transition-colors p-1"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-amber text-ink text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream/90 hover:text-brand-amber transition-colors p-1 ml-2 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden bg-ink-soft border-t border-cream/10 py-4 px-6">
          <nav className="flex flex-col gap-4 font-sans text-base">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-1 transition-colors hover:text-brand-amber",
                    isActive
                      ? "text-brand-amber font-semibold"
                      : "text-cream/90",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
