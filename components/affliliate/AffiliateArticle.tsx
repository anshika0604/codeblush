import { Post } from "@/types/post";
import { posts } from "@/data/posts";

import { codingDeskSetup } from "@/data/coding-desk-setup";

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
}

export function AffiliateArticle({
  post,
}: Props) {

  const alternatives = posts
    .filter(
      (item) =>
        item.type === "affiliate" &&
        item.slug !== post.slug
    )
    .slice(0, 3);

  return (
    <main>

      {/* Hero */}

      <ProductHero
        hero={codingDeskSetup.hero}
      />

      {/* Quick Picks */}

      <QuickPicks
        picks={codingDeskSetup.quickPicks}
        products={codingDeskSetup.products}
      />

      {/* Highlights */}

      <ProductHighlights
        title={codingDeskSetup.highlights.title}
        subtitle={codingDeskSetup.highlights.subtitle}
        highlights={codingDeskSetup.highlights.items}
      />

      {/* Comparison */}

      <ProductComparison
        products={codingDeskSetup.comparison}
      />

      {/* Products */}

      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        {codingDeskSetup.products.map((product, index) => (

          <ProductCard
            key={product.id}
            {...product}
            reverse={index % 2 === 1}
          />

        ))}

      </section>

      {/* Alternatives */}

      <ProductAlternatives
        posts={alternatives}
      />

      {/* Buying Guide */}

      <BuyingGuide
        tips={codingDeskSetup.buyingGuide}
      />

      {/* FAQ */}

      <FAQ
        faqs={codingDeskSetup.faq}
      />

    </main>
  );
}