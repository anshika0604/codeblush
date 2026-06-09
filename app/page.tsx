import { Hero } from "@/components/home/hero";
import { FeaturedArticles } from "@/components/home/featured-articles";
import { CategoryGrid } from "@/components/home/category-grid";
import { QuoteBanner } from "@/components/home/quote-banner";
import { ResourcesBento } from "@/components/home/resources-preview";
import { Newsletter } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <CategoryGrid />
      <QuoteBanner />
      <ResourcesBento />
      <Newsletter />
    </>
  );
}