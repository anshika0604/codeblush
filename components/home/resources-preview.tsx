import { resources } from "@/data/resources"

export function ResourcesPreview() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl mb-16">
          Coding Gems
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {resources.map(resource => (
            <div
              key={resource.title}
              className="rounded-3xl border bg-white p-6"
            >
              <h3 className="text-xl font-semibold">
                {resource.title}
              </h3>

              <p className="mt-3 text-[#6B625D]">
                {resource.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}