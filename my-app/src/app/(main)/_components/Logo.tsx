import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="group relative flex items-center gap-2">
            {/* Geometric accent mark */}
            <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute h-full w-full rounded-lg bg-linear-to-br from-primary to-chart-4 opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-md shadow-primary/25" />
                <span className="relative text-sm font-black text-primary-foreground font-heading">
                    AK
                </span>
            </span>
            
            {/* Logo text */}
            <div className="flex flex-col leading-none font-heading">
                <span className="text-base md:text-lg font-bold tracking-wider bg-linear-to-r from-primary via-chart-1 to-chart-4 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
                    FULLSTACK
                </span>
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-[0.2em] transition-all duration-300 group-hover:text-foreground">
                    DEVELOPER
                </span>
            </div>
        </Link>
    )
}
