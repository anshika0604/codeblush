import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/categories/category-card";

export default function CategoriesPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug;
  let category = undefined;
  let categoryPosts: typeof posts = [];

  if (slug) {
    category = categories.find((item) => item.slug === slug);
    if (!category) notFound();
    categoryPosts = posts.filter((post) => post.categorySlug === slug);
  }
  return (
    <main className="pt-40 pb-28">

      <section className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-script text-5xl text-[#D99CA4]">
            Explore Topics
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
            Browse Categories
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[#6B625D]
            "
          >
            Whether you're looking for cozy coding inspiration,
            developer career advice, productivity tips, or beautiful
            workspaces, start your journey here.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
            />
          ))}

        </div>

      </section>

    </main>
  );
}