import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "André Sousa - DevOps Engineer",
    description:
        "Markdown look portfolio (not using markdown but wan't 🥲) for a DevOps Engineer",
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

import "./globals.css";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
