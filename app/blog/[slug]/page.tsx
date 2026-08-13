import { notFound } from "next/navigation";

import { posts } from "@/data/posts";
import { getPostContent } from "@/lib/posts";
import { affiliateGuides } from "@/data/affiliate-guides";

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

  /*
   * ==========================================================
   * AFFILIATE ARTICLE
   * ==========================================================
   *
   * Only affiliate posts come through this branch.
   *
   * The slug is used to find the correct guide from:
   *
   * data/affiliate-guides.ts
   *
   * Example:
   *
   * desktop_in_budget
   *        ↓
   * affiliateGuides
   *        ↓
   * codingDeskSetup
   */
  if (post.type === "affiliate") {
    const guide = affiliateGuides[post.slug];

    if (!guide) {
      notFound();
    }

    return (
      <AffiliateArticle
        post={post}
        content={content}
        readTime={readTime}
        guide={guide}
      />
    );
  }

  /*
   * ==========================================================
   * NORMAL BLOG ARTICLE
   * ==========================================================
   *
   * Everything below remains your existing blog architecture.
   *
   * Affiliate changes do NOT affect this section.
   */
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
        <TableOfContents
          readTime={readTime}
        />

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