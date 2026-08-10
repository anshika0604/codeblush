import {
  DollarSign,
  Laptop,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| Icon Map
|--------------------------------------------------------------------------
*/

const iconMap = {
  budget: DollarSign,
  products: Laptop,
  comfort: HeartHandshake,
  codeblush: Sparkles,
};

type IconName = keyof typeof iconMap;

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

interface Highlight {
  icon: IconName;
  title: string;
  description: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  highlights: Highlight[];
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

export function ProductHighlights({
  title = "Every Recommendation Has a Purpose",
  subtitle = "I didn't simply choose the cheapest products or the most expensive ones. Every recommendation was selected to create a workspace that feels comfortable, productive, and beautiful to spend hours coding in.",
  highlights,
}: Props) {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Why These Picks ♡
          </p>

          <h2
            className="
              mt-4
              font-playfair
              text-5xl
              text-[#2E2A27]
            "
          >
            {title}
          </h2>

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
            {subtitle}
          </p>

        </div>

        {/* Highlight Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {highlights.map((item) => {

            const Icon = iconMap[item.icon];

            return (

              <article
                key={item.title}
                className="
                  rounded-[32px]
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

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#FAF6F2]
                  "
                >

                  <Icon
                    size={28}
                    className="text-[#D99CA4]"
                  />

                </div>

                <h3
                  className="
                    mt-6
                    font-playfair
                    text-2xl
                    text-[#2E2A27]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-8
                    text-[#6B625D]
                  "
                >
                  {item.description}
                </p>

              </article>

            );

          })}

        </div>

      </div>

    </section>
  );
}