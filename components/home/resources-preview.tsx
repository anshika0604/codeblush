import Link from "next/link";
import { resources } from "@/data/resources";
import { ArrowRight } from "lucide-react";

export function ResourcesBento() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">

          <p className="font-script text-4xl text-[#D99CA4]">
            Coding Gems
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-[#2E2A27]">
            Popular Resources
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B625D]">
            Discover tools, extensions, learning materials,
            and productivity systems designed to help you
            grow beautifully in tech.
          </p>

        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">

          {/* Featured */}
          <Link
            href={
              resources[0].slug === "wallpapers"
                ? "/resources/wallpapers"
                : "/resources"
            }
            className="group lg:col-span-2"
          >
            <article
              className="
                rounded-[36px]
                border
                border-[#EFE7E1]
                bg-white
                p-10
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(217,156,164,0.15)]
              "
            >
              <div className="text-6xl">
                {resources[0].icon}
              </div>

              <h3 className="mt-8 font-playfair text-4xl text-[#2E2A27]">
                {resources[0].title}
              </h3>

              <p className="mt-4 max-w-lg text-[#6B625D]">
                {resources[0].description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#D99CA4]">
                Explore

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>

            </article>
          </Link>

          {/* Card 2 */}
          <Link href="/resources" className="group">
            <article
              className="
                rounded-[36px]
                border
                border-[#EFE7E1]
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              <div className="text-5xl">
                {resources[1].icon}
              </div>

              <h3 className="mt-6 font-playfair text-3xl">
                {resources[1].title}
              </h3>

              <p className="mt-3 text-[#6B625D]">
                {resources[1].description}
              </p>
            </article>
          </Link>

          {/* Card 3 */}
          <Link href="/resources" className="group">
            <article
              className="
                rounded-[36px]
                border
                border-[#EFE7E1]
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              <div className="text-5xl">
                {resources[2].icon}
              </div>

              <h3 className="mt-6 font-playfair text-3xl">
                {resources[2].title}
              </h3>

              <p className="mt-3 text-[#6B625D]">
                {resources[2].description}
              </p>
            </article>
          </Link>

          {/* Card 4 */}
          <Link href="/resources" className="group">
            <article
              className="
                rounded-[36px]
                border
                border-[#EFE7E1]
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              <div className="text-5xl">
                {resources[3].icon}
              </div>

              <h3 className="mt-6 font-playfair text-3xl">
                {resources[3].title}
              </h3>

              <p className="mt-3 text-[#6B625D]">
                {resources[3].description}
              </p>
            </article>
          </Link>

        </div>

      </div>
    </section>
  );
}