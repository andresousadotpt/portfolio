import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import PostViews from "@/components/post-views";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Thoughts, experiments and over-engineering from a DevOps Engineer.",
    alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
    const posts = getAllPosts();

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "André Sousa — Blog",
        url: "https://andresousa.pt/blog",
        author: { "@type": "Person", name: "André Sousa" },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `https://andresousa.pt/blog/${post.slug}`,
            datePublished: post.date,
            description: post.summary,
            keywords: post.tags.join(", "),
        })),
    };

    return (
        <main className="min-h-screen max-w-3xl mx-auto px-4 py-8 md:py-16">
            <JsonLd data={blogSchema} />
            <nav className="mb-8 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                    <span className="text-primary">$</span> cd
                    /home/andresousadotpt
                </Link>
            </nav>

            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2"># Blog</h1>
                <div className="text-xl text-muted-foreground">
                    <span className="text-primary">&gt;</span> thoughts,
                    experiments and over-engineering
                </div>
            </header>

            <hr className="my-8 border-border" />

            <section className="mb-8">
                {posts.length === 0 ? (
                    <p className="text-muted-foreground italic">
                        No posts yet. Check back soon 👀
                    </p>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="space-y-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                    <h2 className="text-xl font-semibold">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="hover:text-primary"
                                        >
                                            ## {post.title}
                                        </Link>
                                    </h2>
                                    <span className="text-muted-foreground text-sm flex items-center gap-2">
                                        {formatDate(post.date)}
                                        <span aria-hidden="true">·</span>
                                        <PostViews
                                            path={`/blog/${post.slug}`}
                                        />
                                    </span>
                                </div>

                                {post.summary && (
                                    <p className="text-muted-foreground">
                                        {post.summary}
                                    </p>
                                )}

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
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
