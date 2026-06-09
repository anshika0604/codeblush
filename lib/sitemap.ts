import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codeblush.site"
    },
    {
      url: "https://codeblush.site/blog"
    },
    {
      url: "https://codeblush.site/resources"
    }
  ]
}