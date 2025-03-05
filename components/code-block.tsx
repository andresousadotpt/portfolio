interface CodeBlockProps {
    language: string | null;
    code: string | null;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
    return (
        <div
            className={
                "my-4 rounded-md overflow-hidden " +
                (!code || !language ? "hidden" : "")
            }
        >
            <div className="bg-muted px-4 py-2 text-sm border-b border-border">
                {language}
            </div>
            <pre className="bg-muted/50 p-4 overflow-x-auto text-sm">
                <code>{code}</code>
            </pre>
        </div>
    );
}
