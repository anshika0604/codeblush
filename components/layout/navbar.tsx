"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/shared/logo";
import { navigation } from "@/constants/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#EFE7E1]/50 bg-[#FAF6F2]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition hover:text-[#D99CA4]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full bg-[#E8B4B8] px-6 py-3 text-sm text-white transition hover:bg-[#D99CA4]">
            Join Club
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}