"use client";

import {useTheme} from "next-themes";
import {ChartNoAxesCombined, Github, GithubIcon, Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                    window.open(
                        "https://github.com/andresousadotpt/portfolio",
                        "_blank",
                    )
                }
                aria-label="Go to this portfolio repo"
            >
                <Github className="h-5 w-5" />
            </Button>
            {/* <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                    window.open(
                        "https://plausible.andresousa.pt/andresousa.pt/",
                        "_blank",
                    )
                }
                aria-label="Go to this portfolio open analytics"
            >
                <ChartNoAxesCombined className="h-5 w-5" />
            </Button> */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </>
    );
}
