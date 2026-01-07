import { Layout, Server, Layers } from "lucide-react"

export const SERVICES_DATA = {
    description: "Combining technical depth with product awareness to deliver comprehensive solutions.",
    services: [
        {
            title: "Frontend Development",
            description: "Building responsive, mobile-friendly layouts with a focus on SEO optimization, accessibility, and fast loading speeds. Using Next.js, React, and Tailwind.",
            icon: Layout,
            features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
        },
        {
            title: "Backend Development",
            description: "Designing scalable RESTful APIs, handling complex business logic, and managing databases. Leveraging Spring Boot and Java for robustness.",
            icon: Server,
            features: ["RESTful APIs", "Database Design", "System Architecture"]
        },
        {
            title: "Full-Stack Integration",
            description: "Seamlessly connecting intuitive UIs with powerful server-side logic to create complete, end-to-end web applications.",
            icon: Layers,
            features: ["API Integration", "Authentication"]
        }
    ]
}
