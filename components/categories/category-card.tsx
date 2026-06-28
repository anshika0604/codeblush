import Image from "next/image";
import Link from "next/link";

interface Props {
  category: {
    title: string;
    slug: string;
    image: string;
    emoji: string;
    description: string;
  };
}

export function CategoryCard({
  category,
}: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group"
    >
      <article
        className="
          overflow-hidden
          rounded-[30px]
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

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={category.image}
            alt={category.title}
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

        <div className="p-7">

          <div
            className="
              inline-flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#FAF6F2]
              text-xl
            "
          >
            {category.emoji}
          </div>

          <h2
            className="
              mt-5
              font-playfair
              text-3xl
              text-[#2E2A27]
            "
          >
            {category.title}
          </h2>

          <p
            className="
              mt-4
              leading-8
              text-[#6B625D]
            "
          >
            {category.description}
          </p>

          <div
            className="
              mt-6
              text-sm
              font-medium
              text-[#D99CA4]
            "
          >
            Explore →
          </div>

        </div>

      </article>
    </Link>
  );
}