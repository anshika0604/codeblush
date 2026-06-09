"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Categories", href: "/categories" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "border-b border-[#EFE7E1] bg-[#FAF6F2]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group">
            <h2 className="font-playfair text-4xl text-[#2E2A27] transition">
              CodeBlush
            </h2>

            <p className="text-sm text-[#D99CA4]">
              romanticizing coding life
            </p>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group
                    relative
                    text-lg 
                    font-medium
                    text-[#2E2A27]
                    transition
                    hover:text-[#D99CA4]"
              >
                {item.name}
                <span
                    className="
                    absolute
                    -bottom-2
                    left-0
                    h-[1px]
                    w-0
                    bg-[#D99CA4]
                    transition-all
                    duration-300
                    group-hover:w-full
                    "
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Button
            className="
              rounded-full
              bg-[#E8B4B8]
              px-8
              hover:bg-[#D99CA4]
            "
          >
            Join Club
          </Button>
        </div>
      </Container>
    </header>
  );
}