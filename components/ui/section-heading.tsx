interface SectionHeadingProps {
    eyebrow: string
    title: string
    description: string
  }
  
  export function SectionHeading({
    eyebrow,
    title,
    description
  }: SectionHeadingProps) {
    return (
      <div className="mb-12 text-center">
        <p className="script text-2xl text-[#D99CA4]">
          {eyebrow}
        </p>
  
        <h2 className="mt-2 text-4xl md:text-5xl font-bold">
          {title}
        </h2>
  
        <p className="mx-auto mt-4 max-w-xl text-[#6B625D]">
          {description}
        </p>
      </div>
    )
  }