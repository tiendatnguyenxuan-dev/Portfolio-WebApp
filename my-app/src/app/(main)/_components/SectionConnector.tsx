"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useId } from "react"

interface SectionConnectorProps {
    variant: "right-to-left" | "left-to-right"
}

export function SectionConnector({ variant }: SectionConnectorProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const gradientId = useId()
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    const rightToLeftPath = "M 800 0 C 800 150, 200 150, 200 300"
    const leftToRightPath = "M 200 0 C 200 150, 800 150, 800 300"
    const path = variant === "right-to-left" ? rightToLeftPath : leftToRightPath

    return (
        <div 
            ref={containerRef} 
            className="w-full h-[150px] md:h-[300px] relative pointer-events-none hidden md:block overflow-visible z-0"
            aria-hidden="true"
        >
            <svg 
                viewBox="0 0 1000 300" 
                preserveAspectRatio="none"
                className="w-full h-full absolute inset-0 text-primary/30"
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                        <stop offset="50%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--chart-4)" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Background Track (faint) */}
                <path
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="opacity-20"
                />
                
                {/* Animated Glowing Line */}
                <motion.path
                    d={path}
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="4"
                    style={{ pathLength, opacity }}
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}
