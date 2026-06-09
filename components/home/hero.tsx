import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="script text-3xl text-[#D99CA4]">
              for women in tech
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
              Romanticizing
              <br />
              Coding Life
            </h1>

            <p className="mt-8 text-lg text-[#6B625D] max-w-xl">
              Helping women build beautiful careers in tech through coding,
              productivity, inspiration, and cozy workspaces.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Explore Articles
              </Button>

              <Button variant="outline">
                Coding Gems
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/hero-workspace.jpg"
              alt="Cozy workspace"
              width={700}
              height={800}
              className="rounded-[32px] shadow-xl"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}