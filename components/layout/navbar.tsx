"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { navigation } from "@/constants/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#EFE7E1] bg-[#FAF6F2]/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Logo />

        <nav className="hidden md:flex items-center gap-10">
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

        <button
          className="hidden md:block rounded-full bg-[#E8B4B8] px-6 py-3 text-white transition hover:bg-[#D99CA4]"
        >
          Join Club
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}