export default function Skills() {
    const skillCategories = [
        {
            name: "Cloud & Infrastructure",
            skills: [
                "AWS",
                "Azure",
                "Terraform",
                "Kubernetes",
                "Docker",
                "Helm",
            ],
        },
        {
            name: "CI/CD & Automation",
            skills: ["Jenkins", "GitHub Actions", "GitOps", "GitLab CI"],
        },
        {
            name: "Monitoring & Observability",
            skills: ["Grafana", "Prometheus", "ELK Stack", "Loki", "Mimir"],
        },
        {
            name: "Languages & Tools",
            skills: ["Bash", "Python", "Go", "Java", "YAML", "Git", "Linux"],
        },
        {
            name: "Database",
            skills: ["SQL", "PostgreSQL", "MySQL", "MariaDB"],
        },
    ];

    return (
        <section id="skills" className="mb-8">
            <h2 className="text-2xl font-bold mb-4"># Skills</h2>
            <div className="space-y-6">
                {skillCategories.map((category) => (
                    <div key={category.name} className="space-y-2">
                        <h3 className="text-lg font-semibold">
                            ## {category.name}
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {category.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="text-muted-foreground"
                                >
                                    <span className="text-primary">-</span>{" "}
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
