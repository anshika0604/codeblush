import Image from "next/image";

interface Props {
  post: any;
}

export function ArticleHero({ post }: Props) {
  return (
    <section className="pt-36">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span
            className="
              rounded-full
              bg-[#FAF6F2]
              px-4
              py-2
              text-sm
              text-[#D99CA4]
            "
          >
            {post.category}
          </span>

          <h1
            className="
              mt-8
              font-playfair
              text-5xl
              md:text-7xl
            "
          >
            {post.title}
          </h1>

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-6
              text-[#6B625D]
            "
          >
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
          </div>

        </div>

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[40px]
          "
        >
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

      </div>

    </section>
  );
}