export default function Footer() {
    return (
        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
                © {new Date().getFullYear()} Andre Sousa. Built with Next.js and
                Tailwind CSS.{" "}
                <span className="text-muted">
                    (Need to make this into full markdown, HTML = 🤣)
                </span>
            </p>
            <p className="mt-1">
                <span className="text-primary">$</span> cd /home/andresousadotpt
            </p>
        </footer>
    );
}
