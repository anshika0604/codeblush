import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { posts } from "@/data/posts";

export function FeaturedArticles() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#E8B4B8]/10 blur-3xl" />

      <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-[#BFC9BE]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">

          <p className="font-script text-4xl text-[#D99CA4]">
            Latest Inspiration
          </p>

          <h2 className="mt-4 font-playfair text-4xl text-[#2E2A27] md:text-5xl lg:text-6xl">
            Featured Articles
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B625D]">
            Thoughtfully curated stories, productivity tips,
            coding insights, and inspiration for women
            building beautiful careers in tech.
          </p>

        </div>

        {/* Articles Grid */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {posts.map((posts) => (
            <Link
              href={`/blog/${posts.slug}`}
              key={posts.slug}
              className="group"
            >

              <article
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#EFE7E1]
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E8B4B8]
                  hover:shadow-[0_20px_60px_rgba(217,156,164,0.15)]
                "
              >

                {/* Image */}
                <div className="relative aspect-[2/3] overflow-hidden">

                  <Image
                    src={posts.image}
                    alt={posts.title}
                    fill
                    className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>

                {/* Content */}
                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <span
                      className="
                        rounded-full
                        bg-[#FAF6F2]
                        px-4
                        py-1
                        text-xs
                        font-medium
                        text-[#D99CA4]
                      "
                    >
                      {posts.category}
                    </span>

                    <span className="text-sm text-[#6B625D]">
                      {posts.readTime}
                    </span>

                  </div>

                  <h3
                    className="
                      mt-6
                      font-playfair
                      text-3xl
                      leading-tight
                      text-[#2E2A27]
                    "
                  >
                    {posts.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[#6B625D]">
                    {posts.excerpt}
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[#D99CA4]
                    "
                  >
                    Read Article

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </article>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}