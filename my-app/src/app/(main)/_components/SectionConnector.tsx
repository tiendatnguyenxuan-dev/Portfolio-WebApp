"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

interface SectionConnectorProps {
    variant: "right-to-left" | "left-to-right"
}

export function SectionConnector({ variant }: SectionConnectorProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    // SVG Path definitions
    // right-to-left: Starts top-right (approx 75% width), curves S-shape to bottom-left (approx 25% width)
    const rightToLeftPath = "M 800 0 C 800 150, 200 150, 200 300"
    
    // left-to-right: Starts top-left (approx 25% width), curves S-shape to bottom-right (approx 75% width)
    const leftToRightPath = "M 200 0 C 200 150, 800 150, 800 300"

    // Viewbox needs to accommodate the width (0-1000 arbitrary units) and height (300)
    
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
                {/* Background Track (faint) */}
                <path
                    d={variant === "right-to-left" ? rightToLeftPath : leftToRightPath}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="opacity-20"
                />
                
                {/* Animated Glowing Line */}
                <motion.path
                    d={variant === "right-to-left" ? rightToLeftPath : leftToRightPath}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    style={{ pathLength, opacity }}
                    strokeLinecap="round"
                />
                
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                        <stop offset="50%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--chart-4)" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
