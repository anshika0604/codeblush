export function NewsletterCTA() {
    return (
      <section className="py-28">
  
        <div className="mx-auto max-w-5xl px-6">
  
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-[#EFE7E1]
              bg-white
              px-8
              py-16
              text-center
              shadow-[0_20px_80px_rgba(0,0,0,0.05)]
              md:px-16
            "
          >
  
            {/* Glow */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-64
                w-64
                -translate-x-1/2
                rounded-full
                bg-[#E8B4B8]/15
                blur-[120px]
              "
            />
  
            <div className="relative">
  
              <p className="font-script text-5xl text-[#D99CA4]">
                Join the Club ♡
              </p>
  
              <h2
                className="
                  mt-4
                  font-playfair
                  text-4xl
                  text-[#2E2A27]
                  md:text-5xl
                "
              >
                The CodeBlush Newsletter
              </h2>
  
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-[#6B625D]
                "
              >
                Cozy coding inspiration, productivity ideas,
                career growth tips, aesthetic workspace finds,
                and exclusive resources delivered directly to
                your inbox.
              </p>
  
              {/* Benefits */}
              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  justify-center
                  gap-3
                "
              >
  
                <span className="rounded-full bg-[#FAF6F2] px-4 py-2 text-sm text-[#6B625D]">
                  Weekly Inspiration
                </span>
  
                <span className="rounded-full bg-[#FAF6F2] px-4 py-2 text-sm text-[#6B625D]">
                  Coding Resources
                </span>
  
                <span className="rounded-full bg-[#FAF6F2] px-4 py-2 text-sm text-[#6B625D]">
                  Productivity Tips
                </span>
  
                <span className="rounded-full bg-[#FAF6F2] px-4 py-2 text-sm text-[#6B625D]">
                  Workspace Ideas
                </span>
  
              </div>
  
              {/* Form */}
              <form
                className="
                  mx-auto
                  mt-12
                  flex
                  max-w-xl
                  flex-col
                  gap-4
                  md:flex-row
                "
              >
  
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    rounded-full
                    border
                    border-[#EFE7E1]
                    bg-[#FAF6F2]
                    px-6
                    py-4
                    outline-none
                    transition
                    focus:border-[#D99CA4]
                  "
                />
  
                <button
                  className="
                    rounded-full
                    bg-[#D99CA4]
                    px-8
                    py-4
                    font-medium
                    text-white
                    transition
                    hover:scale-105
                  "
                >
                  Join Free
                </button>
  
              </form>
  
              <p className="mt-5 text-sm text-[#8A817C]">
                No spam. Just cozy coding goodness ✨
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }