import { notFound } from "next/navigation";

import { posts } from "@/data/posts";
import { getPostContent } from "@/lib/posts";

import { ArticleHero } from "@/components/blog/article-hero";
import { ArticleContent } from "@/components/blog/article-content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: Props) {

  const { slug } = await params;

  const post = posts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  const content = getPostContent(slug);

  return (
    <>
      <ArticleHero post={post} />

      <ArticleContent
        content={content}
        image={post.image}
        title={post.title}
      />
    </>
  );
}