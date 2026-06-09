"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/fade-up";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[#E8B4B8]/20 blur-[120px]" />

      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-[#BFC9BE]/20 blur-[140px]" />

      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-white blur-[150px]" />

      <Container>
        <div className="grid min-h-screen items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <FadeUp>
            <div className="max-w-xl lg:-mt-10">

              {/* Editorial Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#EFE7E1] bg-white/80 px-5 py-2 backdrop-blur">
                <span>🌸</span>

                <span className="text-sm text-[#6B625D]">
                  Cozy productivity for women in tech
                </span>
              </div>

              {/* Accent Line */}
              <p className="font-script text-3xl text-[#D99CA4]">
                for women in tech
              </p>

              {/* Main Heading */}
              <h1 className="mt-4 font-playfair text-5xl leading-[1.05] text-[#2E2A27] md:text-6xl xl:text-7xl">

                Romanticizing

                <span className="block text-[#D99CA4]">
                  Coding Life
                </span>

              </h1>

              {/* Description */}
              <p className="mt-8 text-lg leading-relaxed text-[#6B625D] md:text-xl">
                Helping women build beautiful careers in tech
                through coding, productivity, inspiration,
                and cozy workspaces.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">

                <Button>
                  Explore Articles
                </Button>

                <Button variant="outline">
                  Coding Gems
                </Button>

              </div>

              {/* Stats */}
              <div className="mt-12 flex gap-10 text-sm">

                <div>
                  <p className="font-semibold text-[#2E2A27]">
                    100+
                  </p>

                  <p className="text-[#6B625D]">
                    Articles
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2A27]">
                    Weekly
                  </p>

                  <p className="text-[#6B625D]">
                    Inspiration
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2A27]">
                    Curated
                  </p>

                  <p className="text-[#6B625D]">
                    Resources
                  </p>
                </div>

              </div>

            </div>
          </FadeUp>

          {/* RIGHT IMAGE */}
          <FadeUp>
            <div className="relative mx-auto mt-12 w-full max-w-[560px] ">

              {/* Floating Badge */}
              <div className="absolute left-8 top-6 z-10 hidden rounded-full bg-white px-4 py-2 shadow-lg lg:block">

                ☕ Cozy Coding

              </div>

              {/* Floating Card */}
              <div className="absolute -left-8 top-24 z-20 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">

                <p className="text-xs text-[#6B625D]">
                Today&apos;s Mood
                </p>

                <p className="mt-1 font-medium">
                  ☕ Deep Work
                </p>

              </div>

              {/* Floating Card */}
              <div className="absolute -right-26 bottom-32 z-20 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">

                <p className="text-xs text-[#6B625D]">
                  Coding Session
                </p>

                <p className="mt-1 font-medium">
                  💻 Backend Development
                </p>

              </div>

              {/* Floating Badge */}
              <div className="absolute right-8 -bottom-5 z-10 hidden rounded-full bg-white px-4 py-2 shadow-lg lg:block">

                🌸 Soft Productivity

              </div>

              {/* Image Frame */}
              <div className="relative h-[420px] sm:h-[500px] lg:h-[620px] w-full overflow-hidden rounded-[40px] border border-[#EFE7E1] bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <div className="relative h-full w-full overflow-hidden rounded-[28px]">
                <Image
                  src="/images/hero-workspace.png"
                  alt="Cozy coding workspace"
                  fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>

              </div>

            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}