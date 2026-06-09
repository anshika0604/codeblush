import Link from "next/link"

export function Logo() {
  return (
    <Link href="/">
      <div>
        <h1 className="font-playfair text-3xl">
          CodeBlush
        </h1>

        <p className="script text-sm text-[#D99CA4]">
          romanticizing coding life
        </p>
      </div>
    </Link>
  )
}