import Image from "next/image";

interface Props {
  post: {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    readTime: string;
    publishedAt: string;
  };
}

export function ArticleHero({ post }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#E8B4B8]/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Category */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#E8B4B8]/10
            px-5
            py-2
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#D99CA4]" />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#D99CA4]
            "
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="
            mt-8
            font-playfair
            text-4xl
            leading-tight
            text-[#2E2A27]
            md:text-5xl
            lg:text-6xl
          "
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-xl
            leading-relaxed
            text-[#6B625D]
          "
        >
          {post.excerpt}
        </p>

        {/* Meta */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
            text-sm
            uppercase
            tracking-widest
            text-[#8A817C]
          "
        >
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{post.publishedAt}</span>
        </div>

      </div>
    </section>
  );
}