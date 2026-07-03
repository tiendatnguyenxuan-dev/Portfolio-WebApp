import { GraduationCap, Code2, Target } from "lucide-react"

export const ABOUT_DATA = {
    intro: "Senior Information Technology Student at SAI GON UNIVERSITY (SGU).",
    story: {
        imagePlaceholder: "Profile Image",
        paragraphs: [
            "I am Nguyen Xuan Tien Dat, a Senior Information Technology student at Sai Gon University, specializing in Full-Stack Development. My academic journey has built a rock-solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), and Design Patterns.",
            "Beyond theory, I am passionate about building scalable, high-quality software. I combine my academic solidity with practical, industry-ready skills in Spring Boot and Next.js to deliver robust backends and high-performance frontends."
        ]
    },
    cards: [
        {
            icon: GraduationCap,
            title: "Education",
            description: "Senior at Sai Gon University (Exp. 2027). Major in Information Technology.",
            iconColor: "text-primary"
        },
        {
            icon: Target,
            title: "Objective",
            description: "Seeking an fresher position to learn from senior developers and contribute real value to professional teams.",
            iconColor: "text-chart-4"
        }
    ],
    timeline: [
        {
            period: "2022 - Present (Exp. Dec 2026)",
            role: "Information Technology",
            institution: "Sai Gon University",
            description: "Coursework: OOP, Data Structures & Algorithms, Database Systems, Web Application Development, Software Architecture."
        }
    ]
}
