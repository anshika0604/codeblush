interface ComparisonProduct {
  title: string;
  price: string;
  rating: string;
  bestFor: string;
  verdict: string;
}

interface Props {
  products: ComparisonProduct[];
}

export function ProductComparison({
  products,
}: Props) {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Quick Comparison
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-[#2E2A27]">
            Compare Everything At A Glance
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B625D]">
            If you're short on time, this table highlights
            the strengths of every product before diving
            into detailed reviews.
          </p>

        </div>

        <div
          className="
            mt-16
            overflow-hidden
            rounded-[36px]
            border
            border-[#EFE7E1]
            bg-white
            shadow-[0_20px_60px_rgba(217,156,164,0.08)]
          "
        >

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#FAF6F4]">

                <tr>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-[#2E2A27]">
                    Product
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-[#2E2A27]">
                    Best For
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-[#2E2A27]">
                    Price
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-[#2E2A27]">
                    Rating
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-[#2E2A27]">
                    Verdict
                  </th>

                </tr>

              </thead>

              <tbody>

                {products.map((product) => (

                  <tr
                    key={product.title}
                    className="border-t border-[#EFE7E1]"
                  >

                    <td className="px-8 py-7 font-medium text-[#2E2A27]">
                      {product.title}
                    </td>

                    <td className="px-8 py-7 text-[#6B625D]">
                      {product.bestFor}
                    </td>

                    <td className="px-8 py-7 font-semibold text-[#D99CA4]">
                      {product.price}
                    </td>

                    <td className="px-8 py-7">
                      ⭐ {product.rating}
                    </td>

                    <td className="px-8 py-7">

                      <span
                        className="
                          rounded-full
                          bg-[#FFF3E6]
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-[#C98945]
                        "
                      >
                        {product.verdict}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}