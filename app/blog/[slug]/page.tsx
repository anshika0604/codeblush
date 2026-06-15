import { notFound } from "next/navigation";

import { posts } from "@/data/posts";

import { ArticleHero } from "@/components/blog/article-hero";

import { ArticleContent } from "@/components/blog/article-content";

import { ArticleNewsletter } from "@/components/blog/article-newsletter";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main>

      <ArticleHero post={post} />

      <ArticleContent
        content={post.content || ""}
      />

      <ArticleNewsletter />

    </main>
  );
}