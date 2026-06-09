import Image from "next/image"

interface Props {
  title: string
  category: string
  image: string
  readTime: string
}

export function BlogCard({
  title,
  category,
  image,
  readTime
}: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border bg-white">

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-sm text-[#D99CA4]">
          {category}
        </span>

        <h3 className="mt-3 text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 text-sm text-[#6B625D]">
          {readTime}
        </p>
      </div>

    </article>
  )
}