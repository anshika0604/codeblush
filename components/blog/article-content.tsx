import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
  image: string;
  title: string;
}

export function ArticleContent({
  content,
  image,
  title,
}: Props) {
  return (
    <section
      className="
        mx-auto
        max-w-6xl
        px-6
        pb-32
      "
    >
      <article
        className=" article-content
          prose
    prose-lg
    lg:prose-xl
    max-w-none

    prose-headings:font-playfair
    prose-headings:text-[#2E2A27]

    prose-h2:text-4xl
    prose-h2:mt-20
    prose-h2:mb-8
    prose-h2:font-semibold

    prose-h3:text-3xl
    prose-h3:mt-14

    prose-p:text-[#4F4843]
    prose-p:leading-[2]
    prose-p:text-[1.15rem]

    prose-strong:text-[#2E2A27]
    prose-strong:font-semibold

    prose-blockquote:border-l-4
    prose-blockquote:border-[#D99CA4]
    prose-blockquote:bg-[#FFF8F7]
    prose-blockquote:px-8
    prose-blockquote:py-6
    prose-blockquote:rounded-r-2xl
    prose-blockquote:italic
    prose-blockquote:text-xl

    prose-li:text-[#4F4843]

    prose-a:text-[#D99CA4]
        "
      >

        <Image
          src={image}
          alt={title}
          width={450}
          height={675}
          priority
          className="
            float-left
            mr-12
            mb-8

            w-[340px]
            md:w-[380px]
            lg:w-[420px]

            rounded-[32px]
            border
            border-[#EFE7E1]
            bg-white
            p-2

            shadow-[0_25px_90px_rgba(0,0,0,0.08)]
          "
        />

<ReactMarkdown>
    {content}
  </ReactMarkdown>
      </article>
      <div className="mt-16 text-center">
  <div className="mx-auto h-px w-32 bg-[#E8B4B8]" />

  <p className="px-2 mt-10 font-playfair text-3xl text-[#2E2A27]">
    Thank you for reading ♡
  </p>

  <p className="mt-4 text-[#6B625D]">
    If this resonated with you, follow CodeBlush for more
    cozy coding inspiration.
  </p>
</div>
    </section>
  );
}