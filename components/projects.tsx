import CodeBlock from "./code-block";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export default function Projects() {
    const projects = [
        {
            title: "Reminder Bot",
            description:
                "An overengineered bot for having reminders on telegram at half and the end of the month",
            technologies: [
                "Terraform",
                "Java",
                "AWS Lambda Functions",
                "GitHub Actions",
            ],
            codeSnippet: {
                language: null,
                code: null,
            },
            links: {
                github: "https://github.com/andresousadotpt/reminder-bot",
                demo: null,
            },
        },
        {
            title: "More to come (trust me 🙏)",
            description:
                "Hello Santa Claus🎅 (or Mrs. Claus 🤶), I'd like a present for my adventurous ability to do more side projects!",
            technologies: ["Santa", "Christmas"],
            codeSnippet: {
                language: null,
                code: null,
            },
            links: {
                github: null,
                demo: null,
            },
        },
    ];

    return (
        <section id="projects" className="mb-8">
            <h2 className="text-2xl font-bold mb-4"># Personal Projects</h2>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-xl font-semibold">
                            ## {project.title}
                        </h3>
                        <p className="text-muted-foreground">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <CodeBlock
                            language={project.codeSnippet.language}
                            code={project.codeSnippet.code}
                        />

                        <div className="flex gap-3">
                            <Button variant="outline" size="sm" asChild>
                                <a
                                    href={
                                        project.links.github
                                            ? project.links.github
                                            : "#"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        "flex items-center gap-2 " +
                                        project.links.github
                                            ? "hidden"
                                            : ""
                                    }
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>

                            {project.links.demo && (
                                <Button variant="outline" size="sm" asChild>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
