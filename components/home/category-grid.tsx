import { categories } from "@/data/categories"

export function CategoryGrid() {
  return (
    <section className="py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl mb-16">
          Explore Categories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {categories.map(category => (
            <div
              key={category.title}
              className="rounded-3xl border bg-white p-8 hover:-translate-y-1 transition"
            >
              <div className="text-4xl">
                {category.icon}
              </div>

              <h3 className="mt-4 text-2xl">
                {category.title}
              </h3>

              <p className="mt-3 text-[#6B625D]">
                {category.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}