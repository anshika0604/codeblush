import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post } from "@/types/post";

interface Props {
  posts: Post[];
}

export function ProductAlternatives({
  posts,
}: Props) {
  return (
    <section className="bg-[#FFFDFC] py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Keep Exploring ♡
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-[#2E2A27]">
            More Setup Guides
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B625D]">
            Discover more beautifully curated recommendations
            for developers building their dream workspace.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {posts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >

              <article
                className="
                  h-full
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

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>

                <div className="p-7">

                  <span
                    className="
                      rounded-full
                      bg-[#FAF6F2]
                      px-3
                      py-1
                      text-xs
                      text-[#D99CA4]
                    "
                  >
                    {post.category}
                  </span>

                  <h3
                    className="
                      mt-5
                      font-playfair
                      text-2xl
                      text-[#2E2A27]
                    "
                  >
                    {post.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      leading-7
                      text-[#6B625D]
                    "
                  >
                    {post.excerpt}
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      font-medium
                      text-[#D99CA4]
                    "
                  >
                    View Guide

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
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