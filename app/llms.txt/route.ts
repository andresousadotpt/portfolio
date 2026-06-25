import { getAllPosts, formatDate } from "@/lib/posts";

const siteUrl = "https://andresousa.pt";

export const dynamic = "force-static";

// llms.txt — a plain-text summary for LLMs / AI search engines (GEO).
// https://llmstxt.org
export function GET() {
    const posts = getAllPosts();

    const body = `# André Sousa

> DevOps Engineer building and maintaining CI/CD pipelines, infrastructure as
> code, and cloud-native solutions. Writes about infrastructure, IaC, and
> over-engineering side projects.

## About

André Sousa is a DevOps Engineer experienced with Kubernetes, Terraform/OpenTofu,
GitOps (Argo CD, FluxCD), CI/CD (GitLab CI, GitHub Actions), and observability
(Prometheus, Loki, Grafana, VictoriaMetrics). Portfolio and blog: ${siteUrl}

## Blog posts

${posts
    .map(
        (post) =>
            `- [${post.title}](${siteUrl}/blog/${post.slug}): ${
                post.summary
            } (${formatDate(post.date)})`,
    )
    .join("\n")}

## Contact

- Email: contact@andresousa.pt
- GitHub: https://github.com/andresousadotpt
- LinkedIn: https://linkedin.com/in/andresousadotpt
`;

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
