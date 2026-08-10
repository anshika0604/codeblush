import Image from "next/image";

interface Props {
  image: string;
  title: string;
  badge?: string;
  rating?: string;
  price: string;

  whyILoveIt: string;

  highlights: string[];

  pros: string[];

  cons: string[];

  perfectFor: string[];

  amazonLink: string;

  reverse?: boolean;
}

export function ProductCard({
  image,
  title,
  badge,
  rating,
  price,
  whyILoveIt,
  highlights,
  pros,
  cons,
  perfectFor,
  amazonLink,
  reverse = false,
}: Props) {
  return (
    <section
      className={`
        grid
        items-center
        gap-16
        py-20
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}

      <div className="relative">

        <div className="overflow-hidden rounded-[36px] border border-[#EFE7E1] bg-white p-4 shadow-xl">

          <Image
            src={image}
            alt={title}
            width={700}
            height={700}
            className="rounded-[28px] object-cover"
          />

        </div>

      </div>

      {/* Content */}

      <div>

        {badge && (
          <span
            className="
              rounded-full
              bg-[#FAF6F2]
              px-4
              py-2
              text-sm
              font-medium
              text-[#D99CA4]
            "
          >
            {badge}
          </span>
        )}

        <h2
          className="
            mt-6
            font-playfair
            text-5xl
            leading-tight
            text-[#2E2A27]
          "
        >
          {title}
        </h2>

        <div className="mt-6 flex items-center gap-4">

          <span className="text-lg">
            ⭐ {rating}
          </span>

          <span className="font-semibold text-[#2E2A27]">
            {price}
          </span>

        </div>

        {/* Story */}

        <div className="mt-12">

          <h3 className="font-playfair text-3xl text-[#2E2A27]">
            Why I Chose This ♡
          </h3>

          <p className="mt-5 leading-8 text-[#6B625D]">
            {whyILoveIt}
          </p>

        </div>

        {/* Highlights */}

        <div className="mt-12">

          <h3 className="font-playfair text-3xl text-[#2E2A27]">
            What I Loved
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {highlights.map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  bg-[#FAF6F2]
                  px-5
                  py-4
                  text-[#6B625D]
                "
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>

        {/* Pros */}

        <div className="mt-12">

          <h3 className="font-playfair text-3xl text-[#2E2A27]">
            What I Loved Most
          </h3>

          <ul className="mt-6 space-y-4">

            {pros.map((item) => (
              <li
                key={item}
                className="text-[#6B625D]"
              >
                ✔ {item}
              </li>
            ))}

          </ul>

        </div>

        {/* Cons */}

        <div className="mt-12">

          <h3 className="font-playfair text-3xl text-[#2E2A27]">
            Things to Know
          </h3>

          <ul className="mt-6 space-y-4">

            {cons.map((item) => (
              <li
                key={item}
                className="text-[#6B625D]"
              >
                • {item}
              </li>
            ))}

          </ul>

        </div>

        {/* Perfect For */}

        <div className="mt-12">

          <h3 className="font-playfair text-3xl text-[#2E2A27]">
            Perfect For
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">

            {perfectFor.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-[#FFF7F7]
                  px-5
                  py-2
                  text-sm
                  text-[#D99CA4]
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* Amazon */}

        <a
          href={amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            inline-flex
            rounded-full
            bg-[#D99CA4]
            px-8
            py-4
            text-white
            transition
            hover:bg-[#C98993]
          "
        >
          View on Amazon →
        </a>

      </div>

    </section>
  );
}