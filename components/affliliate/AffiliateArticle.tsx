import { Post } from "@/types/post";
import { posts } from "@/data/posts";
import { AffiliateGuide } from "@/types/affiliate-guide";

import { ProductHero } from "@/components/affliliate/ProductHero";
import { ProductCard } from "@/components/affliliate/ProductCard";
import { ProductComparison } from "@/components/affliliate/ProductComparison";
import { ProductAlternatives } from "@/components/affliliate/ProductAlternatives";
import { BuyingGuide } from "@/components/affliliate/BuyingGuide";
import { ProductHighlights } from "@/components/affliliate/ProductHighlights";
import { QuickPicks } from "@/components/affliliate/QuickPicks";
import FAQ from "@/components/affliliate/FAQ";

interface Props {
  post: Post;
  content: string;
  readTime: string;
  guide: AffiliateGuide;
}

export function AffiliateArticle({
  post,
  guide,
}: Props) {
  
  const alternatives = posts
    .filter(
      (item) =>
        item.type === "affiliate" &&
        item.slug !== post.slug
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen">

      {/* =====================================================
          HERO
      ===================================================== */}

      <ProductHero
        hero={guide.hero}
      />

      {/* =====================================================
          QUICK PICKS
      ===================================================== */}

      <QuickPicks
        picks={guide.quickPicks}
        products={guide.products}
      />

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <ProductHighlights
        title={guide.highlights.title}
        subtitle={guide.highlights.subtitle}
        highlights={guide.highlights.items}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ProductComparison
        products={guide.comparison}
      />

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        id="products"
        className="
          mx-auto
          max-w-7xl
          px-6
          py-24
        "
      >

        {guide.products.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            reverse={index % 2 === 1}
          />
        ))}

      </section>

      {/* =====================================================
          ALTERNATIVE GUIDES
      ===================================================== */}

      <ProductAlternatives
        posts={alternatives}
      />

      {/* =====================================================
          BUYING GUIDE
      ===================================================== */}

      <BuyingGuide
        tips={guide.buyingGuide}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <FAQ
        faqs={guide.faq}
      />

    </main>
  );
}