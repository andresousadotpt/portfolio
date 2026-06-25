// Renders a JSON-LD <script> for structured data (SEO + GEO).
// Pass any schema.org object as `data`.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            // Schema is build-time/static data we control, so this is safe.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
