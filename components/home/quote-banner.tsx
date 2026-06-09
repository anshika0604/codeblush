import { Container } from "@/components/ui/container";

export function QuoteBanner() {
  return (
    <section className="py-28">
      <Container>

        <div className="relative overflow-hidden rounded-[40px] bg-[#E8B4B8]/10 px-10 py-20 text-center">

          {/* Decorative Glow */}
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-[#E8B4B8]/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#BFC9BE]/15 blur-3xl" />

          {/* Decorative Quote Mark */}
          <div className="absolute left-10 top-8 font-playfair text-8xl text-[#D99CA4]/15">
            &quot;
          </div>

          <div className="absolute bottom-2 right-10 rotate-180 font-playfair text-8xl text-[#D99CA4]/15">
            &quot;
          </div>

          <div className="relative z-10">

            {/* Brand Accent */}
            <p className="font-script text-5xl text-[#D99CA4]">
              CodeBlush
            </p>

            {/* Divider */}
            <div className="mx-auto mt-6 h-px w-20 bg-[#D99CA4]/40" />

            {/* Main Quote */}
            <blockquote
              className="
                mx-auto
                mt-8
                max-w-3xl
                font-playfair
                text-4xl
                leading-relaxed
                text-[#2E2A27]
              "
            >
              Your dream career is built
              <br />
              one coffee and one commit
              <br />
              at a time.
            </blockquote>

            {/* Supporting Text */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B625D]">
              Every great software engineer starts with small,
              consistent steps. Progress isn&apos;t built in a day —
              it&apos;s built through curiosity, focus, and countless
              tiny commits.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}