export function NewsletterSection() {
    return (
      <section className="py-28">
  
        <div className="max-w-4xl mx-auto px-6">
  
          <div className="rounded-[40px] border bg-white p-12 text-center">
  
            <h2 className="text-5xl">
              Join the CodeBlush Club
            </h2>
  
            <p className="mt-4 text-[#6B625D]">
              Weekly coding inspiration, productivity tips,
              and cozy tech girl resources.
            </p>
  
            <div className="mt-8 flex flex-col md:flex-row gap-4">
  
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border px-6 py-4"
              />
  
              <button className="rounded-full bg-[#E8B4B8] px-8 py-4 text-white">
                Subscribe
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    )
  }