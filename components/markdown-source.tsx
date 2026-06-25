// Renders a post body as literal markdown source: the syntax characters
// (#, **, `, -, etc.) stay visible, matching the markdown-source look of the
// rest of the site. Heading lines still get visual weight so long posts stay
// scannable, but nothing is converted to HTML.
interface MarkdownSourceProps {
    content: string;
}

export default function MarkdownSource({ content }: MarkdownSourceProps) {
    const lines = content.replace(/\r\n/g, "\n").split("\n");

    return (
        <div className="space-y-1 leading-relaxed">
            {lines.map((line, index) => {
                const key = `${index}-${line}`;

                if (line.trim() === "") {
                    return <div key={key} className="h-4" aria-hidden="true" />;
                }
                if (line.startsWith("### ")) {
                    return (
                        <h3
                            key={key}
                            className="text-lg font-semibold mt-4 whitespace-pre-wrap"
                        >
                            {line}
                        </h3>
                    );
                }
                if (line.startsWith("## ")) {
                    return (
                        <h2
                            key={key}
                            className="text-xl font-semibold mt-6 whitespace-pre-wrap"
                        >
                            {line}
                        </h2>
                    );
                }
                if (line.startsWith("# ")) {
                    return (
                        <h2
                            key={key}
                            className="text-2xl font-bold mt-6 whitespace-pre-wrap"
                        >
                            {line}
                        </h2>
                    );
                }

                return (
                    <p
                        key={key}
                        className="text-muted-foreground whitespace-pre-wrap"
                    >
                        {line}
                    </p>
                );
            })}
        </div>
    );
}
