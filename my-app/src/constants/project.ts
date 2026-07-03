export const PROJECTS_DATA = {
    title: {
        line1: "Featured",
        line2: "Projects."
    },
    links: {
        github: "https://github.com/tiendatnguyenxuan-dev",
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
            title: "AI-Trip Planner",
            description: "Full-stack web app for generating travel itineraries and suggestions using large language models.",
            tags: [],
            links: {
                demo: "https://ai-trip-planner-dun-psi.vercel.app/",
                github: "https://github.com/tiendatnguyenxuan-dev/AI-Trip-Planner"
            },
            image: "bg-emerald-900/10"
        },
        {
            title: "Drone Delivery System",
            description: "Full-stack web app for delivey system using microservice architecture.",
            tags: [""],
            links: {
                demo: "#",
                github: "https://github.com/foodfast-delivery-microservice/FastfoodDelivery-microservice-monorepo"
            },
            image: "bg-emerald-900/10"
        }
    ]
}
