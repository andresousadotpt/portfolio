import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
}

export interface Post extends PostMeta {
    content: string;
}

// Lightweight frontmatter parser. Posts are authored by hand, so we control
// the format and avoid pulling in a dependency for it.
function parseFrontmatter(raw: string): {
    data: Record<string, string | string[]>;
    content: string;
} {
    const normalized = raw.replace(/\r\n/g, "\n");
    const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(normalized);
    if (!match) return { data: {}, content: normalized.trim() };

    const [, frontmatter, content] = match;
    const data: Record<string, string | string[]> = {};

    for (const line of frontmatter.split("\n")) {
        const idx = line.indexOf(":");
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        const rawValue = line.slice(idx + 1).trim();

        if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
            data[key] = rawValue
                .slice(1, -1)
                .split(",")
                .map((s) => s.trim().replace(/^["']|["']$/g, ""))
                .filter(Boolean);
        } else {
            data[key] = rawValue.replace(/^["']|["']$/g, "");
        }
    }

    return { data, content: content.trim() };
}

export function getPostSlugs(): string[] {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs
        .readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

export function getPost(slug: string): Post {
    const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf-8");
    const { data, content } = parseFrontmatter(raw);

    return {
        slug,
        title: typeof data.title === "string" ? data.title : slug,
        date: typeof data.date === "string" ? data.date : "",
        summary: typeof data.summary === "string" ? data.summary : "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        content,
    };
}

export function getAllPosts(): Post[] {
    return getPostSlugs()
        .map(getPost)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// "2026-06-20" -> "Jun 2026", matching the date style used in Experience.
export function formatDate(date: string): string {
    if (!date) return "";
    const parsed = new Date(date);
    if (Number.isNaN(parsed.getTime())) return date;
    return parsed.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}
