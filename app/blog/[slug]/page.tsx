import { notFound } from "next/navigation";

import { posts } from "@/data/posts";
import { getPostContent } from "@/lib/posts";

import { ArticleHero } from "@/components/blog/article-hero";
import { ArticleContent } from "@/components/blog/article-content";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { NewsletterCTA } from "@/components/newsletter/newsletter-cta";
import { RelatedArticles } from "@/components/blog/related-articles";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AffiliateArticle } from "@/components/affliliate/AffiliateArticle";

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

  const {
    content,
    readTime,
  } = getPostContent(post.slug);

  if (post.type === "affiliate") {
  return (
    <AffiliateArticle
      post={post}
      content={content}
      readTime={readTime}
    />
  );
}

  return (
    <>
     <ReadingProgress />
     <ArticleHero
  post={{
    ...post,
    readTime,
  }}
/>

      <div
  className="
    mx-auto
    mt-20
    grid
    max-w-[1400px]
    gap-12
    lg:grid-cols-[260px_1fr]
  "
>
  <TableOfContents readTime={readTime}/>
      <ArticleContent
        content={content}
        image={post.image}
        title={post.title}
      />
      </div>
      <RelatedArticles
  currentSlug={post.slug}
/>
<NewsletterCTA />
    </>
  );
}