"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

interface Props {
  readTime?: string;
}

export function TableOfContents({
  readTime = "5 min read",
}: Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [progress, setProgress] = useState(0);

  // Reading Progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent =
        (scrollTop / docHeight) * 100;

      setProgress(Math.min(100, percent));
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  // TOC Headings
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        ".article-content h2"
      )
    );

    const items = elements.map((el) => {
      const text = el.textContent || "";

      const id =
        el.id ||
        text
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .replace(/\s+/g, "-");

      el.id = id;

      return {
        id,
        text,
      };
    });

    setHeadings(items);
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside
      className="
        sticky
        top-32
        space-y-6
      "
    >
      {/* Reading Card */}
      <div
        className="
          rounded-[28px]
          border
          border-[#EFE7E1]
          bg-white
          p-6
          shadow-sm
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-[#D99CA4]
          "
        >
          Reading Time
        </p>

        <p
          className="
            mt-2
            font-playfair
            text-xl
            text-[#2E2A27]
          "
        >
          Perfect for a coffee break ✨
        </p>

        <div className="mt-6">
          <div
            className="
              flex
              justify-between
              text-xs
              text-[#8A817C]
            "
          >
            <span>Progress</span>
            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div
            className="
              mt-2
              h-2
              overflow-hidden
              rounded-full
              bg-[#EFE7E1]
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-[#D99CA4]
                transition-all
                duration-300
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* TOC Card */}
      <div
        className="
          rounded-[28px]
          border
          border-[#EFE7E1]
          bg-white
          p-6
          shadow-sm
        "
      >
        <p
          className="
            font-playfair
            text-2xl
            text-[#2E2A27]
          "
        >
          Reading Guide
        </p>

        <p
          className="
            mt-1
            text-sm
            text-[#8A817C]
          "
        >
          Jump to any section
        </p>

        <div
          className="
            mt-4
            mb-6
            h-px
            w-20
            bg-[#E8B4B8]
          "
        />

        <ul className="space-y-4">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="
                  block
                  text-[15px]
                  leading-relaxed
                  text-[#6B625D]
                  transition-colors
                  hover:text-[#D99CA4]
                "
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}