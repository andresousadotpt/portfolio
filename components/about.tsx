export default function About() {
    return (
        <section id="about" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
                # About{" "}
                <span className="text-xs text-gray-500">
                    (and some random phrases that I just would like you to know)
                </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
                <p>
                    I'm a DevOps Engineer{" "}
                    <span className="text-xs text-gray-500">
                        (🤞 working my way into Platform Engineer 🤞)
                    </span>{" "}
                    with experience in building and maintaining robust CI/CD
                    pipelines, infrastructure as code, and cloud-native
                    solutions.
                </p>
                <p>
                    My approach focuses on implementing DevOps best practices to
                    bridge the gap between development and operations, enabling
                    teams to deliver software faster and more reliably.
                </p>
                <p>
                    I know sometimes we just want to say{" "}
                    <i>"You build it, you run it"</i> to our developers but I
                    just want to make the lives of our developers easier, so{" "}
                    <b>I</b> can have my life easier 🤣.
                </p>
            </div>
        </section>
    );
}
