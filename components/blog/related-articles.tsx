import Link from "next/link";
import Image from "next/image";

import { posts } from "@/data/posts";
import { getPostContent } from "@/lib/posts";

interface Props {
  currentSlug: string;
}

export function RelatedArticles({
  currentSlug,
}: Props) {

  const relatedArticles = posts
    .filter(
      (article) =>
        article.slug !== currentSlug
    )
    .slice(0, 3)
    .map((article) => {
        const { readTime } =
          getPostContent(article.slug);
    
        return {
          ...article,
          readTime,
        };
      });;

  return (
    
    <section className="pt-10 pb-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">

  <div className="mx-auto mb-8 h-px w-24 bg-[#E8B4B8]" />

  <p
    className="
      font-script
      text-5xl
      text-[#D99CA4]
    "
  >
    Keep Exploring ♡
  </p>

  <h2
    className="
      mt-4
      font-playfair
      text-3xl
      md:text-4xl
      text-[#2E2A27]
    "
  >
    More Stories You'll Love
  </h2>

  <p
    className="
      mx-auto
      mt-5
      max-w-xl
      text-base
      leading-relaxed
      text-[#6B625D]
    "
  >
    Thoughtfully curated articles on coding,
    productivity, cozy workspaces, and building
    a beautiful career in tech.
  </p>

</div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {relatedArticles.map((article) => (
            <Link
              href={`/blog/${article.slug}`}
              key={article.slug}
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
                <div className="relative aspect-[5/4] overflow-hidden">

                  <Image
                    src={article.image}
                    alt={article.title}
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
                <div className="p-5">

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#FAF6F2]
                      px-3
                      py-1
                      text-xs
                      text-[#D99CA4]
                    "
                  >
                    {article.category}
                  </span>

                  <h3
                    className="
                      mt-3
    font-playfair
    text-xl
    leading-snug
    text-[#2E2A27]
                    "
                  >
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#6B625D]">
                    {article.readTime}
                  </p>

                </div>

              </article>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}