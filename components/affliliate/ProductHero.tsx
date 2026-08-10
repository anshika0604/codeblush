import Image from "next/image";
import Link from "next/link";

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroCTA {
  text: string;
  href: string;
}

export interface AffiliateHero {
  title: string;
  subtitle: string;

  image: string;

  category: string;

  budget: string;
  budgetLabel: string;

  readTime: string;

  productCount: number;

  createdAt: string;

  stats: HeroStat[];

  badges: string[];

  cta: HeroCTA;
}

interface Props {
  hero: AffiliateHero;
}

export function ProductHero({
  hero,
}: Props) {

  return (

    <section className="relative overflow-hidden bg-[#FFFDFC] py-28">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#E8B4B8]/10 blur-3xl" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#BFC9BE]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span
            className="
              inline-flex
              rounded-full
              bg-[#FAF6F2]
              px-4
              py-2
              text-sm
              font-medium
              text-[#D99CA4]
            "
          >
            {hero.category}
          </span>

          <h1
            className="
              mt-8
              font-playfair
              text-5xl
              leading-tight
              text-[#2E2A27]
              md:text-6xl
            "
          >
            {hero.title}
          </h1>

          <p
            className="
              mt-8
              text-lg
              leading-9
              text-[#6B625D]
            "
          >
            {hero.subtitle}
          </p>

          {/* BADGES */}

          <div className="mt-8 flex flex-wrap gap-3">

            {hero.badges.map((badge) => (

              <span
                key={badge}
                className="
                  rounded-full
                  border
                  border-[#EFE7E1]
                  bg-white
                  px-4
                  py-2
                  text-sm
                  text-[#6B625D]
                "
              >
                {badge}
              </span>

            ))}

          </div>

          {/* STATS */}

          {/* Stats */}
<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

  {hero.stats.map((stat) => (
    <div
      key={stat.label}
      className="
        flex
        min-h-[128px]
        min-w-0
        flex-col
        items-center
        justify-center
        rounded-[24px]
        border
        border-[#EFE7E1]
        bg-white
        px-3
        py-5
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E8B4B8]
        hover:shadow-[0_12px_35px_rgba(217,156,164,0.12)]
      "
    >

      {/* Value */}
      <p
        className="
          whitespace-nowrap
          font-playfair
          text-[20px]
          font-semibold
          leading-none
          tracking-tight
          text-[#2E2A27]
          sm:text-[21px]
          md:text-[22px]
        "
      >
        {stat.value}
      </p>

      {/* Label */}
      <p
        className="
          mt-3
          whitespace-nowrap
          text-[10px]
          font-medium
          uppercase
          tracking-[0.16em]
          leading-none
          text-[#8B817B]
          sm:text-[11px]
        "
      >
        {stat.label}
      </p>

    </div>
  ))}

</div>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href={hero.cta.href}
              className="
                rounded-full
                bg-[#D99CA4]
                px-8
                py-4
                font-medium
                text-white
                transition
                hover:bg-[#C98993]
              "
            >
              {hero.cta.text}
            </Link>

          </div>

          {/* FOOTER */}

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#6B625D]">

            <span>💰 {hero.budgetLabel}: {hero.budget}</span>

            <span>📖 {hero.readTime}</span>

            <span>🛍 {hero.productCount} Products</span>

            <span>✨ Created:  {hero.createdAt}</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-[#EFE7E1]
              bg-white
              p-3
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            "
          >

            <Image
              src={hero.image}
              alt={hero.title}
              width={900}
              height={900}
              priority
              className="rounded-[28px]"
            />

          </div>

        </div>

      </div>

    </section>

  );

}