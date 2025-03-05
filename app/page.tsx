import Header from "@/components/header"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 py-8 md:py-16">
      <Header />
      <About />
      <hr className="my-8 border-border" />
      <Skills />
      <hr className="my-8 border-border" />
      <Projects />
      <hr className="my-8 border-border" />
      <Experience />
      <hr className="my-8 border-border" />
      <Contact />
      <Footer />
    </main>
  )
}

