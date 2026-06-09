import { articles } from "@/data/articles"
import { BlogCard } from "@/components/blog/blog-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Container } from "@/components/ui/container"

export function FeaturedArticles() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeading
          eyebrow="latest inspiration"
          title="Latest Articles"
          description="Fresh reads for your coding journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>

      </Container>
    </section>
  )
}