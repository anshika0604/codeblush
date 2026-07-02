import Link from "next/link";

import { categories } from "@/data/categories";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] py-32">

      {/* Background decoration */}
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-[#E8B4B8]/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#BFC9BE]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">

          <p className="font-script text-4xl text-[#D99CA4]">
            Discover Your Path
          </p>

          <h2 className="mt-4 font-playfair text-4xl text-[#2E2A27] md:text-5xl lg:text-6xl">
            Explore Categories
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B625D]">
            From cozy coding inspiration to career growth,
            discover beautifully curated content designed
            for women building careers in tech.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {categories.map((category) => (
            <Link
    key={category.slug}
    href={`/categories/${category.slug}`}
    className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-[#EFE7E1]
      bg-white
      p-10
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#E8B4B8]
      hover:shadow-[0_20px_60px_rgba(217,156,164,0.15)]
      block
    "
  >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#E8B4B8]/10 blur-3xl" />
              </div>

              {/* Top Accent */}
              <div className="mb-8 h-1 w-16 rounded-full bg-[#D99CA4]" />

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF6F2] text-4xl shadow-sm">
                {category.emoji}
              </div>

              {/* Content */}
              <h3 className="mt-8 font-playfair text-3xl text-[#2E2A27]">
                {category.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#6B625D]">
                {category.description}
              </p>

              {/* CTA */}
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#D99CA4]">

                Explore

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}