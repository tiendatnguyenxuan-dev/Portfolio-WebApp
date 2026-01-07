export const PROJECTS_DATA = {
    title: {
        line1: "Featured",
        line2: "Projects."
    },
    links: {
        github: "https://github.com/anhkhoa13-dev",
    },
    description: "Real-world solutions demonstrating full-stack expertise, system architecture, and product thinking.",
    projects: [
        {
            title: "Bus Booking & Management System",
            description: "A comprehensive web app for searching routes, booking tickets, and managing schedules. Features RESTful APIs, VNPay integration, and an E2E admin dashboard with multi-criteria filtering.",
            tags: ["Spring Boot", "Next.js", "VNPay", "Tailwind CSS"],
            links: {
                demo: "#", 
                github: "https://github.com/tiendat1631/booking_springboot/tree/main"
            },
            image: "bg-blue-900/10" 
        },
        {
            title: "AI-Powered Crypto Trading Platform",
            description: "Full-stack trading platform with real-time market data, AI bots, and automated trade execution. Optimized with Next.js SSR, secure NextAuth session management, and interactive TradingView widgets.",
            tags: ["Next.js (SSR)", "Auth.js", "TradingView", "AI Bots"],
            links: {
                demo: "https://coinsantra.vercel.app/",
                github: "https://github.com/anhkhoa13-dev/Trade_Web_App"
            },
            image: "bg-emerald-900/10"
        }
    ]
}
