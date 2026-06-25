import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://andresousa.pt";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.date || undefined,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...postEntries,
    ];
}
