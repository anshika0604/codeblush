import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Categories", href: "/categories" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

const resources = [
  "Coding Gems",
  "VS Code Extensions",
  "AI Tools",
  "Career Growth",
];

export function Footer() {
  return (
    <footer className="border-t border-[#EFE7E1] bg-[#FFFDFC]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="font-playfair text-4xl text-[#2E2A27]">
              CodeBlush
            </h2>

            <p className="mt-2 font-script text-2xl text-[#D99CA4]">
              romanticizing coding life
            </p>

            <p className="mt-6 max-w-md leading-relaxed text-[#6B625D]">
              Helping women build beautiful careers in tech
              through coding inspiration, productivity,
              developer growth, and cozy workspaces.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="font-medium text-[#2E2A27]">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">

              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#6B625D] transition hover:text-[#D99CA4]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="font-medium text-[#2E2A27]">
              Resources
            </h3>

            <ul className="mt-6 space-y-3">

              {resources.map((item) => (
                <li
                  key={item}
                  className="text-[#6B625D]"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-16 border-t border-[#EFE7E1] pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-[#6B625D]">
              © {new Date().getFullYear()} CodeBlush.
              All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-[#6B625D]">

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/terms">
                Terms
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}