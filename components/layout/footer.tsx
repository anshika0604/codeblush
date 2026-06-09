import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#EFE7E1] bg-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="font-playfair text-3xl">
              CodeBlush
            </h3>

            <p className="mt-4 text-[#6B625D]">
              Helping women build beautiful careers
              in tech.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Explore
            </h4>

            <div className="mt-4 space-y-3">
              <Link href="/blog">Blog</Link>
              <br />
              <Link href="/resources">Resources</Link>
              <br />
              <Link href="/about">About</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Categories
            </h4>

            <div className="mt-4 space-y-3">
              <p>Career Growth</p>
              <p>Coding Gems</p>
              <p>Cozy Coding Spaces</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Connect
            </h4>

            <div className="mt-4 space-y-3">
              <p>Pinterest</p>
              <p>Instagram</p>
              <p>Email</p>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t pt-8 text-sm text-[#6B625D]">
          © 2026 CodeBlush
        </div>

      </div>

    </footer>
  );
}