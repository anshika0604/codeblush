"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  faqs: FAQItem[];
}

export default function FAQ({
  title = "Frequently Asked Questions",
  faqs,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            FAQs ♡
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-[#2E2A27]">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B625D]">
            Some of the questions developers ask before
            building their workspace.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#EFE7E1]
                  bg-white
                "
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-8
                    py-7
                    text-left
                  "
                >

                  <h3
                    className="
                      font-playfair
                      text-2xl
                      text-[#2E2A27]
                    "
                  >
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />

                </button>

                {isOpen && (

                  <div
                    className="
                      border-t
                      border-[#EFE7E1]
                      px-8
                      py-7
                      leading-8
                      text-[#6B625D]
                    "
                  >
                    {faq.answer}
                  </div>

                )}

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}