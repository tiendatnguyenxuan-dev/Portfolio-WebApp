import { Cpu, Globe } from "lucide-react"

export const ABOUT_DATA = {
    intro: "Explaining my journey, technical capabilities, and what drives me as a developer.",
    story: {
        imagePlaceholder: "Profile Image",
        paragraphs: [
            "I am a maker at heart. Whether it's code, design, or mechanics, I love understanding how things work and how to make them better.",
            "Starting with a curiosity for how websites were built, I dove headfirst into the world of web development. Over the years, I've cultivated a deep appreciation for clean code, intuitive user interfaces, and seamless performance."
        ]
    },
    cards: [
        {
            icon: Cpu,
            title: "Technical",
            description: "Obsessed with performance optimization, clean architecture, and type safety. I treat code quality as a first-class citizen.",
            iconColor: "text-primary"
        },
        {
            icon: Globe,
            title: "Global Mindset",
            description: "Built products used by people from over 10 countries. I understand the importance of accessibility and i18n.",
            iconColor: "text-chart-4"
        }
    ]
}
