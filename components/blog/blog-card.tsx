import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    readTime?: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
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
          hover:shadow-xl
        "
      >
        <div className="relative aspect-[2/3] overflow-hidden">

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

        <div className="p-8">

          <span
            className="
              rounded-full
              bg-[#FAF6F2]
              px-4
              py-1
              text-xs
              text-[#D99CA4]
            "
          >
            {post.category}
          </span>

          <h3 className="mt-6 font-playfair text-3xl">
            {post.title}
          </h3>

          <p className="mt-4 text-[#6B625D]">
            {post.excerpt}
          </p>

          <p className="mt-6
    text-sm
    uppercase
    tracking-wider
    text-[#D99CA4]">
            {post.readTime}
          </p>

        </div>
      </article>
    </Link>
  );
}