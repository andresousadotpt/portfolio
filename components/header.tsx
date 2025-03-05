import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
    return (
        <header className="mb-8">
            <div className="flex inline-items gap-3">
                <Avatar>
                    <AvatarImage
                        className="AvatarImage"
                        src="https://cdn.andresousa.pt/personal/pfp_portfolio.jpg"
                    />
                    <AvatarFallback>AS</AvatarFallback>
                </Avatar>{" "}
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                    André Sousa
                </h1>
            </div>

            <div className="text-xl text-muted-foreground">
                <span className="text-primary">&gt;</span> DevOps Engineer
            </div>
        </header>
    );
}
