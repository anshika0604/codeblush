import Image from "next/image";

interface Props {
  wallpaper: {
    title: string;
    image: string;
    resolution: string;
    tags: string[];
  };
}

export function WallpaperCard({ wallpaper }: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-[#EFE7E1]
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(217,156,164,0.18)]
      "
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={wallpaper.image}
          alt={wallpaper.title}
          fill
          className="
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <h2 className="font-playfair text-2xl text-[#2E2A27]">
          {wallpaper.title}
        </h2>

        <p className="mt-2 text-sm text-[#8A817C]">
          {wallpaper.resolution}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {wallpaper.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-[#FAF6F2]
                px-3
                py-1
                text-xs
                text-[#D99CA4]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={wallpaper.image}
          download
          className="
            mt-6
            inline-flex
            rounded-full
            bg-[#D99CA4]
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-[#C78A92]
          "
        >
          Download Wallpaper
        </a>
      </div>
    </article>
  );
}