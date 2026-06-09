"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/fade-up";

export function Hero() {
  return (
    <>
      <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[#E8B4B8]/20 blur-3xl" />

      <div className="absolute right-20 bottom-10 h-40 w-40 rounded-full bg-[#BFC9BE]/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFFDFC] blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <FadeUp>
            <div>

              <p className="font-script text-3xl text-[#D99CA4]">
                for women in tech
              </p>

              <h1 className="mt-4 font-playfair text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Romanticizing
                <br />
                Coding Life
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B625D] md:text-xl">
                Helping women build beautiful careers in tech
                through coding, productivity, inspiration,
                and cozy workspaces.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button>
                  Explore Articles
                </Button>

                <Button variant="outline">
                  Coding Gems
                </Button>
              </div>

              {/* Mini Stats */}
              <div className="mt-12 flex flex-wrap gap-8 text-sm text-[#6B625D]">

                <div>
                  <p className="font-semibold text-[#2E2A27]">
                    100+
                  </p>
                  <p>Articles</p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2A27]">
                    Weekly
                  </p>
                  <p>Inspiration</p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2A27]">
                    Curated
                  </p>
                  <p>Resources</p>
                </div>

              </div>

            </div>
          </FadeUp>

          {/* Right Image */}
          <FadeUp>
            <div className="relative">

              {/* Floating Decorations */}

              <div className="absolute -left-6 top-8 z-10 rounded-full bg-white px-4 py-2 shadow-lg">
                ☕ Cozy Coding
              </div>

              <div className="absolute -right-6 bottom-12 z-10 rounded-full bg-white px-4 py-2 shadow-lg">
                🌸 Soft Productivity
              </div>

              {/* Main Image */}

              <div className="overflow-hidden rounded-[32px] border border-[#EFE7E1] bg-white p-3 shadow-2xl">

                <Image
                  src="/images/hero-workspace.jpg"
                  alt="Cozy coding workspace"
                  width={700}
                  height={800}
                  priority
                  className="rounded-[24px] object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>
          </FadeUp>

        </div>
      </Container>
    </>
  );
}