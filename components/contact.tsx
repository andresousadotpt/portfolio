import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
    return (
        <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold mb-4"># Contact</h2>
            <p className="text-muted-foreground mb-4">
                Feel free to reach out if you'd like to discuss DevOps
                strategies, infrastructure optimization, or potential
                collaboration opportunities.
            </p>

            <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                    <a
                        href="mailto:contact@andresousa.pt"
                        className="flex items-center gap-2"
                    >
                        <Mail className="h-4 w-4" />
                        contact@andresousa.pt
                    </a>
                </Button>

                <Button variant="outline" asChild>
                    <a
                        href="https://github.com/andresousadotpt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </Button>

                <Button variant="outline" asChild>
                    <a
                        href="https://linkedin.com/in/andresousadotpt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                    </a>
                </Button>
            </div>
        </section>
    );
}
