export default function Experience() {
    const experiences = [
        {
            title: "DevOps Engineer 😍",
            company: "TeamViewer",
            period: "Jan 2025 - Presente",
            responsibilities: ["Still exploring 🤠."],
        },
        {
            title: "Software Engineer ⭐",
            company: "Critical TechWorks",
            period: "Dec 2023 - Dec 2024",
            responsibilities: [
                "Developed and maintained Java microservices using Quarkus for the Automotive Infotainment system.",
                "Orchestrated and managed containerized microservices using Kubernetes, ensuring high availability, scalability, and efficient resource utilization.",
                "Embraced DevOps practices within a unified development and operations team.",
                "Established and implemented comprehensive testing strategies using JUnit and Mockito for Backend, Jest and Cypress for Frontend.",
                "Continuously monitored and optimized the performance and scalability of the Java microservices architecture using tools like Grafana and Elastic Kibana.",
                "Provided 24/7 support for our microservices.",
                "Deployed and managed AWS infrastructure (including RDS, S3, Lambda, and EKS) using Terraform through CI/CD pipelines on GitHub Actions, ensuring consistent and automated infrastructure provisioning and Kubernetes cluster management.",
            ],
        },
        {
            title: "Full-Stack Developer 👍",
            company: "Go Ready Data",
            period: "Aug 2022 - Jan 2023",
            responsibilities: [
                "Supported and developed legacy ASP.NET applications, ensuring their continued performance and stability.",
                "Built and maintained WordPress websites, enhancing their functionality and user experience.",
                "Engaged in direct communication with clients to gather requirements, provide updates, and ensure project alignment with client expectations.",
            ],
        },
        {
            title: "Erasmus Pro - Internship 🇮🇹",
            company: "Start Smart Srl",
            period: "May 2022 - Jul 2022",
            responsibilities: [
                "Developed web applications using Angular, contributing to the front-end development and improving user interfaces.",
                "Created Virtual Reality (VR) and Augmented Reality (AR) experiences using Unity, expanding the company’s capabilities in immersive technologies.",
            ],
        },
        {
            title: "Internship 👍",
            company: "Go Ready Data",
            period: "Feb 2021 - Mar 2021",
            responsibilities: [
                "Developed a rule-based chatbot using C#, enhancing the company’s customer interaction capabilities through automated responses",
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
                        <p className="text-primary">{exp.company}</p>
                        <ul className="space-y-1 mt-2">
                            {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-muted-foreground">
                                    <span className="text-primary">-</span>{" "}
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
