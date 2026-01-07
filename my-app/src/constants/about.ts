import { GraduationCap, Code2, Target } from "lucide-react"

export const ABOUT_DATA = {
    intro: "Senior Computer Science Student at International University (VNU-HCM).",
    story: {
        imagePlaceholder: "Profile Image",
        paragraphs: [
            "I am Nguyen Viet Anh Khoa, a Senior Computer Science student at International University, specializing in Full-Stack Development. My academic journey has built a rock-solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), and Design Patterns.",
            "Beyond theory, I am passionate about building scalable, high-quality software. I combine my academic solidity with practical, industry-ready skills in Spring Boot and Next.js to deliver robust backends and high-performance frontends."
        ]
    },
    cards: [
        {
            icon: GraduationCap,
            title: "Education",
            description: "Senior @ International University (Sep 2026). Major in Computer Science.",
            iconColor: "text-primary"
        },
        {
            icon: Target,
            title: "Objective",
            description: "Seeking an internship to learn from senior developers and contribute real value to professional teams.",
            iconColor: "text-chart-4"
        }
    ],
    timeline: [
        {
            period: "2022 - Present (Exp. Sep 2026)",
            role: "Computer Science",
            institution: "International University - VNU HCM",
            description: "Coursework: OOP, Data Structures & Algorithms, Database Systems, Web Application Development, Software Architecture."
        }
    ]
}
