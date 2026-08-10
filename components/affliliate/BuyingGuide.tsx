interface Tip {
  title: string;
  description: string;
}

interface Props {
  title?: string;
  tips: Tip[];
}

export function BuyingGuide({
  title = "What To Consider Before Buying",
  tips,
}: Props) {
  return (
    <section className="bg-[#FAF6F4] py-28">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Buying Guide ♡
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
              max-w-2xl
              text-lg
              leading-8
              text-[#6B625D]
            "
          >
            Before spending your money, these are the
            things I'd personally consider.
          </p>

        </div>

        <div className="mt-16 space-y-8">

          {tips.map((tip, index) => (

            <div
              key={tip.title}
              className="
                rounded-[28px]
                bg-white
                p-8
                shadow-sm
              "
            >

              <div className="flex gap-6">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FAF6F2]
                    text-xl
                    font-semibold
                    text-[#D99CA4]
                  "
                >
                  {index + 1}
                </div>

                <div>

                  <h3
                    className="
                      font-playfair
                      text-3xl
                      text-[#2E2A27]
                    "
                  >
                    {tip.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-8
                      text-[#6B625D]
                    "
                  >
                    {tip.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}