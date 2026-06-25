import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import MarkdownSource from "@/components/markdown-source";
import JsonLd from "@/components/json-ld";
import PostViews from "@/components/post-views";
import { getPost, getPostSlugs, formatDate } from "@/lib/posts";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    if (!getPostSlugs().includes(slug)) return {};

    const post = getPost(slug);
    const url = `/blog/${slug}`;
    return {
        title: post.title,
        description: post.summary,
        keywords: post.tags,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            url,
            title: post.title,
            description: post.summary,
            publishedTime: post.date || undefined,
            tags: post.tags,
        },
        twitter: {
            card: "summary",
            title: post.title,
            description: post.summary,
        },
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    if (!getPostSlugs().includes(slug)) notFound();

    const post = getPost(slug);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        keywords: post.tags.join(", "),
        url: `https://andresousa.pt/blog/${slug}`,
        mainEntityOfPage: `https://andresousa.pt/blog/${slug}`,
        author: {
            "@type": "Person",
            name: "André Sousa",
            url: "https://andresousa.pt",
        },
    };

    return (
        <main className="min-h-screen max-w-3xl mx-auto px-4 py-8 md:py-16">
            <JsonLd data={articleSchema} />
            <nav className="mb-8 text-sm text-muted-foreground">
                <Link href="/blog" className="hover:text-primary">
                    <span className="text-primary">$</span> cd ../blog
                </Link>
            </nav>

            <article>
                <header className="mb-6">
                    <h1 className="text-2xl font-bold mb-2"># {post.title}</h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span>{formatDate(post.date)}</span>
                        <span aria-hidden="true">·</span>
                        <PostViews path={`/blog/${slug}`} />
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                <hr className="my-6 border-border" />

                <MarkdownSource content={post.content} />
            </article>

            <Footer />
        </main>
    );
}
