import fs from "fs";
import path from "path";
import readingTime from "reading-time";

export function getPostContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    `${slug}.md`
  );

  const content = fs.readFileSync(
    filePath,
    "utf8"
  );

  const stats = readingTime(content);

  return {
    content,
    readTime: stats.text,
  };
}