import { Database, Layout, Terminal } from "lucide-react"

export const SKILLS_DATA = {
    description: "The tools, frameworks, and technologies I use to build digital products.",
    categories: [
        {
            category: "Frontend",
            icon: Layout,
            iconClass: "text-chart-4",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Html", "Css", "Javascript" ]
        },
        {
            category: "Backend",
            icon: Database,
            iconClass: "text-chart-2",
            items: ["Java Spring boot", "ASP.NET", "NestJS "]
        },
        {
            category: "Tools",
            icon: Terminal,
            iconClass: "text-chart-5",
            items: ["Git", "Postman", "Figma", "Draw.io", "Trello"]
        }
    ]
}
