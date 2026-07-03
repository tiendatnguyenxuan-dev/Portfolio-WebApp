import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="group flex items-center font-heading text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                Dat
            </span>
            <span className="text-primary mx-0.5 animate-pulse">.</span>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                dev
            </span>
        </Link>
    )
}
