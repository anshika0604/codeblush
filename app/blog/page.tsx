import { posts } from "@/data/posts";
import { BlogCard } from "@/components/blog/blog-card";
import { getPostContent } from "@/lib/posts";

export default function BlogPage() {
  return (
    <main className="pt-40 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-script text-4xl text-[#D99CA4]">
            CodeBlush Journal
          </p>

          <h1 className="mt-4 font-playfair text-6xl">
            The Blog
          </h1>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

        {posts.map((post) => {
  const { readTime } = getPostContent(post.slug);

  return (
    <BlogCard
      key={post.slug}
      post={{
        ...post,
        readTime,
      }}
    />
  );
})}

        </div>

      </div>

    </main>
  );
}