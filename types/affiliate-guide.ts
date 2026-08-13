import { AffiliateProduct } from "@/data/coding-desk-setup";

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroCTA {
  text: string;
  href: string;
}

export interface AffiliateHero {
  title: string;
  subtitle: string;
  image: string;

  category: string;

  budget: string;
  budgetLabel: string;

  readTime: string;

  productCount: number;

  createdAt: string;

  stats: HeroStat[];

  badges: string[];

  cta: HeroCTA;
}

export interface QuickPick {
  title: string;
  productId: number;
}

export interface GuideHighlight {
  icon: "budget" | "products" | "comfort" | "codeblush";
  title: string;
  description: string;
}

export interface AffiliateComparison {
  title: string;
  bestFor: string;
  price: string;
  rating: string;
  verdict: string;
}

export interface AffiliateAlternative {
  title: string;
  image: string;
  slug: string;
  budget: string;
  description: string;
}

export interface BuyingGuideItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AffiliateGuide {
  hero: AffiliateHero;

  quickPicks: QuickPick[];

  products: AffiliateProduct[];

  highlights: {
    title: string;
    subtitle: string;
    items: GuideHighlight[];
  };

  comparison: AffiliateComparison[];

  productsSection?: {
    title?: string;
    subtitle?: string;
  };

  buyingGuide: BuyingGuideItem[];

  faq: FAQItem[];
}