import { wallpapers } from "@/data/wallpapers";
import { WallpaperCard } from "@/components/resources/wallpaper-card";

export default function WallpapersPage() {
  return (
    <main className="pt-40 pb-28">

      <section className="mx-auto max-w-5xl px-6 text-center">

        <p className="font-script text-5xl text-[#D99CA4]">
          Cozy Collection
        </p>

        <h1 className="mt-4 font-playfair text-6xl text-[#2E2A27]">
          Developer Wallpapers
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-[#6B625D]
          "
        >
          A collection of aesthetic wallpapers designed to make your coding
          workspace feel calm, inspiring, and uniquely yours.
        </p>

      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {wallpapers.map((wallpaper) => (
            <WallpaperCard
              key={wallpaper.slug}
              wallpaper={wallpaper}
            />
          ))}

        </div>

      </section>

    </main>
  );
}