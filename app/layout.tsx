import type React from "react";
import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

const siteUrl = "https://andresousa.pt";
const ogImage = "https://cdn.andresousa.pt/personal/logo_no_bg_white.png";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "André Sousa — DevOps Engineer",
        template: "%s — André Sousa",
    },
    description:
        "The classic DevOps Engineer experience website. (Markdown look portfolio 💀)",
    authors: [{ name: "André Sousa", url: siteUrl }],
    creator: "André Sousa",
    keywords: [
        "André Sousa",
        "DevOps Engineer",
        "Kubernetes",
        "Terraform",
        "Infrastructure as Code",
        "CI/CD",
        "Cloud Native",
        "blog",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: "André Sousa",
        title: "André Sousa — DevOps Engineer",
        description:
            "DevOps Engineer writing about infrastructure, IaC, and over-engineering side projects.",
        images: [{ url: ogImage, alt: "André Sousa" }],
        locale: "en_US",
    },
    twitter: {
        card: "summary",
        title: "André Sousa — DevOps Engineer",
        description:
            "DevOps Engineer writing about infrastructure, IaC, and over-engineering side projects.",
        images: [ogImage],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            {
                url: "https://cdn.andresousa.pt/personal/logo_no_bg_white.png",
                sizes: "any",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* GoatCounter (cookieless, no banner needed).
                    Counts pageviews; public per-page counts are read back via
                    the /counter/<path>.json endpoint in <PostViews />. */}
                <Script
                    data-goatcounter="https://andresousadotpt.goatcounter.com/count"
                    src="https://gc.zgo.at/count.js"
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="absolute right-4 top-4 md:right-8 md:top-8">
                        <ThemeToggle />
                    </div>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
