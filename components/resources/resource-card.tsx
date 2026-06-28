import Link from "next/link";

interface Props {
  resource: {
    slug: string;
    title: string;
    icon: string;
    description: string;
    comingSoon: boolean;
  };
}

export function ResourceCard({ resource }: Props) {
  return (
    <Link
      href={
  resource.slug === "wallpapers"
    ? "/resources/wallpapers"
    : "#"
}
      className="group"
    >
      <article
        className="
          rounded-[28px]
          border
          border-[#EFE7E1]
          bg-white
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#E8B4B8]
          hover:shadow-[0_20px_60px_rgba(217,156,164,0.15)]
        "
      >
        <div className="text-5xl">
          {resource.icon}
        </div>

        <h2
          className="
            mt-6
            font-playfair
            text-2xl
            text-[#2E2A27]
          "
        >
          {resource.title}
        </h2>

        <p
          className="
            mt-4
            leading-7
            text-[#6B625D]
          "
        >
          {resource.description}
        </p>

        {resource.comingSoon && (
          <span
            className="
              mt-6
              inline-flex
              rounded-full
              bg-[#FAF6F2]
              px-4
              py-2
              text-xs
              tracking-wide
              text-[#D99CA4]
            "
          >
            Coming Soon
          </span>
        )}
      </article>
    </Link>
  );
}