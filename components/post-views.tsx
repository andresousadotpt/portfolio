"use client";

import { useEffect, useState } from "react";

const GOATCOUNTER = "https://andresousadotpt.goatcounter.com";

// Reads the public, tokenless pageview count for a path from GoatCounter's
// /counter/<path>.json endpoint (must be enabled in GoatCounter settings:
// "Allow adding visitor counts to your pages"). Returns a pre-formatted,
// thousands-separated string like "1,284".
export default function PostViews({ path }: { path: string }) {
    const [views, setViews] = useState<string | null>(null);

    useEffect(() => {
        const url = `${GOATCOUNTER}/counter/${encodeURIComponent(path)}.json`;
        let active = true;

        fetch(url)
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (active) setViews(data?.count ?? "0");
            })
            .catch(() => {
                if (active) setViews(null);
            });

        return () => {
            active = false;
        };
    }, [path]);

    // Reserve space while loading / on error so layout doesn't jump.
    return <span>{views ?? "–"} views</span>;
}
