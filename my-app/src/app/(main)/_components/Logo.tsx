import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <h1 className="text-lg md:text-xl font-bold bg-linear-to-r from-black via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-wider">
                PORTFOLIO
            </h1>
        </Link>
    )
}
