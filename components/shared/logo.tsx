import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group">
      <div>
        <h1 className="font-playfair text-3xl font-semibold tracking-tight">
          CodeBlush
        </h1>

        <p className="font-script text-sm text-[#D99CA4]">
          romanticizing coding life
        </p>
      </div>
    </Link>
  );
}