import Header from "./_components/Header"

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
        </>
    )   
}
