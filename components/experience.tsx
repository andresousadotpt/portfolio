export default function Experience() {
    const experiences = [
        {
            title: "DevOps Engineer ♾️",
            company: "TeamViewer",
            companyUrl: "https://teamviewer.com",
            companyDescription:
                "TeamViewer provides a Digital Workplace platform that connects people with technology.",
            period: "Jan 2025 - Present",
            responsibilities: ["Still exploring 🤠."],
        },
        {
            title: "Software Engineer ⭐",
            company: "Critical TechWorks",
            companyUrl: "https://www.criticaltechworks.com",
            companyDescription:
                "Critical TechWorks is a joint venture between BMW Group and Critical Group, concentrating on aiding BMW in software development.",
            period: "Dec 2023 - Dec 2024",
            responsibilities: [
                "Increased service performance by architecting and deploying Java microservices with Quarkus for the Automotive Infotainment system, enabling seamless feature rollout to 1.000.000+ vehicles.",
                "Reduced production bugs by 75% by increasing tests using JUnit, Mockito, Jest, and Cypress, achieving 90%+ code coverage.",
                "Optimized service response times by 50% through proactive monitoring with Grafana and Elastic Kibana, identifying and resolving performance bottlenecks before customer impact.",
                "Ensured 99.9% service availability by architecting a high‑availability Kubernetes infrastructure with automated scaling and replica management (while reducing costs), implementing robust incident response protocols, and providing 24/7 on‑call support to resolve critical issues within a 15‑minute SLA.",
                "Reduced infrastructure provisioning time from hours to minutes by implementing Infrastructure as Code with Terraform, automating AWS resource management (RDS, S3, Lambda, EKS) and eliminating manual configuration errors.",
            ],
        },
        {
            title: "Full-Stack Developer 👍",
            company: "Go Ready Data",
            companyUrl: "https://goreadydata.com",
            companyDescription:
                "Go Ready Data is a Software House which delivers market-ready and tailor-made Solutions for customers.",
            period: "Aug 2022 - Jan 2023",
            responsibilities: [
                "Maintained 99% uptime for 3 legacy ASP.NET applications by resolving bugs and implementing critical updates, supporting 100+ daily users.",
                "Built and deployed 5 WordPress websites for clients, implementing responsive design and basic SEO.",
                "Served as primary technical contact for 2 clients, gathering requirements and providing regular project updates to ensure alignment with business needs.",
            ],
        },
    ];

    return (
        <section id="experience" className="mb-8">
            <h2 className="text-2xl font-bold mb-4"># Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <h3 className="text-lg font-semibold">
                                ## {exp.title}
                            </h3>
                            <span className="text-muted-foreground text-sm">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-primary">
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {exp.company}
                            </a>
                        </p>
                        <p className="text-gray-600 italic">
                            {exp.companyDescription}
                        </p>
                        <ul className="space-y-1 mt-2">
                            {exp.responsibilities.map((resp, idx) => (
                                <li
                                    key={idx}
                                    className="text-muted-foreground ms-5"
                                >
                                    <span className="text-primary">•</span>{" "}
                                    {resp}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
