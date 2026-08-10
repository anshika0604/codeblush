export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  category: string;
  categorySlug: string;
  featured: boolean;
  author: string;
  type: "blog" | "affiliate";
}