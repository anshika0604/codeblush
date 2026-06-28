import { ResourceCard } from "../../components/resources/resource-card";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <main className="pt-40 pb-28">

      {/* Hero */}

      <section className="mx-auto max-w-5xl px-6 text-center">

        <p className="font-script text-5xl text-[#D99CA4]">
          Curated Collection
        </p>

        <h1
          className="
            mt-4
            font-playfair
            text-5xl
            md:text-6xl
            text-[#2E2A27]
          "
        >
          Resources
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-[#6B625D]
          "
        >
          Beautiful tools, templates, wallpapers, VS Code setups,
          productivity systems, and carefully curated resources to
          make your coding journey calmer, more intentional,
          and more enjoyable.
        </p>

      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {resources.map((resource) => (
            <ResourceCard
              key={resource.slug}
              resource={resource}
            />
          ))}

        </div>

      </section>

    </main>
  );
}