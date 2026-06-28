import { notFound } from "next/navigation";

import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/blog/blog-card";
import { getPostContent } from "@/lib/posts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = categories.find(
    (c) => c.slug === slug
  );

  if (!category) {
    notFound();
  }

  const filteredPosts = posts.filter(
    (post) => post.categorySlug === slug
  );

  return (
    <main className="pt-40 pb-28">

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 text-center">

        <p className="font-script text-5xl text-[#D99CA4]">
          {category.emoji} {category.title}
        </p>

        <h1
          className="
            mt-5
            font-playfair
            text-5xl
            md:text-6xl
            text-[#2E2A27]
          "
        >
          {category.title}
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[#6B625D]
          "
        >
          {category.description}
        </p>

      </section>

      {/* Divider */}

      <div className="mx-auto mt-20 mb-20 h-px max-w-6xl bg-[#EFE7E1]" />

      {/* Posts */}

      <section className="mx-auto max-w-7xl px-6">

        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center">

            <p className="font-playfair text-3xl text-[#2E2A27]">
              Articles coming soon ♡
            </p>

            <p className="mt-4 text-[#6B625D]">
              I'm currently writing more stories for this category.
            </p>

          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {filteredPosts.map((post) => {
              const { readTime } = getPostContent(post.slug);

              return (
                <BlogCard
                  key={post.slug}
                  post={{
                    ...post,
                    readTime,
                  }}
                />
              );
            })}

          </div>
        )}

      </section>

    </main>
  );
}