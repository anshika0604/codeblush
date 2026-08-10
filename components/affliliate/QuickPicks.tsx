import Image from "next/image";
import Link from "next/link";

import {
  AffiliateProduct,
  QuickPick,
} from "@/data/coding-desk-setup";

interface Props {
  picks: QuickPick[];
  products: AffiliateProduct[];
}

export function QuickPicks({
  picks,
  products,
}: Props) {

  return (

    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Quick Picks ♡
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-[#2E2A27]">
            Don't Want To Read Everything?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B625D]">

            Here are my favorite recommendations if you're
            looking for the perfect developer setup.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {picks.map((pick) => {

            const product = products.find(
              (item) => item.id === pick.productId
            );

            if (!product) return null;

            return (

              <article
                key={pick.title}
                className="
                  rounded-[32px]
                  border
                  border-[#EFE7E1]
                  bg-white
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E8B4B8]
                  hover:shadow-[0_20px_60px_rgba(217,156,164,0.15)]
                "
              >

                <div className="flex gap-6">

                  <div
                    className="
                      relative
                      h-32
                      w-32
                      shrink-0
                      overflow-hidden
                      rounded-2xl
                    "
                  >

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="flex flex-1 flex-col">

                    <span
                      className="
                        inline-flex
                        w-fit
                        rounded-full
                        bg-[#FAF6F2]
                        px-4
                        py-1
                        text-xs
                        font-medium
                        text-[#D99CA4]
                      "
                    >
                      {pick.title}
                    </span>

                    <h3
                      className="
                        mt-4
                        font-playfair
                        text-2xl
                        text-[#2E2A27]
                      "
                    >
                      {product.title}
                    </h3>
                    <p
  className="
    mt-4
    text-[15px]
    leading-7
    text-[#6B625D]
  "
>
  {product.quickReason}
</p>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-[#6B625D]
                      "
                    >

                      ⭐ {product.rating}

                      <span>•</span>

                      <span className="font-semibold">
                        {product.price}
                      </span>

                    </div>

                    <Link
                      href={product.amazonLink}
                      className="
                        mt-auto
                        inline-flex
                        w-fit
                        rounded-full
                        bg-[#D99CA4]
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-[#C9868F]
                      "
                    >
                      View on Amazon →
                    </Link>

                  </div>

                </div>

              </article>

            );

          })}

        </div>

      </div>

    </section>

  );

}