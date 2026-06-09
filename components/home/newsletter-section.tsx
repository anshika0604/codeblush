import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-5xl px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[48px]
            border
            border-[#EFE7E1]
            bg-white
            px-8
            py-20
            text-center
            shadow-[0_25px_80px_rgba(0,0,0,0.04)]
          "
        >

          {/* Background Glow */}
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#E8B4B8]/15 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#BFC9BE]/15 blur-3xl" />

          {/* Icon */}
          <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF6F2]">

            <Mail className="h-8 w-8 text-[#D99CA4]" />

          </div>

          {/* Heading */}
          <p className="relative z-10 mt-8 font-script text-4xl text-[#D99CA4]">
            Join the Club
          </p>

          <h2 className="relative z-10 mt-4 font-playfair text-5xl text-[#2E2A27]">
            Join the CodeBlush Club
          </h2>

          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-[#6B625D]">
            Weekly coding inspiration, productivity tips,
            career growth insights, beautiful workspaces,
            and curated resources delivered directly to your inbox.
          </p>

          {/* Form */}
          <form className="relative z-10 mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="
                h-14
                flex-1
                rounded-full
                border
                border-[#EFE7E1]
                bg-[#FFFDFC]
                px-6
                outline-none
                transition
                focus:border-[#D99CA4]
              "
            />

            <button
              className="
                h-14
                rounded-full
                bg-[#E8B4B8]
                px-8
                font-medium
                text-white
                transition
                hover:bg-[#D99CA4]
              "
            >
              Join Free
            </button>

          </form>

          {/* Tiny Trust Text */}
          <p className="relative z-10 mt-5 text-sm text-[#6B625D]">
            No spam. Only beautiful tech inspiration.
          </p>

        </div>

      </div>

    </section>
  );
}