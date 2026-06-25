import Header from "@/components/header";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "André Sousa",
    url: "https://andresousa.pt",
    jobTitle: "DevOps Engineer",
    image: "https://cdn.andresousa.pt/personal/pfp_portfolio.jpg",
    email: "contact@andresousa.pt",
    sameAs: [
        "https://github.com/andresousadotpt",
        "https://linkedin.com/in/andresousadotpt",
    ],
    knowsAbout: [
        "DevOps",
        "Kubernetes",
        "Terraform",
        "Infrastructure as Code",
        "CI/CD",
        "Cloud Native",
        "GitOps",
        "Observability",
    ],
};

export default function Home() {
    return (
        <main className="min-h-screen max-w-3xl mx-auto px-4 py-8 md:py-16">
            <JsonLd data={personSchema} />
            <Header />
            <About />
            <hr className="my-8 border-border" />
            <Experience />
            <hr className="my-8 border-border" />
            <Skills />
            <hr className="my-8 border-border" />
            <Projects />
            <hr className="my-8 border-border" />
            <Contact />
            <Footer />
        </main>
    );
}
